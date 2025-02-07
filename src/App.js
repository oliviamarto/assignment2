import React, { Component } from 'react';
import "./App.css";
import Header from './Header';
import PersonalProfile from './PersonalProfile';
import WorkExperience from './WorkExperience.js';
import Skills from './Skills';
import Education from './Education';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      personInfo: {
        name: "Zh Rimel",
        occupation: "Data Scientist"
      },

      contactInfo: {
        email: "abc@gmail.com",
        web: "abc.github.io/abc",
        mobile: "01234567890"
      },
      
      profile: {
        title: "Personal Profile",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },

      workExperience: {
        title: "Work Experience",
        job1: "Job Title at Company (August 2022 - December 2023)",
        job2: "Job Title 2 at Company 2 (August 2020 - December 2021)",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat."
      },

      keySkills: {
        title: "Key Skills",
        skill: "A Key skill"
      },

      education: {
        title: "Education"
        school1: "New Jersey Institute of Technology",
        school2: "New Jersey Institute of Technology",
        degree1: "BS in Computer Science",
        degree2: "MS in Computer Science",
        year1: "2018 - 2022",
        year2: "2022 - 2023",
        gpa1: "3.9",
        gpa2: "4.0"
      },
    }
  }
  
  render() {
    return (
      <div>
        <Header personInfo={this.state.personInfo} contactInfo={this.state.contactInfo}></Header>
        <div class="separator"></div>
        <PersonalProfile profile={this.state.profile}></PersonalProfile>
        <WorkExperience workExperience={this.state.workExperience}></WorkExperience>
        <Skills keySkills={this.state.keySkills}></Skills>
        <Education education={this.state.education}></Education>
      </div>
    );
  }
}

export default App;