// import React, { Component } from 'react';
// import axios from 'axios';
// import DefaultImg from '../../uploads/logo.png';

// // base api url being used
// const API_URL = 'http://localhost:5000';

// class UploadPhoto extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       multerImage: DefaultImg,
//     };
//   }

//   setDefaultImage(uploadType) {
//     if (uploadType === 'multer') {
//       this.setState({
//         multerImage: DefaultImg,
//       });
//     }
//   }

//   // function to upload image once it has been captured
//   // includes multer and firebase methods
//   uploadImage(e, method) {
//     let imageObj = {};

//     if (method === 'multer') {
//       let imageFormObj = new FormData();

//       imageFormObj.append('imageName', 'multer-image-' + Date.now());
//       imageFormObj.append('imageData', e.target.files[0]);

//       // stores a readable instance of
//       // the image being uploaded using multer
//       this.setState({
//         multerImage: URL.createObjectURL(e.target.files[0]),
//       });

//       axios
//         .post(`${API_URL}/image/uploadmulter`, imageFormObj)
//         .then(data => {
//           if (data.data.success) {
//             alert('Image has been successfully uploaded using multer');
//             this.setDefaultImage('multer');
//           }
//         })
//         .catch(err => {
//           alert('Error while uploading image using multer');
//           this.setDefaultImage('multer');
//         });
//     }
//   }

//   render() {
//     return (
//       <div className="main-container">
//         <h3 className="main-heading">Image Upload App</h3>

//         <div className="image-container">
//           <div className="process">
//             <h4 className="process__heading">Process: Using Multer</h4>
//             <p className="process__details">
//               Upload image to a node server, connected to a MongoDB database, with the help of
//               multer
//             </p>

//             <input
//               type="file"
//               className="process__upload-btn"
//               onChange={e => this.uploadImage(e, 'multer')}
//             />
//             <img src={this.state.multerImage} alt="upload-image" className="process__image" />
//           </div>
//         </div>

//         <p className="main-credit">
//           Created by <a href="#">Tarique Ejaz</a>
//         </p>
//       </div>
//     );
//   }
// }

// export default UploadPhoto;
import React, { Component } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/';

class UploadPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      imageUrls: [],
      message: '',
    };
  }

  selectFiles = event => {
    let images = [];
    for (var i = 0; i < event.target.files.length; i++) {
      images[i] = event.target.files.item(i);
    }
    images = images.filter(image => image.name.match(/\.(jpg|jpeg|png|gif)$/));
    let message = `${images.length} valid image(s) selected`;
    this.setState({ images, message });
  };

  uploadImages = () => {
    const uploaders = this.state.images.map(image => {
      const data = new FormData();
      data.append('image', image, image.name);

      // Make an AJAX upload request using Axios
      return axios.post(BASE_URL + 'upload', data).then(response => {
        this.setState({ imageUrl: [response.data.imageUrls, ...this.state.imageUrls] });
      });
    });

    // Once all the files are uploaded
    axios
      .all(uploaders)
      .then(() => {
        console.log('done');
      })
      .catch(err => alert(err.message));
  };

  render() {
    return (
      <div>
        <br />
        <div className="col-sm-12">
          <h1>Image Uploader</h1>
          <hr />
          <div className="col-sm-4">
            <input className="form-control " type="file" onChange={this.selectFiles} multiple />
          </div>
          {this.state.message ? <p className="text-info">{this.state.message}</p> : ''}
          <br />
          <br />
          <br />
          <div className="col-sm-4">
            <button className="btn btn-primary" value="Submit" onClick={this.uploadImages}>
              Submit
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <hr />
        <br />
        <div className="row col-lg-12">
          {this.state.imageUrls.map((url, i) => (
            <div className="col-lg-2" key={i}>
              <img
                src={BASE_URL + url}
                className="img-rounded img-responsive"
                alt="not available"
              />
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default UploadPhoto;
