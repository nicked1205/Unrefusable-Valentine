import { useNavigate } from 'react-router-dom';
import throwingHearts from '../resources/throwingHearts.gif';

function Yes() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

  return (
    <div
        className="flex flex-col items-center justify-center h-screen bg-pink-200"
      >
        <div id="back-btn" className='fixed left-0 top-0 hidden'>
            <button className="text-red-700 underline px-4 py-2 rounded" onClick={handleClick}>
                Back
            </button>
        </div>
        <div className="font-bold text-4xl text-red-700">
          I know you would say yes! You'll receive your present soon!
        </div>
        <img className="w-56 h-56" src={throwingHearts} alt="usagyuuun throwing hearts">
        </img>
      </div>
  );
}

export default Yes;