import React from 'react';
import './App.css';
import Xxx from "./components/Xxx";

function App():JSX.Element {
  return (
    <div>
        <Xxx place={'qwe'}/>
        <Xxx place={'asd'}/>
        <Xxx place={'zxc'}/>
        {/*{Xxx('city')}*/}
        {/*{Xxx('town')}*/}
    </div>
  );
}

export default App;
