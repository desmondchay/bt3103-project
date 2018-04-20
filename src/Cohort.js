import React from 'react';
import { render } from 'react-dom';
import AppFrame from './AppFrame'
import Dashboard from 'react-dazzle';
import { LabelList,ResponsiveContainer, Bar, BarChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { compose } from 'redux'
import { connect } from 'react-redux'
import Test from './Test';
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid';
import TopBoxes from "./Data/TopBoxes"
import {Star, People,Bookmark, Timer, Assignment} from "@material-ui/icons"
import {db} from "./index.js"


var data1;

class RechartsComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' , isSelected: false};
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value, isSelected: true });
    if(event.target.value==="2018 National Coding Championships - Junior"){
      data1=this.props.charts.recharts.courseregistrationjunior;
    }

    if(event.target.value==="2018 National Coding Championships - Senior"){
      data1=this.props.charts.recharts.courseregistrationsenior;
    }

    if(event.target.value==="2018 National Coding Championships - Primary"){
      data1=this.props.charts.recharts.courseregistrationprimary;
    }

    if(event.target.value===""){
      this.setState({value: event.target.value, isSelected:false});
    }

    }

  render() {

    const db1=[]
    var ref1 = db.ref('/Recharts/MedianForEachCohort/'+this.state.value+"/totalachievements/Median");
    ref1.on("value", data => {
      if (data.val()) {
        db1.push(data.val());
      }
    });

    const db2=[]
    var ref2 = db.ref('/Recharts/MedianForEachCohort/'+this.state.value+"/totalcompletedplaytime/Median");
    ref2.on("value", data => {
      if (data.val()) {
        db2.push(data.val());
      }
    });

    const db3=[]
    var ref3 = db.ref('/Recharts/MedianForEachCohort/'+this.state.value+"/totalcompletelevelcount/Median");
    ref3.on("value", data => {
      if (data.val()) {
        db3.push(data.val());
      }
    });

    const db4=[]
    var ref4 = db.ref('/Recharts/MedianForEachCohort/'+this.state.value+"/totallevelcount/Median");
    ref4.on("value", data => {
      if (data.val()) {
        db4.push(data.val());
      }
    });
    
    const db5=[]
    var ref5 = db.ref('/Recharts/MedianForEachCohort/'+this.state.value+"/totalplaytime/Median");
    ref1.on("value", data => {
      if (data.val()) {
        db5.push(data.val());
      }
    });

    return (
      
      <AppFrame>  
      <p>
      <form>
        Select Your Cohort:
        <select
      onChange={this.handleChange} 
      placeholder="Select Course" 
      value={this.state.value}>
      <option value="">None</option>
      <option value="2018 National Coding Championships - Junior">2018 National Coding Championships - Junior</option>
      <option value="2018 National Coding Championships - Senior">2018 National Coding Championships - Senior</option>
      <option value="2018 National Coding Championships - Primary">2018 National Coding Championships - Primary</option>
      </select>
        </form>
        </p>

        <br/>

         {this.state.isSelected &&       
 <Grid container spacing={24}>
 
  
 <Grid item xs={4}>
 </Grid>
 <Grid item xs={4}>
 <TopBoxes
           Icon={Star}
           title="Median: Total Achievements"
           prefix=""
           value={db1}
           iconColor="#e75466"
           boxColor="#edf2f4"/>  
 </Grid>
 <Grid item xs={4}>
 </Grid>
<br/>

 <Grid item xs={1}>
 </Grid>
<Grid item xs={4}>
         <TopBoxes
           Icon={Assignment}
           title="Median: Total Levels Attempted"
           prefix=""
           value={db4}
           iconColor="#e75466"
           boxColor="#edf2f4"/>
</Grid>
 <Grid item xs={2}>
 </Grid>
 <Grid item xs={4}>
            <TopBoxes
              Icon={Timer}
              title="Median: Total Playtime"
              prefix=""
              value={db5}
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
           title="Median: Total Completed Playtime" 
           prefix=""
           value={db2}
           iconColor="#e75466"
           boxColor="#edf2f4"/>
 </Grid>   
   <Grid item xs={2}>
 </Grid>
 <Grid item xs={4}>
         <TopBoxes
           Icon={Assignment}
           title="Median, Total Completed Levels"
           prefix=""
           value={db3}
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
Number of Users in each Course for {this.state.value}
</Typography>
        <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data1}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" hide="true" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="y" stroke="#e75466">
        </Line>
        </LineChart> 
        </ResponsiveContainer></div></Grid>

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

const mapDispatchToProps = dispatch => { }


const Recharts = connect(
  mapStateToProps,
)(RechartsComp)



export default Recharts;