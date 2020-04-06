import React from "react";




function List(props) {
// we make props.groceries a prop to equal (gorceries) have a map making it to an array  where the key items id and item name are 
// read for

// this filters stuff that is not purchased !value.purchased = false; value.purchased = true
  const notPurchased = props.groceries.filter(value => !value.purchased);
  return (
    <ul className="list-group">
    
      {notPurchased.map(item => (
        <li className="list-group-item" key={item.id}>
          {item.name}
        </li>
      ))}


    </ul>
  );
}

export default List;
