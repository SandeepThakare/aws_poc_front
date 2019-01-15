import React, { Component } from 'react';
import Routing from '../../routes/Routing';

export default class Content extends Component {
    render() {
        return (
            <article className="container-fluid content dashboard-page">
                        <section className="section routable">
                            <div className="sameheight-container ">
                                <div className="">
                                    <div className="sameheight-item stats" data-exclude="xs">
                                        <div className="box-frame">
                                            <Routing />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                    </article>
        );
    }
}