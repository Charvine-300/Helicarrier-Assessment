import { useState } from 'react';
import Filter from './Filter';
import Profile from './Profile';
import { Routes, Route, Link } from 'react-router-dom';

const HomePage = ({ characterList}) => {
  //Creating a stateful variable to set up a controlled input (search) bar
  const [search, setSearch] = useState('');

  //Creating filtered list based off species for three more columns...
  const humanList = characterList.filter(human => human.species.toLowerCase() === 'human');
  const alienList = characterList.filter(alien => alien.species.toLowerCase() === 'alien');
  const robotList = characterList.filter(robot => robot.species.toLowerCase() === 'robot');


  return ( 
    <>
      <header className='animate__animated animate__fadeInDown'>
        <h1> Rick and Morty </h1>
        <input 
          type="text" 
          id="search-term" 
          placeholder='Search Character...' 
          onChange={(e) => setSearch(e.target.value)}
        />
        <div id="links">
          <Link to="/characters"> 
            <button> Profiles </button>
          </Link>
          <Link to="/characters/humans"> 
            <button> Humans </button>
          </Link>
          <Link to="/characters/aliens"> 
            <button> Aliens </button>
          </Link>
          <Link to="/characters/robots"> 
            <button> Robots </button>
          </Link>
        </div>
      </header>


      <Routes>
        <Route path='' element={
          <Profile 
            characterList={characterList}
          />} 
        />
        <Route path='humans' element={
          <Filter 
            filteredList={humanList.filter(human => human.name.toLowerCase().includes(search.toLowerCase()))}
            title='Humans'
          />} 
        />
        <Route path='aliens' element={
          <Filter 
            filteredList={alienList.filter(alien => alien.name.toLowerCase().includes(search.toLowerCase()))}
            title='Aliens'
          />} 
        />
        <Route path='robots' element={
          <Filter 
            filteredList={robotList.filter(robot => robot.name.toLowerCase().includes(search.toLowerCase()))}
            title='Robots'
          />} 
        />
      </Routes>
    </>
  );
}

 
export default HomePage;