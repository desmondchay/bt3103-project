import React from 'react';
import { render } from 'react-dom';
import AppFrame from './AppFrame'
import store from "./store";
import { connect } from 'react-redux'
import { Bar, BarChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import Typography from 'material-ui/Typography'
import Test from "./Test"
import { red, grey600, cyan400, cyan600, pink400, pink500, pink600, purple400, purple500, purple600, orange400, orange600, pink} from "material-ui/colors";
import {ref} from "./index.js"
import TopBoxes from "./Data/TopBoxes"
import ModeEdit from "@material-ui/icons/ModeEdit"

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('Pushing to Firebase to generate charts for ' + this.state.value + '...');
    
    event.preventDefault();
  };



  render() {
    var help = [];

    ref.on("value", function (snap) {
      snap.forEach(function (childSnapshot) {
        var value = childSnapshot.val();
        help.push(value);
    });
    }
    );

    return (   
      <div>
        <AppFrame>
          <p>
          <form onSubmit={this.handleSubmit} >
            Enter Your CodeCombat User ID: <input type="text" name="username" value={this.state.value} onChange={this.handleChange} placeholder="Your id here" />
            <input type="submit" value="Submit" />
          </form>
          </p>
          
          <center>
            <Typography variant="title" gutterBottom>
            Charts for zhaichels (CodeCombat)</Typography>
            </center>
            
            <p><div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15">
            <TopBoxes
              Icon={ModeEdit}
              title="Levels Completed"
              prefix=""
              value={this.props.charts.Recharts.IndividualUserCompletedLevelCount.zhaichels.levelscompleted}
              iconColor={pink600}
              boxColor={pink400}/>
              </div></p>

            <p><div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15">
            <TopBoxes
              Icon={ModeEdit}
              title="Median, Levels Completed for your Course (BT3103)"
              prefix=""
              value={this.props.charts.Recharts.MedianForEachCourse.BT3103.totalcompletelevelcount.Median}
              iconColor={pink600}
              boxColor={pink400}/>
              </div></p>
              
              <p><div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15">
              <TopBoxes
              Icon={ModeEdit}
              title="Total playtime"
              prefix=""
              value={this.props.charts.Recharts.IndividualUserTotalPlaytime.zhaichels.totalplaytime}
              iconColor={pink600}
              boxColor={pink400}/>
              </div></p>

              <p><div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15">
              <TopBoxes
              Icon={ModeEdit}
              title="Median, Total playtime for your Course (BT3103)"
              prefix=""
              value={this.props.charts.Recharts.MedianForEachCourse.BT3103.totalplaytime.Median}
              iconColor={pink600}
              boxColor={pink400}/>
              </div></p>
              
              <p><div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15">
              <TopBoxes
              Icon={ModeEdit}
              title="Total Achievements"
              prefix=""
              value={this.props.charts.Recharts.IndividualUserTotalAchievements.zhaichels.totalachievements}
              iconColor={pink600}
              boxColor={pink400}/>
              </div></p>

              <p><div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15">
              <TopBoxes
              Icon={ModeEdit}
              title="Median, Total achievements for your Course (BT3103)"
              prefix=""
              value={this.props.charts.Recharts.MedianForEachCourse.BT3103.totalachievements.Median}
              iconColor={pink600}
              boxColor={pink400}/>
              </div></p>

          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-md m-b-15">
            <Test
              data={help.map((x, index) => {
                return <div key={index}>{x.level}</div>;
              })}
              title="Uncompleted Levels"
              iconColor={red}
              boxColor={red}
            />
          </div>

          <p><div>

            <center>
        <Typography variant="title" gutterBottom>
          Completed Levels Playtime
      </Typography></center>

        <BarChart width={1000} height={450} data={this.props.charts.Recharts.IndividualUserCompletedLevelPlaytime.zhaichels}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="level" hide="true" />
        <YAxis dataKey="playtime" />
        <Tooltip />
        <Legend />
        <Bar dataKey="playtime" fill="#8884d8" />
        </BarChart>    

    </div></p>

        </AppFrame>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return { charts: state.val }
}

const mapDispatchToProps = dispatch => { }


const Recharts = connect(
  mapStateToProps,
)(Student)

export default Recharts;