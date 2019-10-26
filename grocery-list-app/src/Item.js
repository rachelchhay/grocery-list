import React from 'react';

const Item = (props) => {
    return (
        <div>
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