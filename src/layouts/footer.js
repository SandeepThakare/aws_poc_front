import React, { Component } from 'react';

export default class Footer extends Component {
    render() {

        return (
         <footer className="footer">
    <div className="footer-block buttons">
        <iframe className="footer-github-btn" src="https://ghbtns.com/github-btn.html?user=modularcode&repo=modular-admin-html&type=star&count=true" frameBorder="0" scrolling="0" width="140px" height="20px"></iframe>
    </div>
    <div className="footer-block author">
        <ul>
            <li> created by
                                <a href="https://github.com/modularcode">ModularCode</a>
            </li>
            <li>
                <a href="https://github.com/modularcode/modular-admin-html#get-in-touch">get in touch</a>
            </li>
        </ul>
    </div>
</footer>
        );
    }
}
