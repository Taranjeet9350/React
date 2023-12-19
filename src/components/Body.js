import RestCards from "./RestCards";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    console.log(listOfRestaurant);
    useEffect(()=>{
        fetchData();
    },[]);

   const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING ")
    const json = await data.json();
    setListOfRestaurant(json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants)
    
   }
 

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() => {
                     const filteredList = listOfRestaurant.filter((res) => res.info.avgRating >= 4.5) 
                   
                    setListOfRestaurant(filteredList);
                     console.log(filteredList);
                  }}
                  >Top Rated Restaurants</button>
                  </div>
            <div className="rest-container">
              {
                listOfRestaurant.map((restaurant) => (
                <RestCards key={restaurant.info.id} resData={restaurant} />
                ))}
                </div>
        </div>
    )
}

export default Body;