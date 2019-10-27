import React from 'react';
import './Item.css'

const Item = (props) => {
    return (
        <div className="Item">
            <label>
               <input type="checkbox" value={props.groceryListText}/> {props.groceryListText}
            </label>

            <button onClick={() => {
                props.handleDelete(props.groceryListText)
            }}>
                Delete
            </button>
        </div>
    )
}

export default Item;