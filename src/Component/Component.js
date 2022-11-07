import React from "react"
import {Component} from "react"

export default class Ccomponent extends Component {

    constructor(props){
        super(props)

        this.state={

            array:[],
            result:""

        }

        this.func = this.func.bind(this)
        this.func1 = this.func1.bind(this)
        this.func2 = this.func2.bind(this)
    }
   
    func = (e) => {
        this.setState({

            result:e.target.value

        })


    }   
    
    func1 = () => {

        this.state.array.push(this.state.result)
        this.setState({

            array:this.state.array

        })

    }
    func2 = () => {

        this.state.array.shift(this.state.result)
        this.setState({

            array:this.state.array

        })

    }


    render(){

        return(

            <div>

                <div className ="Block__Todo">

                    <div className ="inp">

                        <input type="text" onInput={this.func} />

                    </div>
                    <div className = "btn">

                        <button onClick={this.func1}>Добавить Задачу</button>
                        <button onClick={this.func2}>Убрать Задачу</button>

                    </div>

                    <div className="Todo_List">

                            <ul>

                                    {this.state.array.map((item,index) => <li key={index.toString()}>{item}</li>)}

                            </ul>

                    </div>

                </div>

            </div>

        )

    }


}