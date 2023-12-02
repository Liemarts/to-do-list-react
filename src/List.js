import { Component } from "react";
import icon from './icons8-to-do-list-30.png'

export class List extends Component {
    state = {
        userInput: "",
        list: []
    }

    onChangeEvent (e) {
        this.setState ({userInput: e});

    }

    addItem (input) {
        if (input==="") {
            alert ("Please enter an item")
        }
        else {
        let listArray = this.state.list;
        listArray.push(input);
        this.setState ({list: listArray, userInput:""})
        }
    }

deleteItem () {
    let listArray = this.state.list;
    listArray =[];
    this.setState ({list: listArray})
}

    crossedWord (event) {
        const li = event.target;
        li.classList.toggle ('crossed');
    }

    onFormSubmit (e) {
        e.preventDefault ();
    }

    render () {
        return (
            <div>
            <form onSubmit={this.onFormSubmit}>
            <div className="container">
                <input type="text" placeholder="What needs to be done today...?" 
                onChange = {(e) =>{this.onChangeEvent (e.target.value)} }
                value = {this.state.userInput} />
            </div>

            <div className="container">
                <button onClick={()=>this.addItem(this.state.userInput)} className="btn add">Add</button>
            </div>

            <div>
                <ul>
                    {this.state.list.map((item, index) => (
                        <li onClick={this.crossedWord} key={index}><img src={icon} alt="icon"/>{item}</li>
                    ))       
                    }
                </ul>
            </div>

            <div className="container">
                <button onClick={()=>this.deleteItem()} className="btn delete">Delete</button>
            </div>
            </form>
            </div>
        )
    }
}