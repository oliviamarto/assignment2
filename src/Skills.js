import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
        <div class="section">
        <div class="section-title">{this.state.keySkills.title}</div>
        <div class="skills-list">
          <div class="column">
            <div>{this.state.keySkills.skill}</div>
            <div>{this.state.keySkills.skill}</div>
            <div>{this.state.keySkills.skill}</div>
          </div>
          <div class="column">
            <div>{this.state.keySkills.skill}</div>
            <div>{this.state.keySkills.skill}</div>
            <div>{this.state.keySkills.skill}</div>
          </div>
          <div class="column">
            <div>{this.state.keySkills.skill}</div>
            <div>{this.state.keySkills.skill}</div>
            <div>{this.state.keySkills.skill}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;