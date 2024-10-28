
import { useState, useEffect } from "react";
import shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "./utils/const";

const RestaurantMenu = ()=>{

    const [resInfo, setresInfo] = useState(null);

    const { resId } = useParams();

    useEffect(
        () =>{
            menu();
        },[])

    const menu = async ()=>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json();

        console.log(json);
        setresInfo(json.data);
    };

    if(resInfo === NULL) return <shimmer />;    

    const {name, cuisines , costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[5]?.groupedCards?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards);

    return (
        <div className ="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
            <h2>menu</h2>
            <ul>
                {itemCards.map((item)=>(
                    <li key ="item.card.info.id">
                        {item.card.info.name} -{"Rs."} 
                        {item.card.info.price || item.card.info.defaultPrice}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default RestaurantMenu;