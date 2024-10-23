import React, {useState} from 'react';
import './App.css';
import {ITodo} from "./models/ITodo";
import Users from "./components/users/Users";
import {IUser} from "./models/IUser";
import {getTodosOfUser} from "./services/api.service";


function App():JSX.Element {
    const [todos,setTodos] = useState<ITodo[]>([]);

    const lift = (user:IUser) => {
        getTodosOfUser(user)
            .then ((response : ITodo[])=>{
                setTodos(response);
            });
    }

    return (
      <div>
          <hr/>
          {
              todos.map(todo => <div key={todo.id}>{todo.title}</div>)
          }
          <hr/>
          <Users lift={lift}/>
      </div>
  );
}

export default App;
