import React from 'react';
import ReactDOM from 'react-dom';
import './css/bootstrap.min.css';

var myCheese = {name:'Tijan', id:9, price: 350}

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
                <ListComponent todo={this.state.todos} />
            </div>
        );
    }
}

class ListComponent extends React.Component {
    render() {
        return(
            <ul className='Hello'>
            {this.props.todo.map((todo, index) => (
                <li key={index}>{todo}</li>
            ))}
            </ul>
        );
    }
}

ReactDOM.render(<HelloComponent mssg="Hello again" cheese={myCheese} />, document.getElementById('todo-component'));

module.exports = HelloComponent;
