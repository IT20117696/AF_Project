import React, { Component } from "react";
import MainHome from "./mainhome";

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <MainHome/>
                <a href="/groups">
                    Group registration
                </a>
            </div>
        )
    }
}