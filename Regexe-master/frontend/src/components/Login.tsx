import * as React from 'react'



class Login extends React.Component {
  public render() {
    return (
      <div className="container">
        <div className="row pre-loginbox">
          <div className="panel center-text">
            <span className="head-name human-1">Reg</span>
            <span className="head-name ghost-1">u</span>
            <span className="head-name ghost-1">l</span>
            <span className="head-name ghost-1">a</span>
            <span className="head-name ghost-1">r</span>
            <span className="head-name ghost-1">&nbsp</span>
            <span className="head-name ghost-2">E</span>
            <span className="head-name ghost-2">x</span>
            <span className="head-name ghost-2">e</span>
            <span className="head-name ghost-2">r</span>
            <span className="head-name human-2">cise</span>
            <p className="head-content">healthy lifestyle assistant</p>
            <div className="login-btn">
              <img src="https://png.icons8.com/ios/100/000000/dumbbell-filled.png" />
            </div>
            <div className="login-form hide">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <a className="nav-item nav-link active" id="nav-login-tab" data-toggle="tab" href="#nav-login" role="tab" aria-selected="true">Login</a>
                  <a className="nav-item nav-link" id="nav-sign-up-tab" data-toggle="tab" href="#nav-sign-up" role="tab" aria-selected="false">Sign Up</a>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-login" role="tabpanel" aria-labelledby="nav-home-tab">
                  <form action="/login" method='POST'>
                    <div className="form-row">
                      <div className="col-xs-4">
                        <label >Email: </label>
                        <input type="email" className="form-control" id="username" name="username" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-xs-4">
                        <label >Password: </label>
                        <input type="password" className="form-control" id="password" name="password" />
                      </div>
                    </div>

                    <button type="submit" className="btn" value="login">Login</button>
                  </form>
                </div>

                <div className="tab-pane fade" id="nav-sign-up" role="tabpanel" aria-labelledby="nav-sign-up-tab">
                  <form action="/signup" method="post">
                    <div className="form-row">
                      <div className="col-xs-4">
                        <label>Email:</label>
                        <input type="text" className="form-control form-control-sm" name="username" />
                      </div>
                    </div>
                    <div className="form-row">

                      <div className="col-xs-4">
                        <label >Password: </label>
                        <input type="password" className="form-control form-control-sm" name="password" id="check-1" />
                      </div>
                      <div className="col-xs-4">
                        <label>Re-Enter Password: </label>
                        <input type="password" className="form-control form-control-sm" name="password2" id="check-2" />
                        <p className="validate"/>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="col-xs-4">
                        <label >Age:</label>
                        <input type="number" className="form-control form-control-sm" name="age" />
                      </div>
                      <div className="col-xs-4">
                        <label >Gender:</label>
                        <select name="gender" id="" className="form-control form-control-sm">
                          <option value="M">M</option>
                          <option value="F">F</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="col-xs-4">
                        <label >Weight:</label>
                        <input type="number" className="form-control form-control-sm" name="weight" />
                      </div>

                      <div className="col-xs-4">
                        <label >Height:</label>
                        <input type="number" className="form-control form-control-sm" name="height" />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-default" value="sign up">Sign up</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Login