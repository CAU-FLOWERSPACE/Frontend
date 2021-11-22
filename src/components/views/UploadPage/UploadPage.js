import React, {useState} from 'react'
import { GiConsoleController, GiFlexibleLamp } from 'react-icons/gi';
import { Container } from '../Common';
import { SelectButton, SubmitButton } from './';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { imageColorSubmit, imageTherapySubmit } from '../../../_actions/user_action';
//import AWS, { S3 } from 'aws-sdk';
import S3 from 'react-aws-s3';
import {v1, v3, v4, v5} from 'uuid';

export default function UploadPage({props}) {

    const [fileURL, setFileURL] = useState(""); //미리보기용 로컬 url
    const [choice, setChoice] = useState(0); //선택
    const [imageURL, setImageURL] = useState(""); //s3 url
    const history = useHistory(); //페이지 인자 전달
    const dispatch = useDispatch();
    const REGION = "ap-northeast-2";

    // const s3 = new AWS.S3({
    //     accessKeyId: process.env.REACT_APP_ACCESS_ID,
    //     secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
    //     //region: process.env.REACT_APP_REGION,
    //     region : REGION,
    // });

    const onChangeHandler = (event) =>
    {
        event.preventDefault();

        setFileURL(URL.createObjectURL(event.target.files[0])); 
        const file = event.target.files[0];
        const uuidKey = v1();
       console.log(uuidKey);
       

        // var s3_params = {
        //     Bucket : process.env.REACT_APP_BUCKET_NAME,
        //     Body : file,
        //     // Key : `upload_image/${v1().toString().replace("-", "")}.${
        //     //     file.type.split("/")[1]
        //     // }`,
        //     Key : `upload_image/${uuidKey}`+".jpg",
        //     ContentType : file.type,
        //     ACL : "public-read",
        // };

        const config = {
            bucketName: process.env.REACT_APP_BUCKET_NAME,
            dirName: 'upload_image', /* optional */
            region: REGION,
            accessKeyId: process.env.REACT_APP_ACCESS_ID,
            secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
            //s3Url: 'https:/your-custom-s3-url.com/', /* optional */
        }

        // s3.putObject(s3_params, function(err,data){
        //     if(err) console.log(err, err.stack);
        //     else    console.log(data);
        // });
        const ReactS3Client = new S3(config);
 
        ReactS3Client
            .uploadFile(file, uuidKey)
            .then(data => {
                console.log(data); //
                console.log(`data.location : ${data.location}`);//
                setImageURL(data.location); //
                
            })
            .catch(err => console.error(err))
        
        console.log(`imageURL : ${imageURL}`)

       
    }

    const onTherapy = (event) => //1
    {
        setChoice(1);
        //2가되면 특수효과 지우기

    }

    const onColor = (event) => //2
    {
        setChoice(2);
        //1이 되면 특수효과 지우기
    }

    const onSubmitHandler = (event) =>
    {
        console.log("submit")

        let body = {
            "image_path" : imageURL
        }
        
        console.log(body)
        
        if(choice !== 0)
        {
            if(choice === 1)
            {
                dispatch(imageColorSubmit(body)) //색감
                .then(response => {
                 console.log(response);//

                history.push(
                    {
                        pathname : "/place_color_result",
                        state : {response : response.payload}

                    })
                 })

            }

            else if(choice === 2) //테라피
            {
                dispatch(imageTherapySubmit(body)) //테라피
                .then(response => {
                 console.log(response); //

                 history.push(
                     {
                        pathname : "/place_therapy_result",
                        state : {response : response.payload}

                     }
                    
                )
                 }) 
            }

            

            
            
        }
    }



    return (
        <Container>
            <input type="file" accept="image/*" onChange = {onChangeHandler}/>
            <img src = {fileURL}/>
            {/* img 위한 빈 div 만들기 */}
            <div> 
                {/* 두 개는 가로로, 특수효과 주기 */}
                <SelectButton onClick={onTherapy}>공간색감</SelectButton>
                <SelectButton onClick={onColor}>공간테라피</SelectButton>
            </div>
            <SubmitButton onClick={onSubmitHandler}>추천결과 보기</SubmitButton>
            
            {/* accept="image/*" capture="camera" */}
        </Container>
    )
}
