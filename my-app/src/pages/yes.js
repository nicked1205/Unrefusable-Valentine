import { useNavigate, useLocation } from 'react-router-dom';
import throwingHearts from '../resources/throwingHearts.gif';
import Background from '../components/background';

function Yes() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    const loc = useLocation();
    const params = new URLSearchParams(loc.search);
    const value = atob(params.get("value"));

  return (
    <Background>
        <div id="back-btn" className='fixed left-0 top-0 hidden'>
            <button className="text-red-700 underline px-4 py-2 rounded" onClick={handleClick}>
                Back
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