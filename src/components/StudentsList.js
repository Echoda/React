import React from 'react';
import Student from './Student';

// props.stus:  学生数组
export default function StudentsList(props) {
    console.log(props.stus);
    return (
        <ul>
            {props.stus.map((it) => {
                return <Student key={it.id} {...it}/>
            })}
        </ul>
    )
}
