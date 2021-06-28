import React, { Component } from 'react'
// import Forecast from '/Forecast'
import axios from 'axios'
 class App extends Component {

  getData= async ()=> {
    let axiosREad =await axios.get('http://localhost:8000/')
    console.log(axiosREad)
  }

  render() {
    return (
      <div>
        <button onClick={this.getData}>submit</button>
      </div>
    )
  }
}

export default App
