import React from 'react'
import {Switch,Route} from 'react-router-dom'
import App from './App';
import Course from './Course';
import Cohort from './Cohort'
import Student from './Student'
import Overall from './Overall'
import About from './About'
//import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const Root=()=>(
    <Switch>
    <Route path="/" exact component={App} />
    <Route path="/app" exact component={App} />
    <Route path="/about" exact component={About}/>
    <Route path="/student" exact component={Student} />
    <Route path="/course" exact component={Course} />
    <Route path="/cohort" exact component={Cohort} />
    <Route path="/overall" exact component={Overall} />
    </Switch>
)

export default Root
