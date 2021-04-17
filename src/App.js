
import './App.css';
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed"
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import { useStateValue } from './contexts/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();


  return (
    <div className="app">
      {
        !user ? <Login />
          : (
            <>
              <Header />

              <div className="app__body">
                <SideBar />
                <Feed />
                <Widgets />
              </div>
            </>
          )
      }

    </div>
  );
}

export default App;
