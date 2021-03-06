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
import {Assignment, Bookmark, Timer} from "@material-ui/icons"
import {db} from "./index.js"

var data1,data2,data3,data4;

class Test extends React.Component{
    constructor(props) {
    super(props);
    data1=this.props.charts.recharts.courseregistration;
    data2=this.props.charts.Recharts.TopCompletedLevels;
    data3=this.props.charts.Recharts.TopUncompletedLevels;
    data4=this.props.charts.Recharts.TopCompletedLevelsTotalPlaytime;
  }

        render(){
          var db1;
          var ref = db.ref('/Recharts/MedianforOverall/0/totallevelcount');
          ref.on("value", function (snap) {
              db1= snap.val();
              console.log(db1)
          }
          );
          var db2;
          var ref = db.ref('/Recharts/MedianforOverall/3/totalplaytime');
          ref.on("value", function (snap) {
              db2= snap.val();
          }
          );
          var db3;
          var ref = db.ref('/Recharts/MedianforOverall/6/totalachievements');
          ref.on("value", function (snap) {
              db3= snap.val();
          }
          );
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
          Users on Achievements Across All Courses
      </Typography>
      <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data1}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="x" hide="true" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="y" stroke="#e75466" />
          </LineChart>
          </ResponsiveContainer></p>
</Grid>


  <Grid item xs={4}>
  <TopBoxes
              Icon={Bookmark}
              title="Median Levels Attempted"
              prefix=""
              value={db1}
              iconColor="#e75466"
              boxColor="#edf2f4"/>
  </Grid>
  
  <Grid item xs={4}>
  <TopBoxes
              Icon={Assignment}
              title="Median Total Playtime"
              prefix=""
              value={db2}
              iconColor="#e75466"
              boxColor="#edf2f4"/>
  </Grid>

  <Grid item xs={4}>
  <TopBoxes
              Icon={Timer}
              title="Median Achievements"
              prefix=""
              value={db3}
              iconColor="#e75466"
              boxColor="#edf2f4"/>
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