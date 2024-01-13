import RestCards from "./RestCards";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurant,setListOfRestaurant] = useState([]);
    const [filteredListOfRestaurant,setFilteredListOfRestaurant] = useState([]);
    const [searchText,setSearchText] = useState("");
    
    useEffect(()=>{
        fetchData();
    },[]);

   const fetchData = async ()=>{
    const data = await fetch("https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D12.9351929%26lng%3D77.62448069999999%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING")
  
    const json = await data.json();
    console.log(json)
    setListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setFilteredListOfRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
   }
   const list = listOfRestaurant;
//    if(listOfRestaurant.length===0){
//     return <Shimmer /> 
//    }
   console.log("listt of rest");
   console.log(list)
    return listOfRestaurant.length===0?<Shimmer />:(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }} />
                    
                    <button onClick={()=>{
                        const filteredRestaurant = listOfRestaurant.filter((res)=>{
                            // console.log("listOfRestaurant name")
                            // console.log(res.info.name)
                          return res.info.name.toLowerCase().includes(searchText.toLowerCase());
                         
                        })
                        // console.log("data is ")
                        // console.log(filteredRestaurant )
                        setFilteredListOfRestaurant(filteredRestaurant)
                        console.log(searchText)
                    }}>Search</button>
                </div>
                <button className="filter-btn" 
                onClick={() => {
                     const filteredList = listOfRestaurant.filter((res) => res.info.avgRating >= 4.5) 
                   
                    setFilteredListOfRestaurant(filteredList);
                     
                  }}
                  >Top Rated Restaurants</button>
                  </div>
            <div className="rest-container">
              {
                filteredListOfRestaurant.map((restaurant) => (
                <RestCards key={restaurant.info.id} resData={restaurant} />
                ))}
                </div>
        </div>
    )
}

export default Body;