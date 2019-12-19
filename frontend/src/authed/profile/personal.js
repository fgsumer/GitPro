import React from 'react';
import UploadPhoto from './uploadPhoto';

import { Form, Input, Button, Typography } from 'antd';
const { Title } = Typography;

const Personal = ({ setSelected, inputs, ref, handleSubmit, handleInputChange }) => {
  console.log('personal inputs', inputs);

  return (
    <div>
      <Title level={3}>Personal & Contact information</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Item label="Name">
          <Input
            placeholder=""
            name="name"
            onChange={handleInputChange}
            value={inputs.name}
            required
          />
        </Form.Item>
        <Form.Item label="phone">
          <Input placeholder="" name="phone" onChange={handleInputChange} value={inputs.phone} />
        </Form.Item>
        <Form.Item label="Country">
          <Input
            placeholder=""
            name="country"
            onChange={handleInputChange}
            value={inputs.country}
          />
        </Form.Item>
        <Form.Item label="City">
          <Input placeholder="" name="city" onChange={handleInputChange} value={inputs.city} />
        </Form.Item>
        <Form.Item label="Website">
          <Input
            placeholder=""
            name="website"
            onChange={handleInputChange}
            value={inputs.website}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={() => (setSelected = '2')}>
            {/* <a href="./experience"> */}
            Save
            {/* </a> */}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Personal;
