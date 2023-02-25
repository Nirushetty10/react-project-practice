import React from 'react'
import Empdetails from './component4/Empdetails'
import jsonData from "./empData.json"
import "./global4.css"

class App4 extends React.Component {
   state= {empdata : jsonData}

    render() {
        return (
            <Empdetails data={this.state.empdata}/>
        )
    }
}

export default App4