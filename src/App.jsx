import './App.css'
import CreateUser from './components/CreateUser'
import Login from './components/Login'
import UpdateUserForm from './components/UpdateUserForm'
import UserList from './components/UseList'

function App() {

  const [token, setToken] = useState(null)

  const handleLogin = (token) => {
    setToken(token)
  }

  return (
    <>
      <CreateUser />
      <UpdateUserForm />
      {
        !token ? (
          <Login />
        ) : (<UserList />)
      }
    </>
  )
}

export default App
