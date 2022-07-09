import './App.css';
import { useQuery, gql } from '@apollo/client';

//Creating an array that contains the list of IDs of the characters
const IDS = [...Array(300).keys()].slice(1);

//Creating batches of characters with different dates
const FirstID = IDS.slice(0, 5);
const SecondID = IDS.slice(70, 75);
const ThirdID = IDS.slice(90, 95);
const FourthID = IDS.slice(110, 115);
const FifthID = IDS.slice(150, 155);
const SixthID = IDS.slice(170, 175);
const SeventhID = IDS.slice(200, 205);
const EighthID = IDS.slice(270, 275);

//Concatenating all batches of IDs into one array for the query
const allIDS = [
  ...FirstID, 
  ...SecondID, 
  ...ThirdID, 
  ...FourthID, 
  ...FifthID, 
  ...SixthID, 
  ...SeventhID, 
  ...EighthID
];


//Query for fetch a list of characters from id 1 - 40
const getCharacters = gql`
  query getCharacters {
    characters: charactersByIds(ids: [${allIDS}]) {
      id
      name
      status
      species
      type
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
  const { loading, error, data } = useQuery(getCharacters);

  if (loading) return <p> Loading... </p>;
  if (error) return <p> Error :( </p>;

  console.log(data.characters);
  const characterList = data.characters;


  return (
    <>
      <header>
        <h1> Rick and Morty </h1>
        <p> Characters </p>
        <input type="text" id="search-term" placeholder='Search Character...' />
      </header>
      <div>
        {characterList.map(character => (
          <div className='App-header' key={character.id}>
            <img src={character.image} alt={character.name} />
            <div>
              <h3> {character.name} </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
