import React from "react";
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({ item, isLoading }) => {
  return isLoading ? (<Spinner></Spinner>) : (
      <section className="cards">
          {item.map((items)=>(
              <CharacterItem key={items.char_id} items={items}></CharacterItem>
          ))}
      </section>
  )
};

export default CharacterGrid;
