import './App.css';
import { useState } from 'react';
import CreateUser from './components/CreateUser';
import Login from './components/Login';
import UpdateUserForm from './components/UpdateUserForm';
import UserList from './components/UserList';

function App() {
  const [token, setToken] = useState(null);

  const handleLogin = (token) => {
    setToken(token);
  };

  return (
    <>
      {
        !token ? (
          <Login onLogin={handleLogin} />
        ) : (
          <>
            <CreateUser/>
            <UpdateUserForm />
            <UserList token={token} />
          </>
        )
      }
    </>
  );
}

export default App;
