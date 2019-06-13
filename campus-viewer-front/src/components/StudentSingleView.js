import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class StudentSingleView extends Component{
  

  render(){
    console.log(this.props.match.params.id);
    return (
      <div>
        hey
      </div>
    );
  }
}

export default withRouter(StudentSingleView);
