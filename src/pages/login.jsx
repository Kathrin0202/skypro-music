import { Link } from "react-router-dom";

export function Login({ user, onAuthButtonClick }) {
  return (
    <div>
      <div>
        <button onClick={onAuthButtonClick}>
          {user ? (
            <Link to="/registration">Зарегистрироваться</Link>
          ) : (
            <Link to="/main">Войти</Link>
          )}
        </button>
      </div>
    </div>
  );
}
