import Error404 from '../assets/jeez.png';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (  
    <>
      <div id='not-found' className="Loader-header">
      <img src={Error404} alt="logo" />
      <Link to='/characters'>
        <button style={{'margin': '20px auto'}}>
          Back to Home 
        </button>
      </Link>
    </div>
    </>
  );
}
 
export default PageNotFound;