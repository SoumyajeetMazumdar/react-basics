import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

const App = () => {
  return (
    <UserContextProvider>
      <h1>Hello there</h1>
      <Login /> <br />
      <br />
      <br />
      <Profile />
    </UserContextProvider>
  );
};

export default App;
