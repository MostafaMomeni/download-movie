import React, { useState } from "react";
import "./AdminComments.css";
import { Comments } from "../../../Data";
import Swal from "sweetalert2";

export default function AdminComments() {
  const [comments, setComments] = useState(Comments);

  const bodyComment = (body) => {
    Swal.fire({
      title: body,
      confirmButtonText: "باشه",
    });
  };

  const changeIsAnswer = (id) => {
    let newArray = [];
    comments.map((item) => {
      if (item.id === id) {
        if (item.isAnswer === 1) {
          item.isAnswer = 0;
        } else {
          item.isAnswer = 1;
        }
      }
      newArray.push(item);
    });
    setComments(newArray);
  };

  const deleteHandler = (id) => {
    let filterData = comments.filter((item) => item.id !== id);

    Swal.fire({
      title: "آیا میخواهید این کامنت را حذف کنید؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "بله حذف میکنم",
      cancelButtonText: "خیر دستم خورد",
    }).then((result) => {
      if (result.isConfirmed) {
        setComments(filterData);
        Swal.fire({
          title: "شما با موفقیت این کامنت را حذف کردید",
          icon: "success",
        });
      }
    });
  };

  const showAnswerSwal = (id) => {
    let newArray = [];

    Swal.fire({
      title: "ثبت پاسخ برای کامنت",
      cancelButtonColor: "#d33",
      confirmButtonText: "ارسال",
      cancelButtonText: "انصراف",
      showCancelButton: true,
      input: "textarea",
    }).then((res) => {
      if (res.isConfirmed) {

        comments.map((item) => {
          if (item.id === id) {
              item.isAnswer = 1;
          }
          newArray.push(item);
        });
        setComments(newArray);
        Swal.fire({
          title: "پاسخ شما با موفقیت ثبت شد",
          icon: "success",
          confirmButtonText: "بستن",
        });
      }
    });
  };

  return (
    <>
      <h3>کامنت ها</h3>
      <div className="admin-comments-parent">
        {comments.length ? (
          <table>
            <thead>
              <tr>
                <td>شناسه</td>
                <td>کاربر</td>
                <td>فیلم</td>
                <td>متن</td>
                <td></td>
              </tr>
            </thead>

            <tbody>
              {comments.map((item, index) => (
                <tr key={item.id} className="tr-tbody-table-admin-comments">
                  <td
                    className={`${
                      item.isAnswer === 1
                        ? "green-td-admin-comments"
                        : "red-td-admin-comments"
                    }`}
                  >
                    {index + 1}
                  </td>
                  <td>{item.user}</td>
                  <td>{item.movie}</td>
                  <td>
                    {" "}
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => bodyComment(item.body)}
                    >
                      مشاهده
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-primary ms-2"
                      onClick={() => changeIsAnswer(item.id)}
                    >
                      تایید
                    </button>
                    <button
                      className="btn btn-outline-primary ms-2"
                      onClick={() => showAnswerSwal(item.id)}
                    >
                      پاسخ
                    </button>
                    <button
                      className="btn btn-outline-danger ms-2"
                      onClick={() => deleteHandler(item.id)}
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3>هیچ کامنتی یافت نشد☹</h3>
        )}
      </div>
    </>
  );
}
