import React, { Component } from 'react'

export default class Card extends Component {
    render() {
      const data = this.props.data;
      let n = 1;
    return (
      <div className='card'>
        <div className="left">
        <img src={data[n].image} alt="" />
        <h4>Employee ID : {data[n].emp_id}</h4>
        <div className="activity">View Activity</div>
        <div className="profile">View Profile</div>
        </div>
        <div className="right">
            <div className="empdetails">
               <h1>{data[n].emp_name}</h1>
               <h4>{data[n].designation}</h4>
               <h4>Reports to : <a href="www.google.com">{data[n].report_to}</a> </h4>
               <h4>{data[n].company}</h4>
            </div>
            <div className="contactinfo">
               <h4>Email : {data[n].email}</h4>
               <h4>Mobile : {data[n].phoneNumber}</h4>
               <h4>Location : {data[n].loc}</h4>
            </div>
            <div className="skills">
               {data[n].skills.map((x)=>{
               return <div>{x}</div>
               })}
            </div>
        </div>
        
        
      </div>
    )
  }
}
