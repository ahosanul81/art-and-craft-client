import React, { useContext, useEffect } from 'react';
import { TextileContext } from '../../Context/TextileProvider';

const CategoryBasedItem = () => {
    const {catEmbroidery} = useContext(TextileContext)
    console.log(catEmbroidery, 'category based ');
 
   
    return (
        <div className='' >
            <h1>categoryyyy</h1>
        </div>
    );
};

export default CategoryBasedItem;