import React, { Component } from 'react';
import { JobList } from './JobList';
//const { jobs } = require('./fake-data');
import { loadJobs } from './requests';

export class JobBoard extends Component {

  //to keep jobs data in state, add constructor
  constructor(props) {
    super(props);
    this.state = { jobs: [] }; //initial value for the jobs using empty array
  }

//load data from the server. One of Life cycle methods in react. This rerender the page
async componentDidMount(){
  const jobs = await loadJobs(); //this promised, so put async and await
  this.setState({jobs}); //update component state

}

  render() {
    const {jobs}=this.state;
    return (
      <div>
        <h1 className="title">Job Board</h1>
        <JobList jobs={jobs} />
      </div>
    );
  }
}
