import React from 'react';

class UserForm extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state = {nameValue:"", emailValue:""};
    //     this.nameChange = this.nameChange.bind(this);
    //     this.emailChange = this.emailChange.bind(this);
    //     this.formSubmit = this.formSubmit.bind(this);
    // }
    // nameChange(event){
    //     this.setState({nameValue:event.target.value});
    // }
    // emailChange(event){
    //     this.setState({emailValue : event.target.value});
    // }
    // render(){
    //     return(
    //         <form onSubmit={this.formSubmit}>
    //             <label>Name : <input type='text' value={this.state.nameValue} onChange={this.nameChange}/></label><br/><br/><br/>
    //             <label>Email : <input type='email' value={this.state.emailValue} onChange={this.emailChange}/></label><br/><br/><br/>
    //             <button type='submit'>Submit</button>
    //         </form>
    //     );
    // }
    constructor(props){
        super(props);
        this.state = {nameValue:"", emailValue:""};
        this.valueChange = this.valueChange.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }
    valueChange(event){
        this.setState({[event.target.name] : event.target.value})
    }
    formSubmit(event){
        alert(`Form Submitted with Name ${this.state.nameValue} and email ${this.state.emailValue}`)
        event.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.formSubmit}>
                <label>Name : <input type='text' name="nameValue" value={this.state.nameValue} onChange={this.valueChange}/></label><br/><br/><br/>
                <label>Email : <input type='email' name="emailValue" value={this.state.emailValue} onChange={this.valueChange}/></label><br/><br/><br/>
                <button type='submit'>Submit</button>
            </form>
        );
    }
}

export default UserForm;