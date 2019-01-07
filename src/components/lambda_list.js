import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCustomer } from '../actions/customer';
import EditCustomer from './lambda-edit';

class CustomersView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            customersList: [],
            openModal: false,
            editModelIndex: null
        }

        this.handlePopup = this.handlePopup.bind(this);
    }

    componentWillMount() {
        this.props.getCustomer();
    }

    componentWillReceiveProps(nextProps) {

        console.log('length -- ', nextProps.getCustomersList.length)
        if (nextProps.getCustomersList && nextProps.getCustomersList.length != 0) {
            console.log('Customers List ==== component', JSON.stringify(nextProps.getCustomersList));
            this.setState({
                customersList: nextProps.getCustomersList
            }, () => console.log('Customers List ==== state', this.state.customersList));
        }
    }

    handlePopup(index) {
        this.setState({ openModal: true, editModelIndex: index });
    }

    render() {

        return (
            <div className="boxFrame">
                {/* <div className="boxTitle roundTop">All Customers List <a href="#" className="arrowLink posRT"></a></div> */}
                <div className="boxpad">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Age</th>
                                    <th>Mobile Number</th>
                                    <th>City</th>
                                    <th className="action">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.customersList.length ? this.state.customersList.map((custData, index) => {
                                    console.log('custData --- ', custData);
                                    return <tr key={index}>
                                        <td className="text-left">{custData.customerData.email ? custData.customerData.email : ''}</td>
                                        <td className="text-left">{custData.customerData.fname ? custData.customerData.fname : ''}</td>
                                        <td className="text-left">{custData.customerData.lname ? custData.customerData.lname : ''}</td>
                                        <td className="text-left">{custData.customerData.age ? custData.customerData.age : 0}</td>
                                        <td className="text-left">{custData.customerData.phone ? custData.customerData.phone : '-'}</td>
                                        <td className="text-left">{custData.customerData.city ? custData.customerData.city : '-'}</td>
                                        <td className="action"><button className='btn btn-primary' data-toggle="modal" data-target="#myModal" onClick={() => this.handlePopup(index)}><i className="fa fa-edit"></i>  Edit</button></td>
                                    </tr>
                                })
                                    :
                                    <tr>
                                        <td colSpan="7" className="no_data" valign="center"><b>No upcoming battles for you right now ...</b></td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                    {this.state.openModal ? <EditCustomer modelData={this.state.customersList[this.state.editModelIndex]}/> : null}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    // return null;
    console.log('Customers List ==== map ', typeof state.getCustomerList.Get_User_Response)
    return {
        getCustomersList: state.getCustomerList.Get_User_Response
    }
}

export default connect(mapStateToProps, { getCustomer })(CustomersView);