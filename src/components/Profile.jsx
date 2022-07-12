const Profile = ({ characterList }) => {

  //Filtering through the fetched to arranged in template according to dates
  const firstList = characterList.filter(character => character.created.includes("2017-11-04"));
  const secondList = characterList.filter(character => character.created.includes("2017-11-30"));
  const thirdList = characterList.filter(character => character.created.includes("2017-12-01"));
  const fourthList = characterList.filter(character => character.created.includes("2017-12-26"));
  const fifthList = characterList.filter(character => character.created.includes("2017-12-29"));
  const sixthList = characterList.filter(character => character.created.includes("2017-12-30"));

  //Arranging all filtered lists and dates into an array for complex mapping in template
  const allLists = [
    {
      id: 'a',
      date: '2017-12-04',
      characters: firstList
    },
    {
      id: 'b',
      date: '2017-11-30',
      characters: secondList
    },
    {
      id: 'c',
      date: '2017-12-01',
      characters: thirdList
    },
    {
      id: 'd',
      date: '2017-12-26',
      characters: fourthList
    },
    {
      id: 'e',
      date: '2017-12-29',
      characters: fifthList
    },
    {
      id: 'f',
      date: '2017-12-30',
      characters: sixthList
    }
  ];


  return ( 
    <>
      {allLists.map(list => (
        <div className="container" key={list.id}>
          <div className='dates'> 
            <h2> {list.date} </h2>
          </div>
          <div className='character-box'>
            {list.characters.map(character => (
              <div className='App-header' key={character.id}>
                <img src={character.image} alt={character.name} />
                <div>
                  <h3> {character.name} </h3>
                  <ul>
                    <li> Gender: {character.gender} </li>
                    <li> Species: {character.species} </li>
                    <li> Location: {character.location.name} </li>
                    <li> Dimension: {character.location.dimension} </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
 
export default Profile;