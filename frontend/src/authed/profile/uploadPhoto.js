import React, { Component } from 'react';
import axios from 'axios';
import DefaultImg from '../../uploads/logo.png';

// base api url being used
const API_URL = 'http://localhost:5000';

class UploadPhoto extends Component {
  constructor(props) {
    super(props);

    this.state = {
      multerImage: DefaultImg,
    };
  }

  setDefaultImage(uploadType) {
    if (uploadType === 'multer') {
      this.setState({
        multerImage: DefaultImg,
      });
    }
  }

  // function to upload image once it has been captured
  // includes multer and firebase methods
  uploadImage(e, method) {
    let imageObj = {};

    if (method === 'multer') {
      let imageFormObj = new FormData();

      imageFormObj.append('imageName', 'multer-image-' + Date.now());
      imageFormObj.append('imageData', e.target.files[0]);

      // stores a readable instance of
      // the image being uploaded using multer
      this.setState({
        multerImage: URL.createObjectURL(e.target.files[0]),
      });

      axios
        .post(`${API_URL}/image/uploadmulter`, imageFormObj)
        .then(data => {
          if (data.data.success) {
            alert('Image has been successfully uploaded using multer');
            this.setDefaultImage('multer');
          }
        })
        .catch(err => {
          alert('Error while uploading image using multer');
          this.setDefaultImage('multer');
        });
    }
  }

  render() {
    return (
      <div className="main-container">
        <h3 className="main-heading">Image Upload App</h3>

        <div className="image-container">
          <div className="process">
            <h4 className="process__heading">Process: Using Multer</h4>
            <p className="process__details">
              Upload image to a node server, connected to a MongoDB database, with the help of
              multer
            </p>

            <input
              type="file"
              className="process__upload-btn"
              onChange={e => this.uploadImage(e, 'multer')}
            />
            <br></br>
            <br></br>
            <br></br>
            <img src={this.state.multerImage} alt="upload-image" className="process__image" />
          </div>
        </div>
      </div>
    );
  }
}

export default UploadPhoto;
