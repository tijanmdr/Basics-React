import React from 'react';
import ReactDOM from 'react-dom';

// Create Component using React Method
var TodoComponent = React.createClass ({
    getInitialState () {
        return {
            todos:['wash', 'laugh'],
            age: 30
        }
    },
    render: function() {
        // var ager = setTimeout(function() {
        
        //     this.setState({
        //         age: 35
        //     })
        // }.bind(this), 5000);
        return(
            <div>
                <h1 onClick={this.clicked.bind(this, "hello")}>Hello, using React</h1>
                <p>{this.state.age}</p>
                <p>{this.props.mssg}</p>
                <ul>
                    {this.state.todos.map((todo, index) => (
                        <div>
                            <li>{todo}</li>
                            <span onClick={this.deleted.bind(this, index)}>Delete</span>
                        </div>
                    ))}
                </ul>
            </div>
        );
    },
    clicked: function(data) {
        alert(data);
    },
    deleted: function(data) {
        // var updatedTodos = this.state.todos.splice(data, 1);
        var updatedTodos = this.state.todos.filter(function(val, index) {
            return data !== index;
        });

        this.setState({
            todos: updatedTodos
        });
    }
});

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
            <div>
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
                <li>{todo}</li>
            ))}
            </ul>
        );
    }

}

// States
var myCheese = {name:'Tijan', id:9, price: 350}

ReactDOM.render(<HelloComponent mssg="Hello again" cheese={myCheese} />, document.getElementById('todo-component'));

ReactDOM.render(<TodoComponent mssg="Hello"/>, document.getElementById('todos-component'));
