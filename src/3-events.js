class Toggle extends React.Component{

    constructor(props){
      super(props);
      this.state = {isToggleOn : true};
      // this.toggleButton = this.toggleButton.bind(this);
    }
  
    toggleButton () {
      this.setState({isToggleOn : !this.state.isToggleOn}); 
      console.log("Button is clicked : "+this.state.isToggleOn);
    }
  
    render(){
      return <button onClick={() => this.toggleButton()}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
    }
    
  }
  
  ReactDOM.render(<Toggle/>, document.getElementById('root'));