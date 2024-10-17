import React from 'react';
import MessageLoggedInAdmin from './MessageLoggedInAdmin';
import {MessageLoggedInGuest} from './MessageLoggedInGuest';

class Message extends React.Component {
  
    constructor(props) {
      super(props);
      this.state = {isLoggedOn : false};
      this.LoginFunc = this.LoginFunc.bind(this);
      this.LogoutFunc = this.LogoutFunc.bind(this);
    }
  
    LogoutFunc(){
      this.setState({isLoggedOn : false});
    }
  
    LoginFunc () {
      this.setState({isLoggedOn : true});
    }
  
    render(){
      if(this.state.isLoggedOn){
        return <MessageLoggedInAdmin buttonClickFunc = {this.LogoutFunc}/>
      }else{
        return <MessageLoggedInGuest buttonClickFunc = {this.LoginFunc}/>
      }
    }
}

export default Message; 