import React from "react";
import { NavLink } from "react-router-dom";
import style from "./PokemonCards.module.css";

const PokemonCards = ({
  id,
  photo,
  name,
  type,
  showPokemonInfoActionCreate,
}) => {
  return (
    <NavLink to={`/pokemonInfo/${name}`}>
      <div
        onClick={() => showPokemonInfoActionCreate(id)}
        className={`${style.cardsPokemon} ${type}`}
      >
        <p>#{id}</p>
        <img src={photo} alt={name} />
        <h3>{name}</h3>
        <p>type: {type}</p>
      </div>
    </NavLink>
  );
};

export default PokemonCards;
