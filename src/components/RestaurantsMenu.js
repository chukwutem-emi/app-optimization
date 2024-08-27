import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API } from "../../utils/constants";
import { useParams } from "react-router-dom";
const RestaurantsMenu = () =>{
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);
    useEffect(() =>{
        fetchMenu();
    }, []);
    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const result = await data.json();
        console.log(result);
        setResInfo(result?.data);
    };
    if (resInfo === null) {
        return <Shimmer />;
    };
    const {name, cuisines, avgRatingString, sla, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard
    ?.cardGroupMap?.REGULAR?.
    cards[1]?.card?.card;
    console.log(itemCards);
    if (!itemCards || itemCards === 0) {
        return <p className="menu-items"> Oops!. No menu items available.</p>;
    }
    return(
        <div className="menu">
            <h3>{name}</h3>
            <div className="display-items">
                <p>⭐<strong>{avgRatingString} (2 ratings)&nbsp; ◽ &nbsp;{costForTwoMessage}</strong></p>
                <p>{cuisines.join(", ")}</p>
                <p>{sla?.slaString}</p>
            </div>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) =>(
                     <li key={item?.card?.info?.id}>{item?.card?.info?.name}&nbsp; - &nbsp;💲{item?.card?.info?.price}</li>
                ))}
            </ul>
        </div>
    );
};
export default RestaurantsMenu;