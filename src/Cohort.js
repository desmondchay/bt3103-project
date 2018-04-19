import React from 'react';
import { render } from 'react-dom';
import AppFrame from './AppFrame'
import Dashboard from 'react-dazzle';
import { Bar, BarChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { compose } from 'redux'
import { connect } from 'react-redux'
import Test from './Test';

var db;

class RechartsComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' , isSelected: false};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value, isSelected: true });
    if(event.target.value==="2018 National Coding Championships - Junior"){
      db=this.props.charts.recharts.courseregistrationjunior;
    }

    if(event.target.value==="2018 National Coding Championships - Senior"){
      db=this.props.charts.recharts.courseregistrationsenior;
    }

    if(event.target.value==="2018 National Coding Championships - Primary"){
      db=this.props.charts.recharts.courseregistrationprimary;
    }

    if(event.target.value===""){
      this.setState({value: event.target.value, isSelected:false});
    }

    }

  render() {
    
    return (
      
      <AppFrame>  
      <p>
      <form>
        Select Your Cohort:
        <select
      onChange={this.handleChange} 
      placeholder="Select Course" 
      value={this.state.value}>
      <option value="">None</option>
      <option value="2018 National Coding Championships - Junior">2018 National Coding Championships - Junior</option>
      <option value="2018 National Coding Championships - Senior">2018 National Coding Championships - Senior</option>
      <option value="2018 National Coding Championships - Primary">2018 National Coding Championships - Primary</option>
      </select>
        </form>
        </p>
        
        {this.state.isSelected &&
        <LineChart width={730} height={250} data={db}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="y" stroke="#e75466" />
        </LineChart> }

      </AppFrame>
    );
  }
}

const mapStateToProps = state => {
  return { charts: state.val }
}

const mapDispatchToProps = dispatch => { }


const Recharts = connect(
  mapStateToProps,
)(RechartsComp)



export default Recharts;