import { useKeycloak } from "@react-keycloak/web";
import { useCallback } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  const { keycloak } = useKeycloak();
  const { tokenParsed } = keycloak;

  const login = useCallback(() => {
    keycloak?.login();
  }, [keycloak]);

  const logout = useCallback(() => {
    keycloak?.logout();
  }, [keycloak]);

  return (
    <div className="App">
      <h1>Vite + React + Keycloak</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>

      {keycloak?.authenticated ? (
        <>
          <h2>Olá, {tokenParsed?.given_name}</h2>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}

      <Outlet />

      <pre>{JSON.stringify(tokenParsed, null, 2)}</pre>
    </div>
  );
}

export default App;
