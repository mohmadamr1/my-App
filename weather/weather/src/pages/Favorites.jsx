import useFetch from "../hooks/useFetch";
import { useState, useEffect } from "react";
const Favorites = ({ favorite }) => {
  const [urls, setUrls] = useState();

  return (
    <div>
      <h2>Favorite Cities</h2>
      <h4>....work on it</h4>
      {/* <ul>
        {favorite.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default Favorites;
