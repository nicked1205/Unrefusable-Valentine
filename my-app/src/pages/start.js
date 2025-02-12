import { useNavigate } from 'react-router-dom';
import questioning from "../resources/questioning.png"
import cheering from "../resources/sounds/cheering.mp3"
import error from "../resources/sounds/error.mp3"

function Start() {
  const navigate = useNavigate();

  const cheeringSound = new Audio(cheering);
  const errorSound = new Audio(error);

  const handleClickYes = () => {
    navigate('/yes');
    cheeringSound.play();
  };

  const handleClickNo = () => {
    errorSound.play();
    document.getElementById("no-btn").style.display = "fixed";
    document.getElementById("no-btn").style.left = String(Math.floor(Math.random() * 100)) + "%";
    document.getElementById("no-btn").style.top = String(Math.floor(Math.random() * 100)) + "%";
  };

  return (
    <div
        className="flex flex-col items-center justify-center h-screen bg-pink-200"
      >
        <div className="font-bold text-4xl text-red-700">
          Will you be my valentine?
        </div>
        <div className="flex w-32 justify-between mt-6">
          <button id="yes-btn" className="bg-green-700 text-white px-4 py-2 rounded" onClick={handleClickYes}>
            Yes
          </button>
          <button id="no-btn" className="bg-red-500 text-white px-4 py-2 rounded" onClick={handleClickNo}>
            No
          </button>
        </div>
        <img className="w-56 h-56" src={questioning} alt="something's wrong">
        </img>
      </div>
  );
}

export default Start;