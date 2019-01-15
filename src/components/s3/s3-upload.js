import React, { Component } from 'react';

class S3Upload extends Component {

    constructor(props) {
        super(props);

        this.state = {
            image_buffer: '',
            image_preview_url: ''
        }
    }

    handleFile = (reader) => {
        const content = reader.result;
        console.log('file content', content)
        // You can set content in state and show it in render.
    }

    handleChange = (event) => {
        event.preventDefault();
        let reader = new FileReader();
        let file = event.target.files[0];
        file.onloadend = this.handleFile(reader);

        reader.onload = function (event) {
            console.log('Event ---- In ', event.target.result);
        }

        reader.onloadend = () => {
            this.setState({
                image_buffer: reader.result
            }, () => console.log('Image --- ', this.state.image_buffer))
          }

        this.setState({
            image_buffer: reader.readAsDataURL(file)
        })

        // console.log('Event ---- ', file, JSON.stringify(reader.readAsDataURL(file)));
    }

    _handleSubmit(e) {

    }

    render() {

        return (
            <div className="col-lg-12">
                <div className="imgPreview">
                    {console.log('Image Buffer -- ', this.state.image_buffer)}
                    {this.state.image_buffer == '' ?
                        <div className="previewText">Please select an Image for Preview</div>
                        :
                        <div>
                            <div className="previewText">Please click on upload button to upload this file !!!</div>
                            <img src={this.state.image_buffer} />
                        </div>
                    }
                </div><br />
                <form onSubmit={(e) => this._handleSubmit(e)}>
                    <input type="file" type="file" className="btn btn-primary" name="pic" accept="image/*" id="test" style={{ display: "none" }} className="btn btn-primary" onChange={(e) => this.handleChange(e)} name="pic" accept="image/*" />
                    { this.state.image_buffer == '' ?
                        <label htmlFor="test" className="file-btn btn btn-primary float-left">Select File</label>
                        :
                        <label className="file-btn btn btn-primary float-left label-cursor">Select File</label>
                    }
                    <button className="btn btn-success float-left marg-left" onClick={(e) => this._handleSubmit(e)}> Upload </button>
                    <br /> <br />
                </form>
            </div>
        );
    }
}

export default S3Upload;