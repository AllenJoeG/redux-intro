import React from "react";
import {useSelector} from 'react-redux';
import ElementItem from '../ElementItem/ElementItem.jsx';

export default function ElementList() {
  const elementList = useSelector((store) => store.elementList);

  return(
    <div>
        <ul>
          {/* .map second argument 'i' makes an index tracker, but SHOULD be an ID in database */}
          {elementList.map((element, i) => {
            return <ElementItem key={i} element = {element} />
          })}
        </ul>
      </div>
  )
}