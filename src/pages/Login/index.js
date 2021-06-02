import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { loginUser } from "../../store";

function Login() {
  const [userLogin, setUser] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  function InputChange(e) {
    const { name, value } = e.target;

    setUser({
      ...userLogin,
      [name]: value
    });
  }

  function HandleClick() {
    dispatch(loginUser());
    history.push("/");
  }

  return (
    <div>
      <p>Usuario</p>
      <input type="text" name="user" onChange={InputChange}/>
      <p>Contraseña</p>
      <input type="password" name="password" onChange={InputChange}/>
      <button onClick={HandleClick}>Ingresar</button>
    </div>
  );
}
export default Login;