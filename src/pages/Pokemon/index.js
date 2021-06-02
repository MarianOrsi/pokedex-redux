import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Pokemon() {
  const pokemon = useSelector(state => state.pokemon.pokemon);
  return (
    <>
      <img src={pokemon.image} alt="pokemon"></img>
      <p>{pokemon.name}</p>
      <Link to="/">Atras</Link>
    </>
  )
}
export default Pokemon;