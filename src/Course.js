import { render } from 'react-dom';
import AppFrame from './AppFrame'
import Dashboard from 'react-dazzle';
import {PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {compose} from 'redux'
import {connect} from 'react-redux'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/Select';
import MenuItem from 'material-ui/Menu';
import SelectCourse from './SelectCourse';

class RechartsComp extends React.Component {
  render() {
    return (
      <AppFrame>
      <SelectCourse/>
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