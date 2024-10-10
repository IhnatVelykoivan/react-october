import React from 'react';
import './App.css';
import Character from "./components/character/Character";
import Users from "./components/users/Users";

function App():JSX.Element {
    return (
        <div>
            <Character
                name={'Chachi'}
                gender={'Male'}
                species={'Alien'}
                status={'Dead'}
                img={'https://rickandmortyapi.com/api/character/avatar/570.jpeg'}
            >
                <p>Lorem ipsum dolor sit amet.</p>

            </Character>


            <Character
                name={'Mechanical Rick'}
                img={'https://rickandmortyapi.com/api/character/avatar/218.jpeg'}
                gender={'Male'}
                status={'unknown'}
                species={'Robot'}
            >
                <p>Lorem ipsum dolor sit.</p>

            </Character>
            <hr/>

            <Users/>
        </div>
    );
}

export default App;
