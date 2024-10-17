function MessageLoggedInAdmin (props) {
    return(
      <>
        <h1>Your Inbox Is Here</h1>
        <button onClick={props.buttonClickFunc}>Log Out</button>
      </>
    )
  }
  
  function MessageLoggedInGuest (props) {
    return(
      <>
        <h1>Please Log In First</h1>
        <button onClick={props.buttonClickFunc}>Log In</button>
      </>
    )
  }
  
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
  
  ReactDOM.render(<Message/>, document.getElementById("root"));
  