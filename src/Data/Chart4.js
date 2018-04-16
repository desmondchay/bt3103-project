import React from 'react';
import { render } from 'react-dom';
import AppFrame from '../AppFrame'
import Dashboard from 'react-dazzle';
import { Bar, BarChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { compose } from 'redux'
import { connect } from 'react-redux'
import Typography from 'material-ui/Typography'

class RechartsComp extends React.Component {
  render() {
    return (
      <div>
        <center>
          <Typography variant="title" gutterBottom>
            Top 5 Uncompleted Levels by Playtime
      </Typography></center>
        <BarChart width={1000} height={450} data={this.props.charts.Recharts.TopUncompletedLevelsTotalPlaytime}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="level" />
          <YAxis dataKey="uncompleted playtime"
            unit="s" />
          <Tooltip />
          <Legend />

          <Bar dataKey="uncompleted playtime" fill="#8884d8" />
        </BarChart>
      </div>
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