import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Button } from 'antd';

const GitHubComponent = () => {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');

  const submitForm = () => {
    axios
      .get(
        'https://github.com/login/oauth/authorize',
        {
          params: {
            client_id: '0de205da184f86852dee',
          },
        },
        {
          headers: {
            'Access-Control-Allow-Origin': 'origin',
            'Access-Control-Expose-Headers': 'Access-Token, Uid, code',
          },
        },
      )
      .then(e => {
        console.log(e.headers);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          submitForm();
        }}
      >
        <Button htmlType={'submit'}>Submit</Button>
      </form>
    </div>
  );
};
export default GitHubComponent;
