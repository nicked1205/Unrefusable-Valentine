import { useNavigate } from 'react-router-dom';
import throwingHearts from '../resources/throwingHearts.gif';

function Yes() {
    const navigate = useNavigate();

  return (
    <div
        className="flex flex-col items-center justify-center h-screen bg-pink-200"
      >
        <div className='fixed left-0 top-0'>
            <button className="text-black underline px-4 py-2 rounded" onClick={() => navigate('/')}>
                Back
            </button>
        </div>
        <div className="font-bold text-4xl text-red-700">
          Yay!
        </div>
        <img className="w-56 h-56" src={throwingHearts} alt="usagyuuun throwing hearts">
        </img>
      </div>
  );
}

export default Yes;