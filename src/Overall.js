import React, { Component, Fragment } from 'react'
import Data from './Data'
import { render } from 'react-dom';
import AppFrame from './AppFrame'
import Dashboard from 'react-dazzle';
import { LabelList, ResponsiveContainer, ComposedChart, Bar, BarChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { compose } from 'redux'
import { connect } from 'react-redux'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid';
import TopBoxes from './Data/TopBoxes';
import {Assignment} from "@material-ui/icons"

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

<Grid item xs={2}>
</Grid>

<Grid item xs={4}>
<TopBoxes
Icon={Assignment}
title="Users on Achivements"
prefix=""
value="1121"
iconColor="#e75466"
boxColor="#edf2f4"/>
</Grid>

<Grid item xs={4}>
<TopBoxes
Icon={Assignment}
title="Users on CodeCombat)"
prefix=""
value="1105"
iconColor="#e75466"
boxColor="#edf2f4"/>
</Grid>

<Grid item xs={2}>
</Grid>

<Grid item xs={2}>
</Grid>

<Grid item xs={4}>
<TopBoxes
Icon={Assignment}
title="Users on NUS IVLE"
prefix=""
value="0"
iconColor="#e75466"
boxColor="#edf2f4"/>
</Grid>

<Grid item xs={4}>
<TopBoxes
Icon={Assignment}
title="Users on Moodle"
prefix=""
value="0"
iconColor="#e75466"
boxColor="#edf2f4"/>
</Grid>

<Grid item xs={2}>
</Grid>

<Grid item xs={12}>
       <p>
        <Typography variant="title" gutterBottom>
          Course Registration Across All Cohorts
      </Typography>
      <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data1}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" hide="true" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="y" stroke="#8884d8" />
          </LineChart>
          </ResponsiveContainer></p>
</Grid>

<Grid item xs={6}>
          <p>
        <Typography variant="title" gutterBottom>
          Top 20 Completed Levels Across All Cohorts
      </Typography>
      <ResponsiveContainer width="100%" height={250}>
          <ComposedChart data={data2}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="levelname" hide="true"/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar type="monotone" dataKey="completedcount" fill="#e75466" />
            <Line type="monotone" dataKey="averageplaytime" stroke="#ff7300" />
          </ComposedChart>
          </ResponsiveContainer></p>
</Grid>

<Grid item xs={6}>
          <p>
        <Typography variant="title" gutterBottom>
          Top 20 Levels with Highest Average Playtime Across All Cohorts
      </Typography>
      <ResponsiveContainer width="100%" height={250}>
          <ComposedChart data={data4}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="levelname" hide="true"/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar type="monotone" dataKey="averageplaytime" fill="#e75466" />
            <Line type="monotone" dataKey="completedcount" stroke="#ff7300" />
          </ComposedChart>
          </ResponsiveContainer></p>
</Grid>

<Grid item xs={12}>
          <p>
        <Typography variant="title" gutterBottom>
          Top Uncompleted Levels Across All Cohorts
      </Typography>
      <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data3}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="levelname" hide="true"/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uncompletedcount" stroke="#e75466">
            <LabelList dataKey="levelname" position="top" angle="30" />
            </Line>
          </LineChart>
          </ResponsiveContainer></p>
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