import React, { Component } from "react";
import StudentNavBar from '../Home_Component/StudentNavBar';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <StudentNavBar/>
                <a href="/groups">
                    Group registration
                </a>
            </div>
        )
    }
}