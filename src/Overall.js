import React, { Component, Fragment } from 'react'
import Data from './Data'
import { render } from 'react-dom';
import AppFrame from './AppFrame'
import Dashboard from 'react-dazzle';
import { ComposedChart, Bar, BarChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { compose } from 'redux'
import { connect } from 'react-redux'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid';

var data1,data2,data3,data4,db1;

class Test extends React.Component{
    constructor(props) {
    super(props);
    data1=this.props.charts.recharts.courseregistration;
    data2=this.props.charts.Recharts.TopCompletedLevels;
    data3=this.props.charts.Recharts.TopUncompletedLevels;
    data4=this.props.charts.Recharts.TopCompletedLevelsTotalPlaytime;
    db1=this.props.charts.Recharts.UsersOnPlatforms;
  }

        render(){
      return(
     <AppFrame>

<Grid container spacing={24}>

<Grid item xs={12}>
      <p>
          <Typography variant="title" gutterBottom>
            Users on Platform
      </Typography>
        <BarChart width={730} height={250} data={db1}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Platform" />
          <YAxis dataKey="Total Users"/>
          <Tooltip />
          <Legend />
          <Bar dataKey="Total Users" fill="#e75466" />
        </BarChart>
      </p>
</Grid>

<Grid item xs={12}>
       <p>
        <Typography variant="title" gutterBottom>
          Course Registration Across All Cohorts
      </Typography>
          <LineChart width={730} height={250} data={data1}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" hide="true" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="y" stroke="#8884d8" />
          </LineChart></p>
</Grid>

<Grid item xs={12}>
          <p>
        <Typography variant="title" gutterBottom>
          Top 20 Completed Levels Across All Cohorts
      </Typography>
          <ComposedChart width={730} height={250} data={data2}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="levelname" hide="true"/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar type="monotone" dataKey="completedcount" fill="#e75466" />
            <Line type="monotone" dataKey="averageplaytime" stroke="#ff7300" />
          </ComposedChart></p>
</Grid>

<Grid item xs={12}>
          <p>
        <Typography variant="title" gutterBottom>
          Top 20 Levels with Highest Average Playtime Across All Cohorts
      </Typography>
          <ComposedChart width={730} height={250} data={data4}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="levelname" hide="true"/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar type="monotone" dataKey="completedcount" fill="#e75466" />
            <Line type="monotone" dataKey="averageplaytime" stroke="#ff7300" />
          </ComposedChart></p>
</Grid>

<Grid item xs={12}>
          <p>
        <Typography variant="title" gutterBottom>
          Top Uncompleted Levels Across All Cohorts
      </Typography>
          <LineChart width={730} height={250} data={data3}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="levelname" hide="true"/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uncompletedcount" stroke="#e75466" />
          </LineChart></p>
</Grid>
</Grid>

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