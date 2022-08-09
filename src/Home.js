import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import SearchIcon from "@mui/icons-material/Search";
import { StateContext } from "./ContextProvider";

function Home() {
  const { photo, result, setPhoto, setResult } = useContext(StateContext);

  const randomPhoto = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=river&client_id=KkUei-7Y6kK_m_hGMkpwgYaRdVh5h2AToijRk-O9WMc`
      )
      .then((response) => {
        setResult(response.data.results);
      });
  };

  const changePhoto = () => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=KkUei-7Y6kK_m_hGMkpwgYaRdVh5h2AToijRk-O9WMc`
      )
      .then((response) => {
        setResult(response.data.results);
      });
    // const text = photo;
    // const val = text.charAt(0).toUpperCase();
    // console.log("val uppercaSE=", val);
  };
  useEffect(() => {
    randomPhoto();
  }, []);

  const buttonSearch = (params) => {
    axios
      .get(
        `https://api.unsplash.com/search/photos?page=1&query=${params}&client_id=KkUei-7Y6kK_m_hGMkpwgYaRdVh5h2AToijRk-O9WMc`
      )
      .then((response) => {
        setResult(response.data.results);
      });
  };
  const enterKey = (e) => {
    if (e.key === "Enter") {
      axios
        .get(
          `https://api.unsplash.com/search/photos?page=1&query=${photo}&client_id=KkUei-7Y6kK_m_hGMkpwgYaRdVh5h2AToijRk-O9WMc`
        )
        .then((response) => {
          setResult(response.data.results);
        });
    }
  };

  return (
    <>
      <div className="heading">
        <h1> Search Images </h1>
      </div>

      <div className="search_bar">
        <input
          type="text"
          className="search_input"
          value={photo}
          onChange={(e) => {
            setPhoto(e.target.value);
          }}
          onKeyPress={enterKey}
          placeholder="search.."
        />
        <SearchIcon
          style={{
            width: 50,
            height: 39,
          }}
          onClick={changePhoto}
          className="search_icon"
        />{" "}
      </div>
      <div className="button">
        <button
          type="submit"
          onClick={() => {
            buttonSearch("mountain");
          }}
          className="btn"
        >
          Mountain
        </button>
        <button
          type="submit"
          onClick={() => {
            buttonSearch("car");
          }}
          className="btn"
        >
          Car
        </button>
        <button
          type="submit"
          onClick={() => {
            buttonSearch("animal");
          }}
          className="btn"
        >
          Animal
        </button>
        <button
          type="submit"
          onClick={() => {
            buttonSearch("laptop");
          }}
          className="btn"
        >
          Laptop
        </button>
      </div>
      <div className="container">
        <div className="row">
          {result.map((value) => {
            return (
              <div key={value?.id} className="column">
                <div className="imageDiv">
                  <img id="content" className="img" src={value?.urls?.small} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;
