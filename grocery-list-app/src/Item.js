import React from 'react';

const Item = (props) => {
    return (
        <div>
            <label>
               <input type="checkbox" value={props.groceryListText}/> {props.groceryListText}
            </label>
        </div>
    )
}

export default Item;