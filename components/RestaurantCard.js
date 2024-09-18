import { CDN_url } from "./utils/const";

const RestaurantCard = (props)=>{
    // destructuring 
    // const {resname,cuisine} = props
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src= {CDN_url} />
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 stars</h4>

        </div>
    )


}

export default RestaurantCard;