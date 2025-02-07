import React, { Component } from "react";

class PersonalProfile extends Component {
  render() {
        return (
            <div class="section">
                <div class="section-title">{this.props.profile.title}</div>
                <div class="section-text">{this.props.profile.content}</div>
            </div>
        );
    }
}

export default PersonalProfile;