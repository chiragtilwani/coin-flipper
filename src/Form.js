import React,{Component} from 'react';
import {v4} from 'uuid';
class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            height:"",
            width:"",
            bgclr:""
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(evt){
        this.setState({[evt.target.name]:evt.target.value});
    }
    handleSubmit(evt){
        evt.preventDefault();
        const newBox={...this.state,id:v4()}
        this.props.addItem(newBox);
        this.setState({height:"",width:"",bgclr:""});
    }
    render() {
        return(
        <div className="Form">
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="height">Height : </label>
                <input type="number" id="height" value={this.state.height} name="height" onChange={this.handleChange}/>
                <label htmlFor="width">Width : </label>
                <input type="number" id="width" value={this.state.width} name="width" onChange={this.handleChange}/>
                <label htmlFor="bgclr">Background Color : </label>
                <input type="text" id="bgclr" value={this.state.bgclr} name="bgclr" onChange={this.handleChange}/>
                <button>Add Box ! </button>
            </form>
        </div>
        );
    }
}

export default Form;