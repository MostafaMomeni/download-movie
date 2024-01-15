import React, { useState } from "react";
import "./DropDownBox.css";

export default function DropDownBox(props) {

  return (
    <>
    <div className={`drop-down-box-parent ${props.swal ? "swal-drop-down-box" : ""}`}>
        <select
              className={`drop-down-box ${props.swal ? "swal-drop-down-box" : ""}`}
              onChange={(e) =>
                (
                  props.swal ? (
                    props.setDropDownValue(e)
                  ) : (
                    props.setDropDownValue(e.target.value)
                  )
                ) 
                }
            >
              <option value="empty" selected disabled hidden>
                {props.title}
              </option>
              {props.items.map(item =>(
                <option value={item.value}>{item.title}</option>
              ))}
        </select>
    </div>
    </>
  );
}
