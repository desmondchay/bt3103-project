import { render } from 'react-dom';
import AppFrame from './AppFrame'
import Dashboard from 'react-dazzle';
import {LabelList,ResponsiveContainer,BarChart,Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {compose} from 'redux'
import {connect} from 'react-redux'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/Select';
import MenuItem from 'material-ui/Menu';
import Typography from 'material-ui/Typography';
import TopBoxes from './Data/TopBoxes';
import {ModeEdit, Bookmark, Archive, People, Timer, Assignment} from "@material-ui/icons"
import { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Select from 'material-ui/Select';
import PropTypes from 'prop-types';
import {db} from './index.js'
import Grid from 'material-ui/Grid';

var db5;

class Course extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' , isSelected:false };

    this.handleChange = this.handleChange.bind(this);
  }

  
  handleChange(event) {
    this.setState({ value: event.target.value, isSelected:true });
    if(event.target.value!=''){
      var curr=event.target.value
      function read_prop(obj, prop) {
        return obj[prop];
    }
    db5=read_prop(this.props.charts.Recharts.AverageCompletedLevelsPlaytimeForEachCourse, curr )
    }
    if(event.target.value==''){
      this.setState({value: '', isSelected:false})
    }
  }

  render() {
    const { classes } = this.props;

    var db1=[]
    var ref1=db.ref('/Recharts/NumberOfUserInEachCourse/'+this.state.value+'/numUsers')
    ref1.on("value", data => {
      if (data.val()) {
        db1.push(data.val());
      }
    })

    var db2=[]
    var ref2=db.ref('/Recharts/MedianForEachCourse/'+this.state.value+'/totalcompletelevelcount/Median')
    ref2.on("value", data => {
      if (data.val()) {
        db2.push(data.val());
      }
    })

    var db3=[]
    var ref3=db.ref('Recharts/MedianForEachCourse/'+this.state.value+'/totalplaytime/Median')
    ref3.on("value", data => {
      if (data.val()) {
        db3.push(data.val());
      }
    })

    var db4=[]
    var ref4=db.ref('Recharts/MedianForEachCourse/'+this.state.value+'/totalachievements/Median')
    ref4.on("value", data => {
      if (data.val()) {
        db4.push(data.val());
      }
    })


    return (
      <AppFrame>
        <p>
      <form>
        Select Your Course:  
        <select
      onChange={this.handleChange} 
      placeholder="Select Course" 
      value={this.state.value}>
      <option value="">None</option>
      <option value="All Other Junior (NCC2018)">All Other Junior (NCC2018)</option>
      <option value="All Other Senior (NCC2018)">All Other Senior (NCC2018)</option>
      <option value="Anglo-Chinese Sch Primary (NCC2018)">Anglo-Chinese Sch Primary (NCC2018)</option>
      <option value="BT3103">BT3103</option>
      <option value="CHIJ St Nicholas Girls School (NCC2018)">CHIJ St Nicholas Girls School (NCC2018)</option>
      <option value="Clementi Town Secondary School (NCC2018)">Clementi Town Secondary School (NCC2018)</option>
      <option value="Crest Secondary School (NCC2018)">Crest Secondary School (NCC2018)</option>
      <option value="Developers">Developers</option>
      <option value="Dunman High School - Senior (NCC2018)">Dunman High School - Senior (NCC2018)</option>
      <option value="Dunman HS - Junior (NCC2018)">Dunman HS - Junior (NCC2018)</option>
      <option value="Junyuan Secondary School (NCC2018)">Junyuan Secondary School (NCC2018)</option>
      <option value="Jurong JC (NCC2018)">Jurong JC (NCC2018)</option>
      <option value="Maris Stella High School (NCC2018)">Maris Stella High School (NCC2018)</option>
      <option value="Nan Hua High School (NCC2018)">Nan Hua High School (NCC2018)</option>
      <option value="National JC - Junior (NCC2018)">National JC - Junior (NCC2018)</option>
      <option value="National JC - Senior (NCC2018)">National JC - Senior (NCC2018)</option>
      <option value="NUSHS - Senior (NCC2018)">NUSHS - Senior (NCC2018)</option>
      <option value="NUSHS - Junior (NCC2018)">NUSHS - Junior (NCC2018)</option>
      <option value="Pioneer JC (NCC2018)">Pioneer JC (NCC2018)</option>
      <option value="Ping Yi Secondary School (NCC2018)">Ping Yi Secondary School (NCC2018)</option>
      <option value="Raffles Institution - Senior (NCC2018)">Raffles Institution - Senior (NCC2018)</option>
      <option value="Sch of Science and Technology  (NCC2018)">Sch of Science and Technology  (NCC2018)</option>
      <option value="Temasek JC - Senior (NCC2018)">Temasek JC - Senior (NCC2018)</option>
      <option value="Temasek JC - Junior (NCC2018)">Temasek JC - Junior (NCC2018)</option>
      <option value="Queensway Secondary School (NCC2018)">Queensway Secondary School (NCC2018)</option>
      <option value="West Spring Secondary School (NCC2018)">West Spring Secondary School (NCC2018)</option>
      <option value="Yishun JC (NCC2018)">Yishun JC (NCC2018)</option>
  </select>
        </form>
        </p>

<br/>
      
{this.state.isSelected&&

  <Typography variant="title" gutterBottom>
  CodeCombat Charts for Course {this.state.value}</Typography>
}

{this.state.isSelected&&
  <Grid container spacing={24}>
  
  <Grid item xs={1}>
  </Grid>

  <Grid item xs={4}>
  <TopBoxes
            Icon={People}
            title="Number of Students Enrolled"
            prefix=""
            value={db1}
            iconColor="#e75466"
            boxColor="#edf2f4"/>  
  </Grid>

  <Grid item xs={2}>
  </Grid>
  
  <Grid item xs={4}>
  <TopBoxes
            Icon={Bookmark}
            title="Median, Levels Completed" 
            prefix=""
            value={db2}
            iconColor="#e75466"
            boxColor="#edf2f4"/>
  </Grid>   

    <Grid item xs={1}>
  </Grid>

  <br/>

  <Grid item xs={1}>
  </Grid>

  <Grid item xs={4}>
          <TopBoxes
            Icon={Timer}
            title="Median, Total Playtime"
            prefix=""
            value={db3}
            iconColor="#e75466"
            boxColor="#edf2f4"/>
</Grid>

  <Grid item xs={2}>
  </Grid>

<Grid item xs={4}>
          <TopBoxes
            Icon={Assignment}
            title="Median, Total Achievements"
            prefix=""
            value={db4}
            iconColor="#e75466"
            boxColor="#edf2f4"/>
</Grid>

  <Grid item xs={1}>
  </Grid>

<br/>

  <Grid item xs={1}>
  </Grid>

  <Grid item xs={10}>
          <div>

          <Typography variant="title" gutterBottom>
          Top 10 Highest Average Completed Levels Playtime for {this.state.value}
          </Typography>

          <ResponsiveContainer width="100%" height={300}>
          <BarChart data={db5}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="levelName" hide="true" />
          <YAxis dataKey="courseAveragePlaytime" />
          <Tooltip />
          <Legend />
          <Bar dataKey="courseAveragePlaytime" fill="#aedde8" >
          <LabelList dataKey="levelName" position="insideop" angle="45" />
          </Bar>
          </BarChart>
          </ResponsiveContainer>
          </div>
</Grid>

  <Grid item xs={1}>
  </Grid>
</Grid>}        
 

      </AppFrame>
    );
  }
}



const mapStateToProps = state => {
  return { charts: state.val }
}


const Recharts = connect(
  mapStateToProps,
)(Course)

export default Recharts;