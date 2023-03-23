import React,{Component} from 'react';
import Box from './Box'
import Form from './Form'
class BoxList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            boxList:[
                // {height:"32",width:"32",bgclr:"black"}
            ]
        }
        this.addItem=this.addItem.bind(this);
    }
    addItem(item) {
        this.setState(curState=>({boxList:[...curState.boxList,item]}))
    }   
    removeItem(id) {
        let newBoxList=this.state.boxList.filter(box=>box.id!==id)
        this.setState({boxList:newBoxList})
    }
    render() {
        return (
            <div className="BoxList">
                <Form addItem={this.addItem}/>
                {this.state.boxList.map(box=>(
                    <div key={box.id}>
                        <Box height={box.height} width={box.width} bgclr={box.bgclr} />
                        <button onClick={this.removeItem.bind(this,box.id)}>Remove Box</button>
                    </div>
                ))}
            </div>
        )
    }
}

export default BoxList;