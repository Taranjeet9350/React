import RestCards from "./RestCards";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    const [listOfRestaurant,setListOfRestaurant] = useState(resList);
    console.log(listOfRestaurant)
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                onClick={() => {
                    const filteredList = listOfRestaurant.filter((res) => res.card.card.info.avgRating >= 4.0) 
                    setListOfRestaurant(filteredList);
                    // console.log(filteredList);
                    // console.log(resList);
                  }}
                  >Top Rated Restaurants</button>
                  </div>
            <div className="rest-container">
              {
                listOfRestaurant.map((restaurant) => (
                <RestCards key={restaurant.card.card.info.id} resData={restaurant} />
                ))}
                </div>
        </div>
    )
}

export default Body;