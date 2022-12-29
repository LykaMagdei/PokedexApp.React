import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound404 from "../components/assets/NotFound404/NotFound404";
import PokemonInfoContainer from "../components/PokemonInfo/PokemonInfoContainer";
import PokemonListContainer from "../components/PokemonList/PokemonListContainer";
import style from './App.module.css'

export const App = () => {
  return (
    <BrowserRouter>
      <div className={style.appWrapper}>
        <Routes>
          <Route path={"/"} element={<PokemonListContainer />} />
          <Route path={"/pokemonInfo/*"} element={<PokemonInfoContainer />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
