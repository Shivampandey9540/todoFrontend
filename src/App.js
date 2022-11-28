import "./App.css";
import { useReducer } from "react";

import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { SETTODOS } from "./Context/action.type";
import Home from "./Home";
import Search from "./component/Search";

import SpecTodo from "./component/SpecTodo";
import Context from "./Context/Context";
import { reducer } from "./Context/reduser";
function App() {
  const { REACT_APP_URL } = process.env;
  const arr = [];
  const [state, dispatch] = useReducer(reducer, arr);
  const Fetch = async () => {
    const data = await axios
      .get(`${REACT_APP_URL}GetTodos`)
      .then((res) => {
        if (!res.data.Success === true) {
          console.log(res.data.Message);
        }
        return res.data.data;
      })
      .catch((error) => {
        console.log(error);
        return error;
      });

    if (data.message === "Network Error") {
      console.log(data);
      return null;
    }

    dispatch({
      type: SETTODOS,
      payload: data,
    });
  };

  useEffect(() => {
    Fetch();
  }, []);

  return (
    <div>
      <Router>
        <Context.Provider value={{ state, dispatch }}>
          <Routes>
            <Route path="/" element={<Home Fetch={Fetch} />}>
              <Route path="/Todo/:id" element={<SpecTodo />} />
              <Route
                path="/Search/:String"
                element={<Search Fetch={Fetch} />}
              />
            </Route>
          </Routes>

          <button
            onClick={() => {
              console.log(state);
            }}
          >
            click me
          </button>
        </Context.Provider>
      </Router>
    </div>
  );
}

export default App;
