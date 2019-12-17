import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Portfolio = () => {
  const [repos, setRepos] = useState([]);
  const titleState = [];
  const descriptionState = [];
  const repositoryState = [];
  const deployedSiteState = [];
  const photoState = [];
  const gitHub = [];
  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${localStorage.getItem('ID')}`)
      .then(result => {
        setRepos(result.data.gitHub);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const PostButton = () => {
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

  const handleTitleChange = e => {
    titleState.push(e.target.value);
    console.log(titleState);
  };
  const handleDescriptionChange = p => {
    descriptionState.push(p.target.value);
    console.log(descriptionState);
  };
  const handleRepositoryChange = p => {
    repositoryState.push(p.target.value);
  };
  const handleDeployedSiteChange = p => {
    deployedSiteState.push(p.target.value);
  };
  const handlePhotoChange = p => {
    photoState.push(p.target.value);
  };

  return (
    <div>
      {repos.map(function(item) {
        const currentTitle = item.title;
        const currentDescription = item.description;
        const currentRepository = item.repository;
        const currentDeployedSite = item.deployedSite;
        const currentPhoto = item.photo;

        return (
          <div>
            <form
              onSubmit={event => {
                event.preventDefault();
                const title = titleState.slice(-1)[0];
                const description = descriptionState.slice(-1)[0];
                const repository = repositoryState.slice(-1)[0];
                const deployedSite = deployedSiteState.slice(-1)[0];
                const photo = photoState.slice(-1)[0];
                gitHub.push({ title, description, repository, deployedSite, photo });

                console.log(gitHub);
              }}
            >
              <div>Title:</div>
              <input type="text" defaultValue={currentTitle} onChange={handleTitleChange}></input>
              <div>Description:</div>
              <input
                type="text"
                defaultValue={currentDescription}
                onChange={handleDescriptionChange}
              ></input>
              <div>GitHub code:</div>
              <input
                type="text"
                defaultValue={currentRepository}
                onChange={handleRepositoryChange}
              ></input>
              <div>deployedSite: </div>
              <input
                type="text"
                defaultValue={currentDeployedSite}
                onChange={handleDeployedSiteChange}
              ></input>
              <div>Photo: </div>
              <input type="text" defaultValue={currentPhoto} onChange={handlePhotoChange}></input>
              <input type="submit" value="save" />
            </form>
          </div>
        );
      })}

      <form
        onSubmit={event => {
          event.preventDefault();
          console.log(gitHub);
          PostButton();
        }}
      >
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Portfolio;
