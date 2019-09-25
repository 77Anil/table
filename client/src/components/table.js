import React, { Component } from 'react';

import axios from 'axios'

class Table extends Component {
  state = {
    data:[]
  }
  componentDidMount(){
      
        axios.get('/data')
        .then(res => {
            this.setState({
              data:res.data.data
            })
        })
}
  render() {
    const datalist = this.state.data.length ? (
        this.state.data.map(post => {
            return(
                <tr key={post.organization_id}>
                    <td>{post.organization_id}</td>
                    <td>{post.name}</td>
                    <td>{post.contact_name}</td>
                    <td>{post.plan_name}</td>
                    <td>{post.country}</td>
                </tr>
            )
        })
    ) : (
            <tr>
                
            </tr>
    )
    return (
      <div className="container"> 
        <table className="highlight responsive-table">
          <thead>
            <tr>
                <th>Organization Id</th>
                <th>Name</th>
                <th>Contact Name</th>
                <th>Plan Name</th>
                <th>Country</th>
            </tr>
          </thead>
          <tbody>
                {datalist}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Table;
