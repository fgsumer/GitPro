import React, { useState, Fragment } from 'react';

import { Form, Input, Button, DatePicker, Typography, Icon } from 'antd';
const { Title } = Typography;

const { RangePicker } = DatePicker;

const Experience = ({ setSelected, inputs, handleSubmit, handleInputChange, onExpDateChange }) => {
  const [inputExperience, setInputExperience] = useState([
    {
      work_title: '',
      company: '',
      location: '',
      employmentType: '',
      jobDescription: '',
      experienceDate: '',
    },
  ]);
  const handleInputChangeExperience = event => {
    event.persist();
    const { name, value } = event.target;
    setInputExperience(inputExperience => ({ ...inputExperience, [name]: value }));

    console.log('changed experience inputs', inputExperience);
  };

  const handleAddFields = () => {
    const values = [...inputExperience];
    values.push({
      work_title: '',
      company: '',
      location: '',
      employmentType: '',
      jobDescription: '',
      experienceDate: '',
    });
    setInputExperience(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputExperience];
    values.splice(index, 1);
    setInputExperience(values);
  };

  return (
    <div>
      <Title level={3}>Work experience</Title>
      <Form autoComplete="off">
        {inputExperience.map((inputField, index) => (
          <Fragment key={`${inputField}~${index}`}>
            <Form.Item label="Title">
              <Input
                placeholder=""
                name="workTitle"
                onChange={handleInputChange}
                value={inputs.workTitle}
              />
            </Form.Item>
            <Form.Item label="Company">
              <Input
                placeholder=""
                name="company"
                onChange={handleInputChange}
                value={inputs.company}
              />
            </Form.Item>
            <Form.Item label="Location">
              <Input
                placeholder=""
                name="location"
                onChange={handleInputChange}
                value={inputs.location}
              />
            </Form.Item>
            <Form.Item label="Employment type" autoComplete="on">
              <Input
                placeholder=""
                name="employmentType"
                onChange={handleInputChange}
                value={inputs.employmentType}
              />
            </Form.Item>
            <Form.Item label="Description">
              <Input
                placeholder=""
                name="jobDescription"
                onChange={handleInputChange}
                value={inputs.jobDescription}
              />
            </Form.Item>
            <Form.Item label="Date">
              <RangePicker placeholder="" name="experienceDate" onChange={onExpDateChange} />
            </Form.Item>
            <Form.Item>
              <Button
                type="dashed"
                style={{ width: '60%' }}
                onClick={() => handleRemoveFields(index)}
              >
                <Icon type="plus" /> Remove Field
              </Button>
            </Form.Item>
          </Fragment>
        ))}
        <Form.Item>
          <Button type="dashed" style={{ width: '60%' }} onClick={() => handleAddFields()}>
            <Icon type="plus" /> Add field
          </Button>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={() => (setSelected = '4')}>
            {/* <a href="./skills"> */}
            Save
            {/* </a> */}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Experience;
