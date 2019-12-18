import React, { useState, useEffect } from 'react';
import axios from 'axios';
const GithubComponent = () => {
  const [repos, setRepos] = useState([]);

  const gitHub = [];

  useEffect(() => {
    axios
      .get(`https://api.github.com/users/${localStorage.getItem('username')}/repos`)
      .then(result => {
        setRepos(result.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const ImportButton = () => {
    axios.post(
      `http://localhost:5000/user/github/${localStorage.getItem('ID')}`,
      {
        gitHub,
      },
      {
        headers: {
          'x-auth-token': localStorage.getItem('token'),
          'Content-Type': 'application/json',
        },
      },
    );
  };

  return (
    <div>
      {repos.map(function(item) {
        const title = item.name;
        const description = item.description;
        const repository = item.html_url;
        const handleGithubChange = () => {
          gitHub.push({ title, description, repository });
        };
        return (
          <div>
            <form>
              <p>Name: {title}</p>
              <p>description: {description}</p>
              <p>url: {repository}</p>

              <input type="checkbox" onChange={handleGithubChange} />
            </form>
          </div>
        );
      })}
      <form
        onSubmit={event => {
          event.preventDefault();
          ImportButton();
          console.log(gitHub);
        }}
      >
        <input type="submit" value="import" />
      </form>
    </div>
  );
};

export default GithubComponent;
