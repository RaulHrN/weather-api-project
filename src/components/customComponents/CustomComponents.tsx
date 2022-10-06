import React from "react";
import "./CustomComponents.css";

interface CommonProps {
  text: string;
  size?: string;
}

interface TitleArticleProps extends Omit<CommonProps, "size"> {
  title: string;
}

export const Temperature = (props: CommonProps) => {
  const currSize: string = props.size === "Large" ? "2.2rem" : "2rem";
  return (
    <p style={{ fontSize: `${currSize}`, fontWeight: "600", color: "#0077b6" }}>
      {props.text}ºC
    </p>
  );
};

export const TitleArticle = (props: TitleArticleProps) => {
  return (
    <article className="title_article">
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </article>
  );
};

export const RainImg = (props: CommonProps) => {
  return (
    <div className="rain">
      <img
        src="https://img.icons8.com/windows/32/000000/heavy-rain.png"
        alt="rain"
      />
      <p>{props.text}%</p>
    </div>
  );
};
