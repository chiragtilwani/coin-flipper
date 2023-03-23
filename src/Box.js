import React,{Component} from 'react';


class Box extends Component {
    render() {
        const {height,width,bgclr} = this.props;
        const h=`${height}px`;
        const w=`${width}px`;
        
        return(
            <div className="Box" style={{height:h,width:w,backgroundColor:bgclr}}>

            </div>
        );
    }
}

export default Box;