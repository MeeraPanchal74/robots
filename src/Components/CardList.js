import React from 'react';
import Card from './Card.js';
//import {robots} from './Robots.js'; we can import robots like this way or by props
const CardList = ({robots})=>{
    const cardComponent = robots.map((user,i)=> {
       return <Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>
    })
    return (
        <div>
              {cardComponent}
        </div>
    );
}
export default CardList;
// here we have to make unique key for each card in virtual dom so that if any card gets deleted dom can track it and can make necessary changes.
// key should be made something that doesn't change. Here index could change if items are moved . Hene something like unique id should bee made a key.