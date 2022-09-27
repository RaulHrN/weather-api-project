import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { ResponseWeather } from "../../models/weather";

export const Hourly = () => {
    const location = useLocation();

    useEffect(() => {
    console.log(location.state);
    }, [])
    return (
        <section className="page">
            <h1>Hourly Page</h1>
        </section>
    )
}