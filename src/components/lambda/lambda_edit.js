import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { addCustomer } from '../../actions/customer';
import { getCustomerByEmail } from '../../actions/customer';
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
            country: '',
            loader: true
        }

        console.log('This is props ---- ', this.props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentWillMount() {
        console.log('Inside componenet ');
        this.props.getCustomerByEmail(this.props.email)
    }

    componentWillReceiveProps(nextProps) {
        console.log('initial valaues -- ', nextProps);
        if (nextProps.custData && nextProps.custData !== null) {
            this.setState({
                email: nextProps.custData.email,
                fname: nextProps.custData.customerData.fname,
                lname: nextProps.custData.customerData.lname,
                age: parseInt(nextProps.custData.customerData.age),
                phone: nextProps.custData.customerData.phone,
                city: nextProps.custData.customerData.city,
                state: nextProps.custData.customerData.state,
                country: nextProps.custData.customerData.country,
                loader: false
            }, () => console.log('State data in -- ', this.state))
                nextProps.initialValues.email = nextProps.custData.customerData.email;
                nextProps.initialValues.fname = nextProps.custData.customerData.fname;
                nextProps.initialValues.lname = nextProps.custData.customerData.lname;
                nextProps.initialValues.age = parseInt(nextProps.custData.customerData.age);
                nextProps.initialValues.phone = nextProps.custData.customerData.phone;
                nextProps.initialValues.city = nextProps.custData.customerData.city;
                nextProps.initialValues.state = nextProps.custData.customerData.state;
                nextProps.initialValues.country = nextProps.custData.customerData.country;
                // nextProps.initialValues = initialValues;
        }
    }

    renderField = ({ input, label, placeholder, value, type, meta: { touched, error } }) => (

        <div className="form-group col-lg-6">
        {console.log('Input values ', input, value)}
            <div className="col-sm-10">
                <label className="control-label float-left">{label}:</label>
                <input {...input} className="form-control" type={type} placeholder={placeholder} />
                {touched && error && <span className="err_msg1">{error}</span>}
            </div>
        </div>
    )

    handleChange = (event) => {
        console.log('Event change value --- ', event.target);
        this.setState({
            [event.target.name]: event.target.value
        });
        // event.preventDefault();
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log('Event ----- ', event, this.state);
        this.props.addCustomer(this.state);
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
    
                        { this.state.loader ? <h4>Loading ...</h4> :
                        <form onSubmit={(e) => this.handleSubmit(e)}>
                            <div className="modal-body">

                                {/* <h4 className="float-left col-lg-12" style={{ marginLeft: '-400px' }}> <b>Add Customer Here</b> </h4><br /><br /> */}
                                <div className="">
                                    {/* <Field
                                        name='email'
                                        type='text'
                                        component={this.renderField}
                                        placeholder='Enter your email'
                                        value={this.state.email}
                                        label='Email'
                                        onChange={(e) => this.handleChange(e)}
                                    /> */}
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
                                </div>
                            </div><br />
                            <div className="modal-footer col-lg-12">
                                <button type="submit" name="Submit" className="btn btn-success" data-dismiss="modal" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                            </div>
                                </form> }
                    </div>

                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {

    console.log('state data ---- ', state);

    return {
        initialValues: state.getCustomerByEmail.GetCustomerByEmail,
        custData: state.getCustomerByEmail.GetCustomerByEmail
    }
}

EditCustomer = reduxForm({
    form: 'edit_customer'
})(EditCustomer);

export default connect(mapStateToProps, { getCustomerByEmail, addCustomer })(EditCustomer);