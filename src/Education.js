import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
        <div class="section">
        <div class="section-title">{this.state.education.title}</div>
        <div class="section-text">
          <div class="subheader">{this.state.education.school1}</div>
          <div>{this.state.education.degree1}</div>
          <div>{this.state.education.year1}</div>
          <div>GPA: {this.state.education.gpa1}</div>
          <div class="spacer"></div>
          <div class="subheader">{this.state.education.school2}</div>
          <div>{this.state.education.degree2}</div>
          <div>{this.state.education.year2}</div>
          <div>GPA: {this.state.education.gpa2}</div>
        </div>
      </div>
    );
  }
}

export default Education;