import './App.css';
import Loading from './assets/sanchez_1.png';
import HomePage from './components/HomePage';
import { useQuery, gql } from '@apollo/client';
import PageNotFound from './components/PageNotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


//Creating an array that contains the list of IDs of the characters
const IDS = [...Array(300).keys()].slice(1);

//Creating batches of characters with different dates
const FirstID = IDS.slice(0, 10);
const SecondID = IDS.slice(70, 80);
const ThirdID = IDS.slice(90, 100);
const FourthID = IDS.slice(110, 120);
const FifthID = IDS.slice(150, 160);
const SixthID = IDS.slice(200, 210);

//Concatenating all batches of IDs into one array for the query
const allIDS = [
  ...FirstID, 
  ...SecondID, 
  ...ThirdID, 
  ...FourthID, 
  ...FifthID, 
  ...SixthID
];


//Query for fetch a list of characters from id 1 - 
const getCharacters = gql`
  query getCharacters {
    characters: charactersByIds(ids: [${allIDS}]) {
      id
      name
      status
      species
      type
      gender
      image
      created
      location {
        id
        name
        type
        dimension
      }
    }
  }
`;



function App() {

  //Fetching the data from the API using the query parameter
  const { loading, error, data } = useQuery(getCharacters);

  if (loading) return (
    <div className="Loader-header">
      <img src={Loading} className="App-logo" alt="logo" />
      <h1> Loading... </h1>
    </div>
  );
  if (error) return <p> Error :( </p>;


  //Assigning fetched data to variable
  const characterList = data.characters;

  
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path='/characters/*' element={
            <HomePage
              characterList={characterList}
            />} 
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
