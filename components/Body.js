import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { Link } from "react-router-dom";

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {filteredRestaurant.map((restaurant)=>{
                    <Link
                     key={restaurant.data.id} 
                     to ={"/restaurant/"+restaurant.data.id}
                     >
                        <RestaurantCard resData={restaurant} />
                    </Link>    
                })}
            </div>

        </div>
    )
}

export default Body;