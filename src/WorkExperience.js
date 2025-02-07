import React, { Component } from "react";

class WorkExperience extends Component {
    render() {
        return (
            <div class="section">
                <div class="section-title">{this.props.workExperience.title}</div>
                    <div class="section-text">
                    <div class="subheader">{this.props.workExperience.job1}</div>
                    <div>{this.props.workExperience.content}</div>
                    <div class="spacer"></div>
                    <div class="subheader">{this.props.workExperience.job2}</div>
                    <div>{this.props.workExperience.content}</div>
                </div>
            </div>
        );
    }
}

export default WorkExperience;