import React, { Component } from 'react'

export default class Empdetails extends Component {
  render() {
    const data = this.props.data
    return (
        <table border={"1px"} cellPadding={"10px"} style={{"textAlign":"center"}}>
            <tr>
                <th>emp_name</th>
                <th>emp_designation</th>
                <th>emo_sal</th>
                <th>emp_skills</th>
                <th>emp_city</th>
            </tr>
            {data.map((x)=>{
                return <tr>
                    <td>{x.emp_name}</td>
                    <td>
                        <img src={x.emp_img} alt="" />
                    </td>
                    <td>{x.emp_designation}</td>
                    <td>{x.emo_sal}</td>
                    <td>{x.emp_skills.map((x)=>{
                        return <ul>
                            <li>{x}</li>
                        </ul>
                    })}</td>
                    <td>{x.emp_city}</td>
                </tr>
            })}
        </table>
    )
  }
}
