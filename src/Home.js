import Todos from "./component/Todos";
import AddTodo from "./component/AddTodo";

const Home = ({ Fetch }) => {
  return (
    <div>
      <AddTodo Fetch={Fetch} />
      <Todos />
    </div>
  );
};

export default Home;
