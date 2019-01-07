import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addCustomer } from '../actions/customer';
import { Link } from 'react-router-dom';

class EditCustomer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            fname: '',
            lname: '',
            age: null,
            phone: '',
            city: '',
            state: '',
            country: ''
        }

        console.log('This is props ---- ', this.props);

    }

    componentWillMount() {
        
    }

    render() {
        return (
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">

                    {/* <!-- Modal content--> */}
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Edit Details</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <p>Some text in the modal.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default EditCustomer;