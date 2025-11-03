import React, { Component } from "react";
class ImagePicker extends Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }
  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      return this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }
    return (
      <div className="previewComponent">
        <form onSubmit={e => this._handleSubmit(e)}>
          <input
            className="fileInput"
            type="file"
            onChange={e => this._handleImageChange(e)}
          />
          {/* <button
            className="submitButton"
            type="submit"
            onClick={e => this._handleSubmit(e)}
          >
            Upload Image
          </button> */}
        </form>
        <div className="imgPreview">{$imagePreview}</div>

        {/* <div className="img-caption cust-img-cap">
          <input
            type="text"
            className="form-control"
            placeholder="Image Caption"
          ></input>
        </div>
        <div className="img-caption cust-img-cap">
          <input
            type="text"
            placeholder="Sequence Number"
            className="form-control"
          />
        </div> */}
      </div>
    );
  }
}

export default ImagePicker;
