import { useState, useRef } from "react";
import useFetch from "../hooks/useFetch";

const Forcast = () => {
  const [search, setSearch] = useState();
  const [clickedButton, setClickedButton] = useState(true);
  const [tableDisplay, setTableDisplay] = useState("none");
  const [url, setURL] = useState(
    "https://api.openweathermap.org/data/2.5/forecast?q=jerusalem&units=Metric&appid=75c2b690d5ad0f061ae52a1e4cd6fa49"
  );
  const { data, loading, error } = useFetch(url);
  const inputRef = useRef();
  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setURL(
      `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=Metric&appid=75c2b690d5ad0f061ae52a1e4cd6fa49`
    );
    setClickedButton(true);
    setTableDisplay("block");
    console.log("API Response:", data);
  };
  return (
    <div className="contanier {">
      <form>
        <input
          id="search-input"
          type=""
          value={search}
          ref={inputRef}
          onChange={handleChange}
        />
       <button>search</button>
      </form>
      {clickedButton && (
        <div>
          {data && typeof data === "object" ? (
            <div className="table">
              <table className="mytable" style={{ display: tableDisplay }}>
                <tr>
                  <th>date and time</th>
                  <th>temperature</th>
                  <th>weather</th>
                </tr>
                <tr>
                  <td>
                    {data.list.map((li) => (
                      <tr>{li.dt_txt}</tr>
                    ))}
                  </td>
                  <td>
                    {" "}
                    {data.list.map((li) => (
                      <tr>{li.main.temp}</tr>
                    ))}
                  </td>
                  <td>
                    {data.list.map((li) => (
                      <tr>{li.weather[0].description}</tr>
                    ))}
                  </td>
                </tr>
              </table>
            </div>
          ) : (
            <p>No data available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Forcast;
