import { render } from 'react-dom';
import AppFrame from './AppFrame'
import Dashboard from 'react-dazzle';
import {PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import {compose} from 'redux'
import {connect} from 'react-redux'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SelectField from 'material-ui/Select';
import MenuItem from 'material-ui/Menu';
import SelectCourse from './SelectCourse';
import Typography from 'material-ui/Typography'
import TopBoxes from './Data/TopBoxes'
import { grey600, cyan400, cyan600, pink400, pink500, pink600, purple400, purple500, purple600, orange400, orange600, pink} from "material-ui/colors";
import ModeEdit from "@material-ui/icons/ModeEdit"

class RechartsComp extends React.Component {
  render() {
    return (
      <AppFrame>

      <p>
      <SelectCourse/>
      </p>

      <center>
        <Typography variant="title" gutterBottom>
        Charts for Course BT3103 (CodeCombat)</Typography>
        </center>

          <p><div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15">
          <TopBoxes
            Icon={ModeEdit}
            title="Number of Students Enrolled"
            prefix=""
            value={this.props.charts.Recharts.NumberOfUserInEachCourse.BT3103.numUsers}
            iconColor={pink600}
            boxColor={pink400}/>
            </div></p>
            
            <p><div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15">
            <TopBoxes
              Icon={ModeEdit}
              title="Median, Levels Completed in BT3103"
              prefix=""
              value={this.props.charts.Recharts.MedianForEachCourse.BT3103.totalcompletelevelcount.Median}
              iconColor={pink600}
              boxColor={pink400}/>
            </div></p>
            
            <p><div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15">
            <TopBoxes
            Icon={ModeEdit}
            title="Median, Total Playtime in BT3103"
            prefix=""
            value={this.props.charts.Recharts.MedianForEachCourse.BT3103.totalplaytime.Median}
            iconColor={pink600}
            boxColor={pink400}/>
            </div></p>
            
            <p><div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 m-b-15">
            <TopBoxes
            Icon={ModeEdit}
            title="Median, Total achievements in BT3103"
            prefix=""
            value={this.props.charts.Recharts.MedianForEachCourse.BT3103.totalachievements.Median}
            iconColor={pink600}
            boxColor={pink400}/>
            </div></p>

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