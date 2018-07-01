import * as React from 'react'

class Tools extends React.Component {
    public render () {
        return (
            <div className="container" id="tools">
      
      <div className="center-text margin">
        <h2>Tools</h2>
        <div className="row">
          <div className="col-lg-6 col-12">
            <p>
              In order to stay fit, you need to burn same amount of calories than you consume. Our website can record all of your calorie
              entries.
            </p>
            <div className="tool">
              <img src="https://png.icons8.com/metro/200/FFFFFF/french-fries.png"/>
            </div>
            <p className="tool-name">Calories Converter</p>
          </div>

          <div className="col-lg-6 col-12">
            <p>
              HIIT workouts get your heart rate up and improve your cardiovascular fitness level while burning more fat and calories in
              less time.
            </p>
            <div className="tool">
              <img src="https://png.icons8.com/metro/200/FFFFFF/time.png"/>
            </div>
            <p className="tool-name">HIIT Timer</p>
          </div>
        </div>
      </div>
    </div>
  
        )
    }
}

export default Tools