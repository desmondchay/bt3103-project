import React from 'react';
import { render } from 'react-dom';
import AppFrame from './AppFrame'
import Dashboard from 'react-dazzle';
import { Bar, BarChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { compose } from 'redux'
import { connect } from 'react-redux'
import SelectCohort from './SelectCohort'

class RechartsComp extends React.Component {
  render() {
    return (
      <AppFrame>  
      <SelectCohort/>
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