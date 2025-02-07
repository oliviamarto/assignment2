import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
        <div class="header">
        <div class="biography">
            <div class="name-title">
                <div class="name">{this.props.personInfo.name}</div>
                <div class="title">{this.props.personInfo.occupation}</div>
            </div>
            <div class="contact">
                <div>Email: <a> {this.props.contactInfo.email} </a></div>
                <div>Web: {this.props.contactInfo.web}</div>
                <div>Mobile: {this.props.contactInfo.mobile}</div>
            </div>
        </div>
        <div class="spacer"></div>
      </div>
    );
  }
}

export default Header;