import "./App.css";
import { useReducer } from "react";

import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { SETTODOS } from "./Context/action.type";
import Home from "./Home";
import Search from "./component/Search";

import SpecTodo from "./component/SpecTodo";

import EditTodo from "./component/Edited";
import Context from "./Context/Context";
import { reducer } from "./Context/reduser";
function App() {
  const URL = process.env.REACT_APP_URL;
  const arr = [];
  const [state, dispatch] = useReducer(reducer, arr);
  const Fetch = async () => {
    const data = await axios
      .get(`${URL}GetTodos`, {
        header: {
          "Access-Control-Allow-Origin":
            "https://todofrontend-txbl.vercel.app/",
        },
      })
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
    console.log(data);
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
              <Route path="/Todo/:id" element={<SpecTodo Fetch={Fetch} />} />
              <Route
                path="/Search/:String"
                element={<Search Fetch={Fetch} />}
              ></Route>
              <Route path="Edited" element={<EditTodo Fetch={Fetch} />} />
            </Route>
          </Routes>
        </Context.Provider>
      </Router>
    </div>
  );
}

export default App;
