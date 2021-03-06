import React from 'react';
import Item from './Item';

const Items = (props) => {
    return (
        <div>
            {
                props.groceryList.map((item, i) => (
                    <Item 
                        key={i}
                        groceryListText={item}
                        handleDelete={props.handleDelete}
                    />
                ))
            }
        </div>
    );
};

export default Items;