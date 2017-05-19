import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';

var myCheese = {name:'Tijan', id:9, price: 350};

// Create Component using ES6 method
class HelloComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ['wash', 'pack']
        };
    }
    render() {
        return(
            <div className='col-md-6'>
                <h1>Using New</h1>
                <h2>{this.props.mssg}</h2>
                <p><b>Name: </b>{this.props.cheese.name}</p>
                <p><b>ID: </b>{this.props.cheese.id}</p>
                <p><b>Price: </b>Rs. {this.props.cheese.price}</p>
                <ul className='Hello'>
                    {this.state.todos.map((todo, index) => (
                        <li key={index}>{todo}<br /><span onClick={this.deleteItem.bind(this,todo)}>Delete</span></li>
                    ))}
                </ul>
            </div>
        );
    };

    deleteItem (data) {
        this.state.todos.splice(this.state.todos.indexOf(data), 1);
        this.setState({todos: this.state.todos});
    }
}

class ApiCheck extends React.Component {

}

ReactDOM.render(<HelloComponent mssg="Hello again" cheese={myCheese} />, document.getElementById('todo-component'));

module.exports = HelloComponent;
