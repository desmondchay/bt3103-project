import React from 'react';
import { render } from 'react-dom';
import AppFrame from './AppFrame'
import Dashboard from 'react-dazzle';
import { compose } from 'redux'
import { connect } from 'react-redux'

class RechartsComp extends React.Component {


  render() {
    return (
      
      <AppFrame>  
        this app is built by me and me only
      </AppFrame>
    );
  }
}

export default RechartsComp;