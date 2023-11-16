import { CDN_URL } from "../utils/constants";

const RestCards = (props) => {
    const {resData} = props
    const {name, cuisines, sla, avgRating} = resData?.card?.card?.info;
    return (
        <div className="rest-cards">
            <img className="img" src={ CDN_URL+ resData.card.card.info.cloudinaryImageId}/>
            <h3 className="heading">{name}</h3>
            <h4 className="heading">{cuisines.join(", ")}</h4>
            <h4 className="heading">{sla.deliveryTime} mins</h4>
            <h4 className="heading">{avgRating} Stars</h4>
        </div>
    )
}

export default RestCards;