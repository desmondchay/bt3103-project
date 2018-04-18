import React from 'react';
import { render } from 'react-dom';
import AppFrame from './AppFrame'
import store from "./store";
import { connect } from 'react-redux'
import { Bar, BarChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Typography from 'material-ui/Typography'
import Test from "./Test"
import { red, grey600, cyan400, cyan600, pink400, pink500, pink600, purple400, purple500, purple600, orange400, orange600, pink} from "material-ui/colors";
import {db} from "./index.js"
import TopBoxes from "./Data/TopBoxes"
import ModeEdit from "@material-ui/icons/ModeEdit"
import PropTypes from 'prop-types';

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

    var help = [];
    var ref = db.ref('/Recharts/IndividualUserUncompletedLevelPlaytime/'+this.state.submitvalue);
    ref.on("value", function (snap) {
      snap.forEach(function (childSnapshot) {
        var value = childSnapshot.val();
        help.push(value);
    });
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
      <div>
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
      <option value="Developers">Developers</option>
      <option value="BT3103">BT3103</option>
      <option value="NUSHS - Senior (NCC2018)">NUSHS - Senior (NCC2018)</option>
      <option value="NUSHS - Junior (NCC2018)">NUSHS - Junior (NCC2018)</option>
      <option value="National JC - Junior (NCC2018)">National JC - Junior (NCC2018)</option>
      <option value="Junyuan Secondary School (NCC2018)">Junyuan Secondary School (NCC2018)</option>
      <option value="Dunman High School - Senior (NCC2018)">Dunman High School - Senior (NCC2018)</option>
      <option value="Dunman HS - Junior (NCC2018)">Dunman HS - Junior (NCC2018)</option>
      <option value="Raffles Institution - Senior (NCC2018)">Raffles Institution - Senior (NCC2018)</option>
      <option value="Sch of Science and Technology  (NCC2018)">Sch of Science and Technology  (NCC2018)</option>
      <option value="Temasek JC - Senior (NCC2018)">Temasek JC - Senior (NCC2018)</option>
      <option value="Temasek JC - Junior (NCC2018)">Temasek JC - Junior (NCC2018)</option>
  </select>
        </form>
        </p>
          
        {this.statechanged.userstate&&
          <center>
            <Typography variant="title" gutterBottom>
            Showing Charts for： {this.state.submitvalue}</Typography>
            </center>}

            {this.statechanged.userstate&&         
            <p>
            <TopBoxes
              Icon={ModeEdit}
              title="Levels Completed"
              prefix=""
              value={db1}
              iconColor={pink600}
              boxColor={pink400}/>
              </p>}

              {this.statechanged.coursestate&&
            <p>
            <TopBoxes
              Icon={ModeEdit}
              title="Median, Levels Completed for your Course"
              prefix=""
              value={db5}
              iconColor={pink600}
              boxColor={pink400}/>
              </p>}

              {this.statechanged.userstate&&             
              <p>
              <TopBoxes
              Icon={ModeEdit}
              title="Total playtime"
              prefix=""
              value={db2}
              iconColor={pink600}
              boxColor={pink400}/>
              </p>}

              {this.statechanged.coursestate&&
              <p>
              <TopBoxes
              Icon={ModeEdit}
              title="Median, Total playtime for your Course"
              prefix=""
              value={db6}
              iconColor={pink600}
              boxColor={pink400}/>
              </p>}

              {this.statechanged.userstate&&
              <p>
              <TopBoxes
              Icon={ModeEdit}
              title="Total Achievements"
              prefix=""
              value={db3}
              iconColor={pink600}
              boxColor={pink400}/>
              </p>}

              {this.statechanged.coursestate&&
              <p>
              <TopBoxes
              Icon={ModeEdit}
              title="Median, Total achievements for your Course"
              prefix=""
              value={db7}
              iconColor={pink600}
              boxColor={pink400}/>
              </p>}

              {this.statechanged.userstate&&
          <p>
            <Test
              data={help.map((x, index) => {
                return <div key={index}>{x.level}</div>;
              })}
              title="Uncompleted Levels"
              iconColor={red}
              boxColor={red}
            />
          </p>}

      {this.statechanged.userstate&&
          <p>
            <center>
        <Typography variant="title" gutterBottom>
          Completed Levels Playtime
      </Typography></center>
        <BarChart width={1000} height={450} data={db4}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="level" hide="true" />
        <YAxis dataKey="playtime" />
        <Tooltip />
        <Legend />
        <Bar dataKey="playtime" fill="#8884d8" />
        </BarChart>    
      </p>}

        </AppFrame>
      </div>
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