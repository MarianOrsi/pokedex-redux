import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { fetchPokemon } from "../../store";

function Home() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.user.isLoggedIn);
  const [pokemonName, setPokemonName] = useState('');
  const history = useHistory();

  function HandlePokemonChange(e) {
    setPokemonName(e.target.value);
  }

  function SearchPokemon() {
    dispatch(fetchPokemon(pokemonName));
    history.push('/pokemon');
  }

  return (
    <>
      {!isLoggedIn && 
        <>
          <p>No estas autorizado a entrar a esta pagina</p>
          <Link to="/login">Ir a login</Link>
        </>}
      {
        isLoggedIn && 
        <>
          <input type="text" placeholder="Escribir numero de pokemon" onChange={HandlePokemonChange} />
          <button onClick={SearchPokemon}>Buscar</button>
          <br />
          <Link to="/pokemon">Ver ultimo Pokemon</Link>
        </>
      }
    </>
  );
}

export default Home;