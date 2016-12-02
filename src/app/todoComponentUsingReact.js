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
        var ager = setTimeout(function() {

            this.setState({
                age: 35
            })
        }.bind(this), 5000);
        return(
            <div>
                <h1 onClick={this.clicked.bind(this, "hello")}>Hello, using React</h1>
                <p>{this.state.age}</p>
                <p>{this.props.mssg}</p>
                <ul>
                    {this.state.todos.map((todo, index) => (
                        <div key={index}>
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
ReactDOM.render(<TodoComponent />, document.getElementById('todos-component'));

module.exports = TodoComponent;
