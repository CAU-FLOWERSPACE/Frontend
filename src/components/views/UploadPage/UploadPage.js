import React, {useState, useEffect} from 'react'
import { GiConsoleController, GiFlexibleLamp } from 'react-icons/gi';
import {BsFillImageFill} from 'react-icons/bs';
import './Upload.css';
import { Container } from '../Common';
import { SelectButton, SubmitButton, Title, SelectGuideMessage, Image } from './';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { imageColorSubmit, imageTherapySubmit } from '../../../_actions/user_action';
//import AWS, { S3 } from 'aws-sdk';
import S3 from 'react-aws-s3';
import {v1, v3, v4, v5} from 'uuid';

export default function UploadPage({props}) {

    useEffect(() => {
        console.log('컴포넌트가 화면에 나타남');
        return () => {
          console.log('컴포넌트가 화면에서 사라짐');
        };
      }, []);

    const [fileURL, setFileURL] = useState(""); //미리보기용 로컬 url
   const [choice, setChoice] = useState(0); //선택 therapy : 1, color : 2
    const [imageURL, setImageURL] = useState(""); //s3 url

    const [isUpload, setIsUpload] = useState(false);
    const [isSelect, setIsSelect] = useState(false);
    const history = useHistory(); //페이지 인자 전달
    const dispatch = useDispatch();
    const REGION = "ap-northeast-2";

    // useEffect(() => {
    //     window.localStorage.setItem('choice', choice);
    //   }, [choice]);

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
                setIsUpload(true);
                
            })
            .catch(err => console.error(err))
        
        console.log(`imageURL : ${imageURL}`)

       
    }

    const onTherapy = (event) => //1
    {
        setChoice(1);
        //choice = 1;
        setIsSelect(true);
        //console.log(choice);//

    }

    const onColor = (event) => //2
    {
        setChoice(2);
       // choice = 2;
        setIsSelect(true);
        //console.log(choice);//
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
            if(choice === 2)
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

            else if(choice === 1) //테라피
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
            <Title>공간 사진을 업로드 해주세요. </Title>
            <input type="file" accept="image/*" onChange = {onChangeHandler}/>
            <Image>
                {isUpload ? 
                    <img src = {fileURL} width = "100%" height = "100%" overFit = "cover"/>
                    : <BsFillImageFill  size = "10%" style ={{margin : "0 auto"}}/>
                }
            </Image> 
            <SelectGuideMessage>원하시는 보기를 선택해주세요 !</SelectGuideMessage>
            <div> 
                <SelectButton onClick={onTherapy} disabled = {!isUpload} id = '1' choice = {choice}>내 공간에 딱 알맞은 테라피</SelectButton>
                <SelectButton onClick={onColor} disabled = {!isUpload} id = '2' choice = {choice}>내 공간에 어울리는 스타일링</SelectButton>
            </div>

           
            <SubmitButton onClick={onSubmitHandler} disabled = {!isSelect}>추천결과 보기 go</SubmitButton>
            
            {/* accept="image/*" capture="camera" */}
        </Container>
    )
}
