import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Routing from '../../routes/Routing';
import Content from './content';


export default class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
                        <div className="sidebar-container">
                            <div className="sidebar-header">
                                <div className="brand">
                                    <div className="logo">
                                        <span className="l l1"></span>
                                        <span className="l l2"></span>
                                        <span className="l l3"></span>
                                        <span className="l l4"></span>
                                        <span className="l l5"></span>
                                    </div> AWS POC </div>
                            </div>
                            <nav className="menu">
                                <ul className="sidebar-menu metismenu" id="sidebar-menu">
                                    <li className="active">
                                        <Link to={'/dashboard'}>
                                            <i className="fa fa-home"></i> Dashboard 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/list_customer'}>
                                            <i className="fa fa-home"></i> POC Lambda 
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to={'/s3_upload'}>
                                            <i className="fa fa-home"></i> POC S3 
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <footer className="sidebar-footer">
                            <ul className="sidebar-menu metismenu" id="customize-menu">
                                <li>
                                    <ul>
                                        <li className="customize">
                                            <div className="customize-item">
                                                <div className="row customize-header">
                                                    <div className="col-4"> </div>
                                                    <div className="col-4">
                                                        <label className="title">fixed</label>
                                                    </div>
                                                    <div className="col-4">
                                                        <label className="title">static</label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <label className="title">Sidebar:</label>
                                                    </div>
                                                    <div className="col-4">
                                                        <label>
                                                            <input className="radio" type="radio" name="sidebarPosition" value="sidebar-fixed" />
                                                            <span></span>
                                                        </label>
                                                    </div>
                                                    <div className="col-4">
                                                        <label>
                                                            <input className="radio" type="radio" name="sidebarPosition" value="" />
                                                            <span></span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <label className="title">Header:</label>
                                                    </div>
                                                    <div className="col-4">
                                                        <label>
                                                            <input className="radio" type="radio" name="headerPosition" value="header-fixed" />
                                                            <span></span>
                                                        </label>
                                                    </div>
                                                    <div className="col-4">
                                                        <label>
                                                            <input className="radio" type="radio" name="headerPosition" value="" />
                                                            <span></span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-4">
                                                        <label className="title">Footer:</label>
                                                    </div>
                                                    <div className="col-4">
                                                        <label>
                                                            <input className="radio" type="radio" name="footerPosition" value="footer-fixed" />
                                                            <span></span>
                                                        </label>
                                                    </div>
                                                    <div className="col-4">
                                                        <label>
                                                            <input className="radio" type="radio" name="footerPosition" value="" />
                                                            <span></span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="customize-item">
                                                <ul className="customize-colors">
                                                    <li>
                                                        <span className="color-item color-red" data-theme="red"></span>
                                                    </li>
                                                    <li>
                                                        <span className="color-item color-orange" data-theme="orange"></span>
                                                    </li>
                                                    <li>
                                                        <span className="color-item color-green active" data-theme=""></span>
                                                    </li>
                                                    <li>
                                                        <span className="color-item color-seagreen" data-theme="seagreen"></span>
                                                    </li>
                                                    <li>
                                                        <span className="color-item color-blue" data-theme="blue"></span>
                                                    </li>
                                                    <li>
                                                        <span className="color-item color-purple" data-theme="purple"></span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </footer>
                    </aside>
            // <Router>
            //     <div>
            //         <aside className="sidebar">
            //             <div className="sidebar-container">
            //                 <div className="sidebar-header">
            //                     <div className="brand">
            //                         <div className="logo">
            //                             <span className="l l1"></span>
            //                             <span className="l l2"></span>
            //                             <span className="l l3"></span>
            //                             <span className="l l4"></span>
            //                             <span className="l l5"></span>
            //                         </div> AWS POC </div>
            //                 </div>
            //                 <nav className="menu">
            //                     <ul className="sidebar-menu metismenu" id="sidebar-menu">
            //                         <li className="active">
            //                             <Link to={'/dashboard'}>
            //                                 <i className="fa fa-home"></i> Dashboard 
            //                             </Link>
            //                         </li>
            //                         <li>
            //                             <Link to={'/list_customer'}>
            //                                 <i className="fa fa-home"></i> POC Lambda 
            //                             </Link>
            //                         </li>
            //                         <li>
            //                             <Link to={'/s3_upload'}>
            //                                 <i className="fa fa-home"></i> POC S3 
            //                             </Link>
            //                         </li>
            //                     </ul>
            //                 </nav>
            //             </div>
            //             <footer className="sidebar-footer">
            //                 <ul className="sidebar-menu metismenu" id="customize-menu">
            //                     <li>
            //                         <ul>
            //                             <li className="customize">
            //                                 <div className="customize-item">
            //                                     <div className="row customize-header">
            //                                         <div className="col-4"> </div>
            //                                         <div className="col-4">
            //                                             <label className="title">fixed</label>
            //                                         </div>
            //                                         <div className="col-4">
            //                                             <label className="title">static</label>
            //                                         </div>
            //                                     </div>
            //                                     <div className="row">
            //                                         <div className="col-4">
            //                                             <label className="title">Sidebar:</label>
            //                                         </div>
            //                                         <div className="col-4">
            //                                             <label>
            //                                                 <input className="radio" type="radio" name="sidebarPosition" value="sidebar-fixed" />
            //                                                 <span></span>
            //                                             </label>
            //                                         </div>
            //                                         <div className="col-4">
            //                                             <label>
            //                                                 <input className="radio" type="radio" name="sidebarPosition" value="" />
            //                                                 <span></span>
            //                                             </label>
            //                                         </div>
            //                                     </div>
            //                                     <div className="row">
            //                                         <div className="col-4">
            //                                             <label className="title">Header:</label>
            //                                         </div>
            //                                         <div className="col-4">
            //                                             <label>
            //                                                 <input className="radio" type="radio" name="headerPosition" value="header-fixed" />
            //                                                 <span></span>
            //                                             </label>
            //                                         </div>
            //                                         <div className="col-4">
            //                                             <label>
            //                                                 <input className="radio" type="radio" name="headerPosition" value="" />
            //                                                 <span></span>
            //                                             </label>
            //                                         </div>
            //                                     </div>
            //                                     <div className="row">
            //                                         <div className="col-4">
            //                                             <label className="title">Footer:</label>
            //                                         </div>
            //                                         <div className="col-4">
            //                                             <label>
            //                                                 <input className="radio" type="radio" name="footerPosition" value="footer-fixed" />
            //                                                 <span></span>
            //                                             </label>
            //                                         </div>
            //                                         <div className="col-4">
            //                                             <label>
            //                                                 <input className="radio" type="radio" name="footerPosition" value="" />
            //                                                 <span></span>
            //                                             </label>
            //                                         </div>
            //                                     </div>
            //                                 </div>
            //                                 <div className="customize-item">
            //                                     <ul className="customize-colors">
            //                                         <li>
            //                                             <span className="color-item color-red" data-theme="red"></span>
            //                                         </li>
            //                                         <li>
            //                                             <span className="color-item color-orange" data-theme="orange"></span>
            //                                         </li>
            //                                         <li>
            //                                             <span className="color-item color-green active" data-theme=""></span>
            //                                         </li>
            //                                         <li>
            //                                             <span className="color-item color-seagreen" data-theme="seagreen"></span>
            //                                         </li>
            //                                         <li>
            //                                             <span className="color-item color-blue" data-theme="blue"></span>
            //                                         </li>
            //                                         <li>
            //                                             <span className="color-item color-purple" data-theme="purple"></span>
            //                                         </li>
            //                                     </ul>
            //                                 </div>
            //                             </li>
            //                         </ul>
            //                     </li>
            //                 </ul>
            //             </footer>
            //         </aside>
            //         <Content/>
            //     </div>
            // </Router>
        );
    }
}
