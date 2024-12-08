import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = () => {
    const [items, setItems] = useState([]);
    const [count,setCount]=useState(0);

    useEffect(() => {
        axios.get('http://localhost:5000/api/items')
            .then(res => setItems(res.data))
            .catch(err => console.error(err));
    }, []);

    return (



<>
       <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-blue-400 ">Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item._id} className="border-b p-2">
                        <h2 className="font-semibold">{item.name}</h2>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div> </>
    );
};

export default ItemList;
