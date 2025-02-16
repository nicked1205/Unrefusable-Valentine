import { useNavigate, useLocation } from 'react-router-dom';
import throwingHearts from '../resources/throwingHearts.gif';
import Background from '../components/background';

function Yes() {
    const navigate = useNavigate();
    const currentLocation = window.location.href;
    const destination = `/choice${currentLocation.split("/yes")[1]}`

    const handleClickBack = () => {
        navigate(destination);
    };

    const handleClick = () => {
      navigate('/');
  };

    const loc = useLocation();
    const params = new URLSearchParams(loc.search);
    const value = atob(params.get("value"));

  return (
    <Background>
        <div id="back-btn" className='fixed left-0 top-0 hidden'>
            <button className="text-red-700 underline px-4 py-2 rounded hover:text-red-500 duration-200" onClick={handleClickBack}>
                Back
            </button>
        </div>
        <div id="make-your-own-btn" className='fixed bottom-0'>
            <button className="text-red-700 underline px-4 py-2 rounded hover:text-red-500 duration-200" onClick={handleClick}>
                Click here to make your own!
            </button>
        </div>
        <div className="font-bold text-4xl text-red-700">
          {value}
        </div>
        <img className="w-56 h-56" src={throwingHearts} alt="usagyuuun throwing hearts">
        </img>
    </Background>
  );
}

export default Yes;