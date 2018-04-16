import React from 'react'
import { render } from 'react-dom';
import AppFrame from '../AppFrame'
import { Bar, BarChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { compose } from 'redux'
import Divider from 'material-ui/Divider'
import { connect } from 'react-redux'
import Grid, { Row, Column, Cell } from 'react-weighted';
import Typography from 'material-ui/Typography'

class Dashboard extends React.Component {
  render() {
    return (
      <div><center>
        <Typography variant="title" gutterBottom>
          Top 5 Completed Levels by Count
      </Typography></center>
        <BarChart width={1000} height={450} data={this.props.charts.Recharts.TopCompletedLevels}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="level" />
        <YAxis dataKey="completed count" />
        <Tooltip />
        <Legend />

        <Bar dataKey="completed count" fill="#8884d8" />
      </BarChart>
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
)(Dashboard)

export default Recharts;