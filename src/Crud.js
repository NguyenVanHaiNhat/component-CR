import {Component} from "react";

export default class Crud extends Component{
    constructor() {
        super();
        this.state = {
            list : [
                {
                    name : 'Nhật',
                    age : '20'
                },
                {
                    name : 'Đạt',
                    age : '24'
                }
            ],
            inputName : '',
            inputAge : ''
        }
    }
    add = () =>{
        this.setState((state) => {
            return {
                list : [...state.list, {name : state.inputName, age : state.inputAge}],
                inputName : '',
                inputAge : ''
            }
        })
    }
    change = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
            // Bên trái là tên thuộc tính, bên phải là giá trị thuộc tính
        })
    }
    render() {
        return (
            <>
                {this.state.list.map((item, index) =>(
                    <h2 key={index}>{item.name}, {item.age}</h2>
                ))}
                {/*dấu ngoặc tròn biểu thị là return ra 1 mảng giá trị*/}

                <input type="text" name={'inputName'} value={this.state.inputName} onChange={this.change}/>
                <input type="text" name={'inputAge'} value={this.state.inputAge} onChange={this.change}/>
                {/*<input type="text" value={this.state.inputName} onChange={(e) => {*/}
                {/*    this.setState({*/}
                {/*        inputName : e.target.value*/}
                {/*    })*/}
                {/*}}/>*/}
                {/*<input type="text" value={this.state.inputAge} onChange={(e) => {*/}
                {/*    this.setState({*/}
                {/*        inputAge : e.target.value*/}
                {/*    })*/}
                {/*}}/>*/}
                {/*<button onClick={() => {*/}
                {/*    this.add()*/}
                {/*    // this.setState((state) =>{*/}
                {/*    //     return {*/}
                {/*    //         list : [...state.list, {name : state.inputName, age : state.inputAge}],*/}
                {/*    //         // ...state.list dùng để sao chép tất cả phần tử từ mảng list*/}
                {/*    //         // {name : state.inputName, age : state.inputAge} là đối tượng mới được tạo*/}
                {/*    //         inputName : '',*/}
                {/*    //         inputAge : ''*/}
                {/*    //         // đặt giá trị của 2 ô input về rỗng sau khi hoàn tất việc add*/}
                {/*    //     }*/}
                {/*    // })*/}
                {/*}}>Add</button>*/}
                <button onClick={this.add}>Add</button>
            </>
        )
    }
}