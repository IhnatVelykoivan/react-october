import React, {FC} from 'react';
import './App.css';
import Character from "./components/character/Character";

const App: FC = () => {
  return (
      <>
          <Character
              nameCharacter={'Bart'}
              imageCharacter={'https://upload.wikimedia.org/wikipedia/en/thumb/a/aa/Bart_Simpson_200px.png/170px-Bart_Simpson_200px.png'}
          />
          <hr/>
          <Character
              nameCharacter={'Homer'}
              imageCharacter={'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'}>
              <i>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem ducimus nam quis. Corporis molestias pariatur perspiciatis quisquam velit vero vitae? Aperiam ex numquam pariatur quae saepe, sint sunt ut vero!</i>
          </Character>
          <hr/>
          <Character
              nameCharacter={'Marge'}
              imageCharacter={'https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png'}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto aut commodi consequuntur dolores ea,
              eaque eius excepturi facere fuga in libero modi numquam odio officia optio quas reprehenderit tempore vel?
          </Character>
      </>
  );
}


export default App;
