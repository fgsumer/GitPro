import React, { useState, Fragment } from 'react';
import { Form, Input, Button, DatePicker, Icon } from 'antd';
import 'bootstrap/dist/css/bootstrap.css';

const { RangePicker } = DatePicker;

const Education = () => {
  function onDateChange(date, dateString) {
    console.log(date, dateString);
  }
  const [inputFields, setInputFields] = useState([
    { institution: '', field: '', degree: '', date: '' },
  ]);
  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({ institution: '', field: '', degree: '', date: '' });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === 'institution') {
      values[index].institution = event.target.value;
    } else if (event.target.name === 'field') {
      values[index].field = event.target.value;
    } else if (event.target.name === 'degree') {
      values[index].degree = event.target.value;
    } else {
      values[index].date = event.target.value;
    }

    setInputFields(values);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('inputFields', inputFields);
  };
  return (
    <div>
      Education
      <Form onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <Fragment key={`${inputField}~${index}`}>
            <Form.Item label="institution">
              <Input
                placeholder="input placeholder"
                type="text"
                className="form-control"
                id="institution"
                name="institution"
                value={inputField.institution}
                onChange={event => handleInputChange(index, event)}
              />
            </Form.Item>
            <Form.Item label="Field of study">
              <Input
                placeholder="input placeholder"
                type="text"
                className="form-control"
                id="field"
                name="field"
                value={inputField.field}
                onChange={event => handleInputChange(index, event)}
              />
            </Form.Item>
            <Form.Item label="Degree">
              <Input
                placeholder="input placeholder"
                type="text"
                className="form-control"
                id="degree"
                name="degree"
                value={inputField.degree}
                onChange={event => handleInputChange(index, event)}
              />
            </Form.Item>

            {/* We don't have description&grade in our data model */}
            {/* <Form.Item label="Grade">
          <Input
            placeholder="input placeholder"
            type="text"
            className="form-control"
            id="grade"
            name="grade"
            value={inputField.grade}
          />
        </Form.Item> */}
            {/* <Form.Item label="Description">
          <Input placeholder="input placeholder" />
        </Form.Item> */}

            <Form.Item
              label="Date"
              id="date"
              name="date"
              value={inputField.date}
              onChange={event => handleInputChange(index, event)}
            >
              <DatePicker className="form-control" onChange={onDateChange} />
              <RangePicker onChange={onDateChange} />
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
        <div>
          <Form.Item>
            <Button type="dashed" style={{ width: '60%' }} onClick={() => handleAddFields()}>
              <Icon type="plus" /> Add field
            </Button>
          </Form.Item>
          <Form.Item>
            <Button type="primary">Next</Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default Education;
