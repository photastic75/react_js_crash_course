import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddToDo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title); //pass this up to App.js
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value }); //component level state in this only

    render() {
        return (
        <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
            <input 
                style={{ flex: '10', padding: '5px' }}
                type="text" 
                name="title"
                placeholder="Add To Do..."
                value={this.state.title}
                onChange={this.onChange}
            />
            <input 
                type="submit"
                value="submit"
                className="btn"
                style={{ flex: '1' }}
            />
        </form>
        )
    }
}

// PropTypes
AddToDo.propTypes = {
    addTodo: PropTypes.func.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
}

export default AddToDo;
