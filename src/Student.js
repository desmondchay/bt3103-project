import React from 'react';
import { render } from 'react-dom';
import AppFrame from './AppFrame'
import store from "./store";
import { connect } from 'react-redux'
import { ResponsiveContainer, Bar, BarChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Typography from 'material-ui/Typography'
import Test from "./Test"
import {db} from "./index.js"
import TopBoxes from "./Data/TopBoxes"
import PropTypes from 'prop-types';
import {Bookmark, Timer, Assignment} from "@material-ui/icons"
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

var db4;

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = { uservalue: '' , coursevalue: '', submitvalue:'' };
    this.statechanged={userstate:false, coursestate:false};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const target=event.target;
    if(target.name =='user'){
      this.setState({uservalue: target.value, coursevalue: this.state.coursevalue, submitvalue: this.state.submitvalue})
    }
    if(target.name == "course"){
      this.setState({uservalue: this.state.uservalue, coursevalue: target.value, submitvalue: this.state.submitvalue});
      this.statechanged={userstate:this.statechanged.userstate, coursestate:true}
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({uservalue: this.state.uservalue, coursevalue: this.state.coursevalue, submitvalue: this.state.uservalue})
    this.statechanged={userstate:true, coursestate:this.setState.coursestate}
    
    if(this.state.uservalue!=''){
      var curr=this.state.uservalue
      function read_prop(obj, prop) {
        return obj[prop];
    }
    db4=read_prop(this.props.charts.Recharts.IndividualUserCompletedLevelPlaytime, curr )
    }
    alert('Retrieving Charts...');
  }

  render() {

    var help1 = [];
    var ref = db.ref('/Recharts/IndividualUserUncompletedLevelPlaytime/'+this.state.submitvalue);
    ref.on("value", function (snap) {
      snap.forEach(function (childSnapshot) {
        var value = childSnapshot.val();
        help1.push(value);
    });
    }
    );

    var help2 = [];
    var ref = db.ref('/Recharts/IndividualUserLevelsLastPlayed/'+this.state.submitvalue);
    ref.on("value", function (snap) {
      snap.forEach(function (childSnapshot) {
        var value = childSnapshot.val();
        help2.push(value);
    });
    }
    );

    var help3;
    var ref = db.ref('/Recharts/IndividualUserLevelsLastPlayed/'+this.state.submitvalue+'/lastVisit');
    ref.on("value", function (snap) {
        help3= snap.val();
    }
    );

    const db1=[]
    var ref1 = db.ref('/Recharts/IndividualUserCompletedLevelCount/'+this.state.submitvalue+"/levelscompleted");
    ref1.on("value", data => {
      if (data.val()) {
        db1.push(data.val());
      }
    });

    const db2=[]
    var ref2 = db.ref('/Recharts/IndividualUserTotalPlaytime/'+this.state.submitvalue+"/totalplaytime");
    ref2.on("value", data => {
      if (data.val()) {
        db2.push(data.val());
      }
    });

    const db3=[]
    var ref3 = db.ref('/Recharts/IndividualUserTotalAchievements/'+this.state.submitvalue+"/totalachievements");
    ref3.on("value", data => {
      if (data.val()) {
        db3.push(data.val());
      }
    });

    var db5=[]
    var ref5=db.ref('/Recharts/MedianForEachCourse/'+this.state.coursevalue+'/totalcompletelevelcount/Median')
    ref5.on("value", data => {
      if (data.val()) {
        db5.push(data.val());
      }
    })

    var db6=[]
    var ref6=db.ref('/Recharts/MedianForEachCourse/'+this.state.coursevalue+'/totalplaytime/Median')
    ref6.on("value", data => {
      if (data.val()) {
        db6.push(data.val());
      }
    })

    var db7=[]
    var ref7=db.ref('/Recharts/MedianForEachCourse/'+this.state.coursevalue+'/totalachievements/Median')
    ref7.on("value", data => {
      if (data.val()) {
        db7.push(data.val());
      }
    })


    return (   
        <AppFrame>
          <p>
          <form onSubmit={this.handleSubmit}>
          <label>
            Enter Your CodeCombat User ID: 
            <input type="text" 
            name="user" 
            value={this.state.uservalue} 
            onChange={this.handleChange} 
            placeholder="Your id here" />
            </label>
            <input type="submit" value="Submit" />
          </form>
          </p>

                  <p>
      <form>
        Select Your Course:  
        <select
      name="course"
      type="select"
      onChange={this.handleChange} 
      placeholder="Select Course" >
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
          
        {this.statechanged.userstate&&

            <Typography variant="title" gutterBottom>
            Showing Charts for： {this.state.submitvalue}</Typography>}

{this.statechanged.userstate&&
  <Grid container spacing={24}>
  
  <Grid item xs={4}>
  <TopBoxes
              Icon={Bookmark}
              title="Levels Completed"
              prefix=""
              value={db1}
              iconColor="#e75466"
              boxColor="#edf2f4"/>
  </Grid>
  
  <Grid item xs={4}>
  <TopBoxes
              Icon={Assignment}
              title="Total Achievements"
              prefix=""
              value={db3}
              iconColor="#e75466"
              boxColor="#edf2f4"/>
  </Grid>

  <Grid item xs={4}>
  <TopBoxes
              Icon={Timer}
              title="Total playtime"
              prefix=""
              value={db2}
              iconColor="#e75466"
              boxColor="#edf2f4"/>
  </Grid>


  </Grid>}       
  <br/>

{this.statechanged.coursestate&&
<Grid container spacing={24}>

<Grid item xs={4}>
            <TopBoxes
              Icon={Bookmark}
              title="Median, Levels Completed(Course)"
              prefix=""
              value={db5}
              iconColor="#e75466"
              boxColor="#edf2f4"/>
</Grid>

<Grid item xs={4}>
            <TopBoxes
              Icon={Assignment}
              title="Median, Total achievements(Course)"
              prefix=""
              value={db7}
              iconColor="#e75466"
              boxColor="#edf2f4"/>
</Grid>

<Grid item xs={4}>
            <TopBoxes
              Icon={Timer}
              title="Median, Total playtime(Course)"
              prefix=""
              value={db6}
              iconColor="#e75466"
              boxColor="#edf2f4"/>

</Grid>
</Grid>}       
<br/>

{this.statechanged.userstate&&
<Grid container spacing={24}>

<Grid item xs={6}>
      <Test
      data={help1.slice(0, 6).map((x, index) => {
      return <div key={index}>{x.level}</div>;
      })}
      title="Uncompleted Levels"
      iconColor="#e75466"
      boxColor="#edf2f4"
      />
</Grid>

<Grid item xs={6}>
      <Test
      data={help2.slice(0, 6).map((x, index) => {
      return <div key={index}>{x.levelName}</div>;
      })}
      title={"Levels Last Played on " +help3}
      iconColor="#e75466"
      boxColor="	#edf2f4"
      />
</Grid>

<Grid item xs={6}>   
<center>
        <Typography variant="title" gutterBottom>
          Completed Levels Playtime
      </Typography></center>
      <ResponsiveContainer width="100%" height={450}>
        <BarChart data={db4}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="level" hide="true" />
        <YAxis dataKey="playtime" />
        <Tooltip />
        <Legend />
        <Bar dataKey="playtime" fill="#e75466" />
        </BarChart>    
        </ResponsiveContainer>
</Grid>

<Grid item xs={6}>
<center>
        <Typography variant="title" gutterBottom>
          Completed Levels Playtime
      </Typography></center>
      <ResponsiveContainer width="100%" height={450}>
        <BarChart data={db4}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="level" hide="true" />
        <YAxis dataKey="playtime" />
        <Tooltip />
        <Legend />
        <Bar dataKey="playtime" fill="#e75466" />
        </BarChart>    
        </ResponsiveContainer>
</Grid>

</Grid>}

        </AppFrame>
    )
  }
};

const mapStateToProps = state => {
  return { charts: state.val }
}


const Recharts = connect(
  mapStateToProps,
)(Student)

export default Recharts;