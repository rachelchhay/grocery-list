import React, { Component } from 'react';
import Items from './Items';

class AddItems extends Component {
    state = {
        value: '',
        groceryList: []
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
        console.log('Handle change');
    }

    handleSubmit = (event) => {
        event.preventDefault();

        console.log('Value submitted: ' + this.state.value);
        this.setState({
            groceryList: this.state.groceryList.concat(this.state.value.trim()),
            value: ''
        });
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
                <Items value={this.state.groceryList} />
            </div>
        );
    }
}

export default AddItems;