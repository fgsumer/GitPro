import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

import useSignUpForm from './dashboard/handlers/InputHooks';

import Personal from './dashboard/personal';
import Experience from './dashboard/experience';
import Education from './dashboard/education';
// import Projects from './projects' // in this case maybe we can leave this out?
import Skills from './dashboard/skills';

import { Menu } from 'antd';
import 'antd/dist/antd.css';

const Dashboard = () => {
  function handleClick(e) {
    console.log('click', e);
  }

  const handleOnclick = () => {
    console.log('inputs', inputs);
    console.log('ref', ref);

    /*const postInputs = {
      name: inputs.name,
      about: inputs.about,
      telephone: inputs.telephone,
      email: inputs.email,
      country: inputs.country,
      city: inputs.city,
      languages: { language: inputs.language, languageFluencyLevel: inputs.languageFluencyLevel },
      website: inputs.website,

      education: {
        school: inputs.school,
        degree: inputs.degree,
        fieldOfStudy: inputs.fieldOfStudy,
        grade: inputs.grade,
        educationDescription: inputs.educationDescription,
        educationStartDate: inputs.educationStartDate,
        educationEndDate: inputs.educationEndDate,
      },
      workExperience: {
        workTitle: inputs.workTitle,
        company: inputs.company,
        companyUrl: inputs.companyUrl,
        location: inputs.location,
        employmentType: inputs.employmentType,
        jobDescription: inputs.jobDescription,
        workStartDate: inputs.workStartDate,
        workEndDate: inputs.workEndDate,
      },

      skills: inputs.skills,
      certificate: {
        certificateName: inputs.certificateName,
        date: inputs.date,
      },

      gitHub: {
        githubTitle: inputs.githubTitle,
        githubPhoto: inputs.githubPhoto,
        video: inputs.video,
        repository: inputs.repository,
        deployedSite: inputs.deployedSite,
        githubDescription: inputs.githubDescription,
      },
    };*/

    axios
      .post('http://localhost:5000/personal/add', inputs, {
        //inputs will change to postInputs
        headers: {
          'x-auth-token': localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
      })
      .then(e => {
        console.log(e);
      })
      .catch(err => {
        console.log(err);
      });

    //alert('Successfully saved!');
  };

  const {
    inputs,
    handleInputChange,
    handleSubmit,
    onEduDateChange,
    onExpDateChange,
  } = useSignUpForm(
    {
      name: '',
      about: '',
      picture: '',
      telephone: '',
      email1: '',
      country: '',
      city: '',
      language: '',
      languageFluencyLevel: '',
      website: '',
      school: '',
      degree: '',
      fieldOfStudy: '',
      grade: '',
      educationDescription: '',
      educationStartDate: '',
      educationEndDate: '',
      workTitle: '',
      company: '',
      companyUrl: '',
      location: '',
      employmentType: '',
      jobDescription: '',
      workStartDate: '',
      workEndDate: '',
      skills: '',
      certificateName: '',
      date: '',
      githubTitle: '',
      githubPhoto: '',
      video: '',
      repository: '',
      deployedSite: '',
      githubDescription: '',
    },
    handleOnclick,
  );

  /* useEffect(() => {
    document.title = `You clicked ${count} times`;
  }); */

  const [selected, setSelected] = useState('1');

  return (
    <Router>
      <div>
        <Menu defaultSelectedKeys={selected} onClick={handleClick} mode="horizontal">
          <Menu.Item key="1">
            <Link to="/auth/dashboard/personal">Personal Info</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/auth/dashboard/education">Education</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/auth/dashboard/experience">Experience</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/auth/dashboard/skills">Skills</Link>
          </Menu.Item>
          {/* <Menu.Item><Link to="/auth/dashboard/projects">Projects</Link></Menu.Item> */}
        </Menu>
        <Switch>
          <Route path="/auth/dashboard/personal">
            <Personal
              setSelected={setSelected}
              inputs={inputs}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </Route>
          <Route path="/auth/dashboard/education">
            <Education
              setSelected={setSelected}
              inputs={inputs}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              onEduDateChange={onEduDateChange}
            />
          </Route>
          <Route path="/auth/dashboard/experience">
            <Experience
              setSelected={setSelected}
              inputs={inputs}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              onExpDateChange={onExpDateChange}
            />
          </Route>
          <Route path="/auth/dashboard/skills">
            <Skills
              setSelected={setSelected}
              inputs={inputs}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
            />
          </Route>
          {/* <Route path="/auth/dashboard/projects"><Projects /></Route> */}
        </Switch>
      </div>
    </Router>
  );
};

export default Dashboard;
