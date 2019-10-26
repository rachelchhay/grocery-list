import React, { Component } from 'react';
import Items from './Items';

class AddItems extends Component {
    state = {
        value: ''
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit = (event) => {
        console.log('Value submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Grocery Item: 
                        <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
                <Items />
            </div>
        );
    }
}

export default AddItems;