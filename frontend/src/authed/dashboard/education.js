import React, { useState, Fragment } from 'react';

import { Form, Input, Button, DatePicker, Typography, Icon } from 'antd';
const { Title } = Typography;
const { RangePicker } = DatePicker;

const Education = ({ setSelected, inputs, handleSubmit, handleInputChange, onEduDateChange }) => {
  const [inputFields, setInputFields] = useState([
    {
      school: '',
      degree: '',
      fieldOfStudy: '',
      grade: '',
      educationDescription: '',
      educationDate: '',
    },
  ]);
  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      school: '',
      degree: '',
      fieldOfStudy: '',
      grade: '',
      educationDescription: '',
      educationDate: '',
    });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  return (
    <div>
      <Title level={3}>Education</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        {inputFields.map((inputField, index) => (
          <Fragment key={`${inputField}~${index}`}>
            <Form.Item label="School">
              <Input
                placeholder=""
                name="school"
                onChange={handleInputChange}
                value={inputs.school}
              />
            </Form.Item>
            <Form.Item label="Degree">
              <Input
                placeholder=""
                name="degree"
                onChange={handleInputChange}
                value={inputs.degree}
              />
            </Form.Item>
            <Form.Item label="Field of study">
              <Input
                placeholder=""
                name="fieldOfStudy"
                onChange={handleInputChange}
                value={inputs.fieldOfStudy}
              />
            </Form.Item>
            <Form.Item label="Grade">
              <Input
                placeholder=""
                name="grade"
                onChange={handleInputChange}
                value={inputs.grade}
              />
            </Form.Item>
            <Form.Item label="Description">
              <Input
                placeholder=""
                name="educationDescription"
                onChange={handleInputChange}
                value={inputs.educationDescription}
              />
            </Form.Item>
            <Form.Item label="Date">
              <RangePicker onChange={onEduDateChange} name="educationDate" />
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
          <Button type="primary submit" onClick={() => (setSelected = '3')}>
            {/* <a href="./experience"> */}
            Save
            {/* </a> */}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Education;
