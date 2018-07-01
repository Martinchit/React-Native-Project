import * as React from 'react'

class Nav extends React.Component{
    public render () {
        return (
            <nav className="navbar navbar-expand-sm navbar-light fixed-top">
            <a className="navbar-brand" href="#">
              <img className="brand-icon" src="images/icon.png"/> 
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item collapse navbar-collapse">
                  <a className="nav-link" href="#tools">Tools</a>
                </li>
                <li className="nav-item collapse navbar-collapse">
                  <a className="nav-link" href="#contact-us">Contact Us</a>
                </li>
                <li className="nav-item collapse navbar-collapse">
                  <a className="nav-link login-btn" href="#">Login</a>
                </li>
              </ul>
            </div>
          </nav>
        )
    }
}

export default Nav