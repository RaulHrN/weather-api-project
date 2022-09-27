import React from "react";
import "./InfoLine.css"

interface InfoProps{
    image: string;
    title: string;
    value: number | string | undefined;
    valueType: string;
}

export const InfoLine = (props: InfoProps) => {
    return (
        <div className="today_info-line">
        <p>
        <img src={props.image} alt={props.title}/>
          {props.title}:
        </p>
        <p>{props.value} {props.valueType}</p>
      </div>
    )
}