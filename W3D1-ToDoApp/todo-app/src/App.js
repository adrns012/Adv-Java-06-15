import './App.css';
import AddTodo  from './containers/AddTodo';
import TodoList from './pages/TodoList';
import VisibilityFilters from './pages/VisibilityFilters';

function App() {
  return (
    <div className="App">
     <AddTodo />
     <TodoList />
     <VisibilityFilters />
    </div>
  );
}

export default App;
