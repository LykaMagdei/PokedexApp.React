import { Button } from "@mui/material";
import React, { useEffect } from "react";
import Paginator from "../assets/Paginator/Paginator";
import Preloader from "../assets/Preloader/Preloader";
import PokemonCards from "./PokemonCards/PokemonCards";
import style from "./PokemonList.module.css";

const PokemonList = ({
  getPokemonThunkCreate,
  pokemonList,
  pokemonLimits,
  currentPage,
  countPokemons,
  changeCurrentPageActionCreate,
  changePokemonLimitsActionCreate,
  showPokemonInfoActionCreate,
  isFetching,
  isDisabled,
}) => {

  // UseEffect 

  useEffect(() => {
    getPokemonThunkCreate(pokemonLimits, currentPage);
  }, [currentPage, pokemonLimits]);

  // Preloader 

  if (pokemonList.length < pokemonLimits) {
    return <Preloader />;
  }

  // create cards

  const createPokemonCards = pokemonList.map((p) => {
    return (
      <PokemonCards
        key={p.id}
        id={p.id}
        photo={p.sprites.other.dream_world.front_default}
        name={p.name}
        type={p.types[0].type.name}
        showPokemonInfoActionCreate={showPokemonInfoActionCreate}
      />
    );
  });
  return (
    <div className={style.pokemonListWrapper}>
      {isFetching && <Preloader />}
      <header>
        <h3>Change Pokemon limits:</h3>
        <div>
          {[20, 40, 60, 100, 250].map((n) => {
            return (
              <Button
                variant="outlined"
                key={n}
                onClick={() => changePokemonLimitsActionCreate(n)}
              >
                {n}
              </Button>
            );
          })}
        </div>
      </header>
      <main>
        <div className={style.pokemonCardsContainer}>{createPokemonCards}</div>
        <div className={style.paginator}>
          <Paginator
            totalItemsCount={countPokemons}
            pageSize={pokemonLimits}
            currentPage={currentPage}
            portionSize={10}
            onPageChanged={changeCurrentPageActionCreate}
            isDisable={isDisabled}
          />
        </div>
        <div className={style.pagination__mobile}>
          <Paginator
            totalItemsCount={countPokemons}
            pageSize={pokemonLimits}
            currentPage={currentPage}
            portionSize={3}
            onPageChanged={changeCurrentPageActionCreate}
            isDisable={isDisabled}
          />
        </div>
      </main>
    </div>
  );
};

export default PokemonList;
