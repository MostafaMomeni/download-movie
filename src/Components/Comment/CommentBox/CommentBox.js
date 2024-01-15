import React, { useState , useEffect } from "react";
import "./CommentBox.css";
import { AiOutlineUser } from "react-icons/ai";
import { useParams } from 'react-router-dom';
import Data from "../../../Data"
import Swal from 'sweetalert2';


export default function CommentBox(props) {

  const [showSendAnswerBox, setShowSendAnswerBox] = useState(false);

  const params = useParams().shortName;
  const localUser = JSON.parse(localStorage.getItem("user"))

  const [data, setData] = useState(Data);
  const [filterData, setFilterData] = useState([]);
  const [textValue , setTextValue] = useState("")

  useEffect(() => {
    let filteredData = data.filter((item) => item.shortName === params);
    setFilterData(filteredData);
  }, []);

  const sendCommentHandler = (id)=>{
    
    let yearNow = new Date().getFullYear()
    let montNow = new Date().getDate()
    let dayNow = new Date().getDay()

    const dateNow = `${yearNow}/${montNow}/${dayNow}`

    if(textValue.trim() !== ""){
      filterData.map(item =>{
        const filterComment = item.comments.filter(comment => comment.id === id)
        filterComment.map(comment =>{
            comment.answer.push({id:comment.answer.length+1 , user:localUser.userName , date : dateNow , text:textValue})
        })
        Swal.fire({
          title:"نظر شما ثبت و پس از تایید نمایش داده میشود",
          icon:"success",
          confirmButtonText:"باشه",
        })
        setTextValue("")
        setShowSendAnswerBox(false)
      })
    }else{
      Swal.fire({
        title:"لطفا مقداری را وارد کنید",
        icon:"error",
        confirmButtonText:"باشه",
      })
    }
  }

  return (
    <>
      <div className="comment-box-parent mb-4">
        <div className="header-comment-box">
          <div>
            <span className="span-header-comment-box">
              <AiOutlineUser />
            </span>
            <span className="span-header-comment-box">{props.user}</span>
            <span className="span-header-comment-box">{props.date}</span>
          </div>
          <div>
            <button className="btn btn-outline-success" onClick={()=>setShowSendAnswerBox(!showSendAnswerBox)}>پاسخ</button>
          </div>
        </div>
        {showSendAnswerBox && (
          <div className="send-answer-box-comment-box">
            <textarea
              cols="30"
              rows="4"
              className="textarea-send-comment-box"
              placeholder="پاسخ خود را بنویسید..."
              value={textValue}
              onChange={(e)=> setTextValue(e.target.value)}
            ></textarea>
            <button className="btn btn-outline-success mb-5 w-100" onClick={()=> sendCommentHandler(props.id)}>
              ارسال پاسخ
            </button>
          </div>
        )}
        <div className="text-comment-box">{props.text}</div>
        {props.answer && (
            props.answer.map(item =>(
        <div className="answer-box-comment-box">
          <div className="header-comment-box">
            <div>
              <span className="span-header-comment-box">
                <AiOutlineUser />
              </span>
              <span className="span-header-comment-box">{item.user}</span>
              <span className="span-header-comment-box">{item.date}</span>
            </div>
          </div>
          <div className="text-comment-box mt-2">{item.text}</div>
        </div>
            ))
        )}
      </div>
    </>
  );
}
