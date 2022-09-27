import React, { useEffect } from "react";
import { useLocation } from "react-router";

export const Daily = () => {
    const location = useLocation();

    useEffect(() => {
    console.log(location.state);
    }, [])
    return (
        <section className="page">
            <h1>Daily Page</h1>
        </section>
    )
}