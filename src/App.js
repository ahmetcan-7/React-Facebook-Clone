import React from 'react';
import './App.css';
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed"
import Widgets from "./components/Widgets";
import Login from "./components/Login";
import { useStateValue } from './contexts/StateProvider';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [{ user }, dispatch] = useStateValue();

  const carRef = React.createRef();
  return (
    <Router >
      <div className="app">
        {

          !user ? <Login />
            : (

              <>
                <Switch>

                  <Route path="/sidebar">

                    <Header carRef={carRef} />

                    <div className="app__body">
                      <SideBar carRef={carRef} />
                    </div>


                  </Route>

                  <Route path="/">


                    <Header carRef={carRef} />

                    <div className="app__body">
                      <SideBar carRef={carRef} />
                      <Feed />
                      <Widgets />
                    </div>


                  </Route>








                </Switch>
              </>

            )

        }

      </div>
    </Router>

  );
}

export default App;
