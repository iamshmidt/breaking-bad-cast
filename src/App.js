import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/ui/Header";
import CharacterGrid from './components/ui/characters/CharacterGrid'
import Search from './components/ui/ui/Search'



const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const response = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);
      console.log(response.data);
      setItem(response.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header></Header>
      <Search getQuery={(q)=> setQuery(q)}></Search>
      <CharacterGrid isLoading={isLoading} item={item}></CharacterGrid>
    </div>
  );
};

export default App;
