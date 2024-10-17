class StateLifeCycle extends React.Component{

    constructor(props){
      super(props)
      this.state = {date : new Date()}
    }
  
    render(){
      return (<h1>{this.state.date.toString()}</h1>);
    }
  
    componentDidMount(){
      this.time = setInterval( () => {
        this.tick();
      }
      , 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.time);
    }
  
    tick(){
      this.setState({date : new Date()});
    }
  }
  
  ReactDOM.render(<StateLifeCycle/>, document.querySelector('#root'));
  