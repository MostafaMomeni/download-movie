import React , {useState , useEffect} from 'react'
import "./SendComment.css"
import { useParams } from 'react-router-dom';
import Data from "../../../Data"
import Swal from 'sweetalert2';

export default function SendComment() {

  const params = useParams().shortName;

  const [data, setData] = useState(Data);
  const [filterData, setFilterData] = useState([]);
  const [textValue , setTextValue] = useState("")

  useEffect(() => {
    let filteredData = data.filter((item) => item.shortName === params);
    setFilterData(filteredData);
  }, []);

  const sendCommentHandler = ()=>{
    if(textValue.trim() !== ""){
      filterData.map(item =>{
        item.comments.push(textValue)
        Swal.fire({
          title:"نظر شما ثبت و پس از تایید نمایش داده میشود",
          icon:"success",
          confirmButtonText:"باشه",
        })
        setTextValue("")
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
    <div>
        <h2>نظر خود را بنویسید</h2>
        <textarea cols="30" rows="4" className='textarea-send-comment' value={textValue} onChange={(e)=> setTextValue(e.target.value)} placeholder='این فیلم چطور بود'></textarea>
        <button className='btn btn-outline-success mb-5 w-100' onClick={()=> sendCommentHandler()}>ارسال نظر</button>
    </div>
    </>
  )
}
