import {Component} from "react";
import Inside from "./Inside";

export default class Demo extends Component{
    constructor() {
        super();
        this.state = {
            // name : 'Hello Ace'
            isShow : false
        }
    }
    render() {
        return (
            <>
                {/*<h1>{this.state.name}</h1>*/}
                {/*<input type="text" onChange={(event) => {*/}
                {/*    console.log(event.target.value) // lấy dữ liệu*/}
                {/*    this.setState({*/}
                {/*        name: event.target.value*/}
                {/*    })*/}
                {/*}}/>*/}

                <button onClick={() => {
                    this.setState(state =>{
                        return{
                            isShow: !state.isShow
                        }
                    })
                }}>
                    Ẩn
                </button>
                {this.state.isShow && <Inside></Inside>}
                {/* nếu đúng thì lấy dữ liệu còn sai thì không   */}
            </>
        )
    }
}