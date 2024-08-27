
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const Body = () => {
  //Local State variable - Super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  // whenever State variable update, react triggers a reconciliation cycle(re-renders the component)
  console.log("Body rendered");
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();
    console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    // optional chaining
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  // conditional rendering
  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }
 
    return (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input autoComplete="on" id="search-box" type="text" className="search-box" value={searchText} onChange={(e) => {
              setSearchText(e.target.value)
            }} />
            <button className="search-btn" onClick={() => {
              // filter the restaurant cards and update the UI
              // searchText
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())  
              );
              console.log(filteredRestaurants)
              setFilteredRestaurants(filteredRestaurants)
            }}>Search</button>
          </div>
          <button className="filter-btn" onClick={() => {
            // filter logic here
            const filterList = listOfRestaurants.filter((res) => res.info.avgRating > 4.2);
            // to update the list
            setFilteredRestaurants(filterList);
            console.log(filterList);
          }}>Top Rated Restaurants</button>
        </div>
        <div className="restaurant-container">
          {filteredRestaurants.map((restaurants) => (
            <Link key={restaurants.info.id} to={"/restaurant/" + restaurants.info.id }>
              <RestaurantCard resData={restaurants} />
            </Link>
        ))}
        </div>
      </div>
    );
  };
  export default Body;