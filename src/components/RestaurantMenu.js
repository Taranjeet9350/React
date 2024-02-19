import React from 'react'
import { useEffect,useState } from 'react';
import Shimmer from './Shimmer';
import { useParams } from "react-router-dom";
import { MENU_API } from '../utils/constants';
import useRestaurantMenu from '../utils/UseRestaurantMenu';


  const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = useRestaurantMenu(resId);
    
    if(resInfo === null) return <Shimmer />
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    console.log(itemCards);
    
  return (
    <div> 
        {console.log("Hello")}
    <div className='menu'>
        <h1>{name}</h1>
        <p>{cuisines.join(", ")}</p>       
        <p>{costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>
            {itemCards.map((menu)=>(
           
            <li key={menu.card.info.id}>
                {menu?.card?.info?.name} - {"Rs "}
                {menu?.card?.info?.price/100 || menu?.card?.info?.defaultPrice/100}
            </li>      
        ))}
        </ul>
    </div>
    
    </div>
  )
}

export default RestaurantMenu;