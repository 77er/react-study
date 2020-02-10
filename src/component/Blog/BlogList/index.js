import React from 'react';
//这是一个战士组件（Dumb/Presentational component）
export default (props)=>{
    return(
        <li>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </li>
    )
}