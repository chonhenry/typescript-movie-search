import React, { useState, useEffect } from "react";
import { fetchSingleMovie } from "./api/api";
import "./App.css";

interface movie {
  name: string;
}

function App() {
  const [movie, setMovie] = useState("");
  useEffect(() => {
    fetchSingleMovie("581726").then((res) => {
      console.log(res);
      setMovie(res.original_title);
    });
  }, []);

  return <div className="App">{movie}</div>;
}

export default App;
