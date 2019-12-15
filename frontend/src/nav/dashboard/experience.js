import React, { useState, Fragment } from 'react';

import { Form, Input, Button, DatePicker, Icon } from 'antd';
import 'bootstrap/dist/css/bootstrap.css';

const { RangePicker } = DatePicker;

const Experience = () => {
  function onDateChange(date, dateString) {
    console.log(date, dateString);
  }
  const [inputFields, setInputFields] = useState([
    { title: '', employment_type: '', company: '', location: '', description: '', date: '' },
  ]);

  const handleAddFields = () => {
    const values = [...inputFields];
    values.push({
      title: '',
      employment_type: '',
      company: '',
      location: '',
      description: '',
      date: '',
    });
    setInputFields(values);
  };

  const handleRemoveFields = index => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    if (event.target.name === 'title') {
      values[index].title = event.target.value;
    } else if (event.target.name === 'employment_type') {
      values[index].employment_type = event.target.value;
    } else if (event.target.name === 'company') {
      values[index].company = event.target.value;
    } else if (event.target.name === 'location') {
      values[index].location = event.target.value;
    } else if (event.target.name === 'description') {
      values[index].description = event.target.value;
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
      Work experience
      <Form onSubmit={handleSubmit}>
        {inputFields.map((inputField, index) => (
          <Fragment key={`${inputField}~${index}`}>
            <Form.Item label="Title">
              <Input
                placeholder="input placeholder"
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={inputField.title}
                onChange={event => handleInputChange(index, event)}
              />
            </Form.Item>
            <Form.Item label="Employment type">
              <Input
                placeholder="input placeholder"
                type="text"
                className="form-control"
                id="employment_type"
                name="employment_type"
                value={inputField.employment_type}
                onChange={event => handleInputChange(index, event)}
              />
            </Form.Item>
            <Form.Item label="Company">
              <Input
                placeholder="input placeholder"
                type="text"
                className="form-control"
                id="company"
                name="company"
                value={inputField.company}
                onChange={event => handleInputChange(index, event)}
              />
            </Form.Item>
            <Form.Item label="Location">
              <Input
                placeholder="input placeholder"
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={inputField.location}
                onChange={event => handleInputChange(index, event)}
              />
            </Form.Item>
            <Form.Item label="Description">
              <Input
                placeholder="input placeholder"
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={inputField.description}
                onChange={event => handleInputChange(index, event)}
              />
            </Form.Item>
            <Form.Item
              label="Date"
              id="date"
              name="date"
              value={inputField.date}
              onChange={event => handleInputChange(index, event)}
            >
              <DatePicker onChange={onDateChange} />
              <RangePicker onChange={onDateChange} />
            </Form.Item>
            <Form.Item>
              <Button type="primary">Next</Button>
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

export default Experience;
