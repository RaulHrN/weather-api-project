import React from "react";
import { CardResume } from "../cardResume/CardResume";
import "./CardBox.css";

export const CardBox = () => {
    return (
        <article className="card_box">
            <div className="card_box-header">
                <p></p>
                <button>See more</button>
            </div>
            <div className="card_box-body">
                <CardResume/>
            </div>
        </article>
    )
}