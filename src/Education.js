import React, { Component } from "react";

class Education extends Component {
  render() {
    return (
        <div class="section">
        <div class="section-title">{this.props.education.title}</div>
        <div class="section-text">
          <div class="subheader">{this.props.education.school1}</div>
          <div>{this.props.education.degree1}</div>
          <div>{this.props.education.year1}</div>
          <div>GPA: {this.props.education.gpa1}</div>
          <div class="spacer"></div>
          <div class="subheader">{this.props.education.school2}</div>
          <div>{this.props.education.degree2}</div>
          <div>{this.props.education.year2}</div>
          <div>GPA: {this.props.education.gpa2}</div>
        </div>
      </div>
    );
  }
}

export default Education;