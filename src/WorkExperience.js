import React, { Component } from "react";

class WorkExperience extends Component {
    render() {
        return (
            <div class="section">
                <div class="section-title">{this.state.workExperience.title}</div>
                    <div class="section-text">
                    <div class="subheader">{this.state.workExperience.job1}</div>
                    <div>{this.state.workExperience.content}</div>
                    <div class="spacer"></div>
                    <div class="subheader">{this.state.workExperience.job2}</div>
                    <div>{this.state.workExperience.content}</div>
                </div>
            </div>
        );
    }
}

export default WorkExperience;