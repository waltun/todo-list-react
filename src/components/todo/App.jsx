import Header from "../layout/header";
import AddTodoForm from "./addTodoForm";
import TodoList from "./todoList";

function App() {
  return (
    <div className="font-IRANSans">
      <Header />

      <AddTodoForm />

      <TodoList />
    </div>
  );
}

export default App;
