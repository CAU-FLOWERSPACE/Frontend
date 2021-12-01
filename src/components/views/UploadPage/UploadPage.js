import React, {useState, useEffect} from 'react'
import { GiConsoleController, GiFlexibleLamp } from 'react-icons/gi';
import {BsFillImageFill} from 'react-icons/bs';
import './Upload.css';
import { Container } from '../Common';
import { SelectButton, SubmitButton, Title, SelectGuideMessage, Image } from './';
import { ButtonContainer} from '../Common';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router';
import { imageColorSubmit, imageTherapySubmit } from '../../../_actions/user_action';
//import AWS, { S3 } from 'aws-sdk';
import S3 from 'react-aws-s3';
import {v1, v3, v4, v5} from 'uuid';

export default function UploadPage({props}) {

    const location = useLocation();
    const choice = location.state.choice;

    console.log(choice);


    const [fileURL, setFileURL] = useState(""); //미리보기용 로컬 url
    // const [choice, setChoice] = useState(0); //선택 therapy : 1, color : 2
    const [imageURL, setImageURL] = useState(""); //s3 url

    const [isUpload, setIsUpload] = useState(false);
    const history = useHistory(); //페이지 인자 전달
    const dispatch = useDispatch();
    const REGION = "ap-northeast-2";

    const onChangeHandler = (event) =>
    {
        event.preventDefault();

        setFileURL(URL.createObjectURL(event.target.files[0])); 
        const file = event.target.files[0];
        const uuidKey = v1();
        console.log(uuidKey);
       

        const config = {
            bucketName: process.env.REACT_APP_BUCKET_NAME,
            dirName: 'upload_image', /* optional */
            region: REGION,
            accessKeyId: process.env.REACT_APP_ACCESS_ID,
            secretAccessKey: process.env.REACT_APP_ACCESS_KEY,
            
        }
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

    const onGoBack = (event) =>
    {
        history.goBack();
    }

    const onSubmitHandler = (event) =>
    {
        let body = {
            "image_path" : imageURL
        }
        
        
        if(choice !== 0)
        {

            if(choice === 1) //테라피
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

            else if(choice === 2)
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

            

            
            
        }
    }



    return (
        <>
            <Title>원하는 공간을 업로드 해주세요. </Title>

            <div style = {{display : "flex", justifyContent : "center", margin : "0 auto", width : "80%"}}>
                <input type="file" accept="image/*" onChange = {onChangeHandler}/>
            </div>
            
            <Image>
                {isUpload ? 
                    <img src = {fileURL} width = "100%" height = "100%" overFit = "cover"/>
                    : <BsFillImageFill  size = "8%" style = {{margin : "0 auto"}}/>
                }
            </Image> 

            <SelectGuideMessage>'결과보기'를 누르면 추천 결과로 이동합니다.</SelectGuideMessage>

            <ButtonContainer>
                <SubmitButton onClick={onGoBack} color = "#AEC4BA">이전으로</SubmitButton>
                <SubmitButton onClick={onSubmitHandler}>결과보기</SubmitButton>
            </ButtonContainer>
            
        </>
    )
}
