import React, { Component, Fragment } from 'react'
import { Header, Footer } from './Layouts'
import Data from './Data'
import { render } from 'react-dom';
import AppFrame from './AppFrame'
import Dashboard from 'react-dazzle';
import { PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { compose } from 'redux'
import { connect } from 'react-redux'
import Chart1 from './Data/Chart1'
import Chart2 from './Data/Chart2'
import Chart3 from './Data/Chart3'
import Chart4 from './Data/Chart4'
import Chart5 from './Data/Chart5'

class Test extends React.Component{
        render(){
      return(
     <AppFrame>
          <Chart5 />
          <Chart1 />
          <Chart2 />
          <Chart3 />
          <Chart4 />
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
)(Test)


export default Recharts;