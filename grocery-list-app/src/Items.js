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
                    />
                ))
            }
        </div>
    );
};

export default Items;