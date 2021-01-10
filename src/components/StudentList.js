import React from "react";
/**
 * 
 * @param {*} props 
 * stus: 学生信息数组
 */
export default function StudentList(props) {

  return (
    <ul>
        {props.stus.map((it) => {
            return (<li key={it.id}>
                【name:】 {it.name}
                【email:】 {it.email}
                【phone:】 {it.phone}
            </li>)
        })}
    </ul>
  );
}
