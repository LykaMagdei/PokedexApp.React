import { Button } from "@mui/material";
import React from "react";
import { Navigate, NavLink } from "react-router-dom";
import style from './pokemonInfo.module.css';
import ProgressScale from "./Progress/ProgressScale";

const PokemonInfo = ({ pokemonList }) => {
  if (pokemonList.length < 1) {
    return <Navigate to={"/"} />;
  }
  const createProggess = pokemonList[0].stats.map((n, index) => {
    return <ProgressScale base_stat={n.base_stat} nameStat={n.stat.name} key={index} />
  })

  return (
    <div>
      <div className={style.header}>
        <NavLink to={"/"}>
          <Button variant="outlined">Back</Button>
        </NavLink>
      </div>
      <div className={style.wrapper}>
        <div className={style.infoPokemon}>
          <p>#{pokemonList[0].id}</p>
          <img
            src={pokemonList[0].sprites.other.dream_world.front_default}
            alt={pokemonList[0].name}
          />
          <h3>{pokemonList[0].name}</h3>
          <p>type: {pokemonList[0].types[0].type.name}</p>
        </div>
        <div>
          {createProggess}
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
