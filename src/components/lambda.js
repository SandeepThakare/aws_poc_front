import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import {addCustomer} from '../actions/customer';

class POC_Lambda extends Component {

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

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderField = ({ input, label, placeholder, value, type, meta: { touched, error } }) => (

        <div className="form-group col-lg-6">
            <div className="col-sm-10">
                <label className="control-label float-left">{label}:</label>
                <input {...input} className="form-control" type={type} placeholder={placeholder} />
                {touched && error && <span className="err_msg1">{error}</span>}
            </div>
        </div>
    )

    handleChange= (event) => {
        console.log('Event change value --- ', event.target);

        this.setState({
            [event.target.name] : event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Event ----- ', event, this.state);
        this.props.addCustomer(this.state);
    }

    render() {
        // const { handleSubmit } = this.props;
        return (
            <form onSubmit= {(e) => this.handleSubmit(e)}>
                <h4 className="float-left col-lg-12" style={{marginLeft: '-450px'}}> <b>Add Customer Here</b> </h4><br /><br />
                <div>
                    <Field 
                        name='email'
                        type='text'
                        component={this.renderField}
                        placeholder='Enter your email'
                        value={this.state.email}
                        label='Email'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Field 
                        name='fname'
                        type='text'
                        component={this.renderField}
                        placeholder='Enter your name'
                        value={this.state.fname}
                        label='First Name'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Field 
                        name='lname'
                        type='text'
                        component={this.renderField}
                        placeholder='Enter your last name'
                        value={this.state.laname}
                        label='Last Name'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Field 
                        name='age'
                        type='number'
                        component={this.renderField}
                        placeholder='Enter your age'
                        value={this.state.age}
                        label='Age'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Field 
                        name='phone'
                        type='number'
                        component={this.renderField}
                        placeholder='Enter your phone number'
                        value={this.state.phone}
                        label='Phone Number'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Field 
                        name='city'
                        type='text'
                        component={this.renderField}
                        placeholder='Enter your city'
                        value={this.state.city}
                        label='City'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Field 
                        name='state'
                        type='text'
                        component={this.renderField}
                        placeholder='Enter your state'
                        value={this.state.state}
                        label='State'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <Field 
                        name='country'
                        type='text'
                        component={this.renderField}
                        placeholder='Enter your country'
                        value={this.state.country}
                        label='Country'
                        onChange={(e) => this.handleChange(e)}
                    />
                    <button type="submit" style={{marginLeft: "30px"}} name="Submit" value="Submit" className="btn btn-success float-left">
                        Submit
                    </button>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return null;
}

POC_Lambda = reduxForm({
    form: 'lambda_form'
})(POC_Lambda);

export default connect(mapStateToProps, {addCustomer})(POC_Lambda);
// export default POC_Lambda;