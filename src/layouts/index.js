import React, { Component } from 'react';

import Sidebar from './sidebar';
import Header from './header';
import Footer from './footer';

export default class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                <Sidebar/>
                {/* <Footer/> */}
            </div>
        );
    }
}