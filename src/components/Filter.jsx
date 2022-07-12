

const Filter = ({ filteredList, title }) => {
  return ( 
    <>
      <div className="container">
        <div className='dates'> 
          <h2> {title} </h2>
        </div>
        <div className='character-box'>
          {filteredList.map(character => (
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
    </>
  );
}
 
export default Filter;