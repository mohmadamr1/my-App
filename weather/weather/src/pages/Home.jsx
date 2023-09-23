import { useState, useRef } from "react";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const [search, setSearch] = useState("jerusalem");
  const [clickedButton, setClickedButton] = useState(true);
  const [url, setURL] = useState(
    "https://api.openweathermap.org/data/2.5/weather?q=jerusalem&units=Metric&appid=75c2b690d5ad0f061ae52a1e4cd6fa49"
  );
  const { data, loading, error } = useFetch(url);
  const [favorite, setFavorite] = useState([]);

  const inputRef = useRef();
  {
    console.log(favorite);
  }
  const handleChange = (e) => {
    e.preventDefault();
    9;
    setSearch(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setURL(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=Metric&appid=75c2b690d5ad0f061ae52a1e4cd6fa49`
    );
    setClickedButton(true);
  };
  const handleFavorite = (e) => {
    e.preventDefault();
    setFavorite([...favorite, search]);
  };

  return (
    <div className="contanier">
      <form>
        <input
          id="search-input"
          type=""
          value={search}
          ref={inputRef}
          onChange={handleChange}
        />
        <button id="search-button" onClick={handleClick}>
          search
        </button>{" "}
        <br />
        {/* <button
          id="search-button"
          style={{ marginTop: "20px" }}
          onClick={handleFavorite}
        >
          Add this City to favorite
        </button> */}
      </form>
      {clickedButton && (
        <div>
          {loading && <p>Loading...</p>}
          {/* {error && <p>Error: {error.message}</p>} */}
          {data && typeof data === "object" ? (
            <div>
              <h2> {data.name}</h2>
              <p>Temperature: {data.main.temp} °C</p>
              <p>Weather: {data.weather[0].description}</p>
            </div>
          ) : (
            <p>No data available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
