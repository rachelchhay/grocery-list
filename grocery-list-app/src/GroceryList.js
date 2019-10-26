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

    handleDelete = (item) => {
        console.log('Item being deleted:', item);
        const groceryList = this.state.groceryList.filter(groceryListItem => item !== groceryListItem);
        this.setState({
            groceryList: groceryList
            // You don't have to include the second groceryList because they're the same name
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
                <Items groceryList={this.state.groceryList} handleDelete={this.handleDelete} />
            </div>
        );
    }
}

export default AddItems;