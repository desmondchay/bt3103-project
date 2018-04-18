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

var data1;

class Test extends React.Component{
    constructor(props) {
    super(props);
    data1=this.props.charts.recharts.courseregistration;


  }

        render(){
      return(
     <AppFrame>

       <p>
          <LineChart width={730} height={250} data={data1}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="y" stroke="#8884d8" />
          </LineChart></p>
          
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