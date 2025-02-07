import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
        return (
            <div class="section">
                <div class="section-title">{this.state.profile.title}</div>
                <div class="section-text">{this.state.profile.content}</div>
            </div>
        );
    }
}

export default PersonalProfile;