import * as React from 'react'

export default class Contact extends React.Component {
  public render() {
    return (
      <div className="container" id="contact-us">
        <div className="center-text margin">
          <h2>Contact us</h2>
        </div>
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="namecard">
              <img src="images/Shawn.png" className="profile-icon" />
              <div>
                <p className="name">Shawn</p>
                <p className="title">Database Engineer</p>
              </div>
            </div>
            <div className="namecard">
              <img src="images/jumbo.jpg" className="profile-icon" />
              <div>
                <p className="name">Parker</p>
                <p className="title">System Administrator</p>
              </div>
            </div>
            <div className="namecard">
              <img src="images/Brad.jpg" className="profile-icon" />
              <div>
                <p className="name">Brad</p>
                <p className="title">Platform Manager</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <form id="email">
              <div className="form-group">
                <label>To:</label>
                <input type="email" className="form-control" id="target-input" placeholder="Click the namecard to select" />
              </div>
              <div className="form-group">
                <input className="form-control" type="text" placeholder="Subject" id='subject' />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Please enter your queries" id='body'/>
              </div>
              <a id="send" href="mailto:someone@example.com?subject=test&body=123">Send</a>
            </form>

          </div>
        </div>
      </div>

    )
  }
}


