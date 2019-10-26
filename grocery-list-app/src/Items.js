import React from 'react';
import Item from './Item';

const Items = (props) => {
    return (
        <div>
            <Item valueText={props.value} />
            {/* {
                props.value.map((value) => {
                    <Item 
                        key={value}
                        valueText={value}
                    />
                })
            } */}
        </div>
    );
};

export default Items;