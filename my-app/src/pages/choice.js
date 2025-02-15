import { useNavigate, useLocation } from 'react-router-dom';
import questioning from "../resources/questioning.png"
import cheering from "../resources/sounds/cheering.mp3"
import error from "../resources/sounds/error.mp3"
import teleport from "../resources/sounds/teleport.mp3"
// import corner from "../resources/corner.gif"
// import crying_a_lot from "../resources/crying_a_lot.gif"
// import crying_down from "../resources/crying_down.gif"
// import crying_up from "../resources/crying_up.gif"
// import on_the_ground from "../resources/on_the_floor.gif"
import Background from '../components/background';

function Choice() {
  const navigate = useNavigate();
  const loc = useLocation();
  const params = new URLSearchParams(loc.search);
  const value = params.get("value");

  const noButtonContentArr = ['Nope', 'Not Happenning', 'Just give up', 'Not a chance', 'No way', 'Click \'Yes\''];
//   const noButtonGifArr = [questioning, corner, crying_a_lot, crying_down, crying_up, on_the_ground];

  const cheeringSound = new Audio(cheering);
  const errorSound = new Audio(error);
  const teleportSound = new Audio(teleport);

  var noCount = 0;

  const handleClickYes = () => {
    navigate(`/yes?value=${value}`);
    cheeringSound.play();
    setTimeout(() => {
        document.getElementById("back-btn").style.display = "block";
    }, 7000);
  };

  const handleClickNo = () => {
    const button = document.getElementById("no-btn");
    errorSound.pause();
    errorSound.currentTime = 0;
    errorSound.play();
    button.style.position = "fixed";
    button.style.left = String(Math.floor(Math.random() * 90)) + "%";
    button.style.top = String(Math.floor(Math.random() * 98)) + "%";
    button.innerHTML = noButtonContentArr[noCount];
    if (noCount > 4) {
        document.getElementById("no-btn").style.position = "absolute";
        let velocityX = 0;
        let velocityY = 0;
        let posX = window.innerWidth / 2;
        let posY = window.innerHeight / 2;

        function updateButtonPosition() {
            button.style.left = `${posX}px`;
            button.style.top = `${posY}px`;
        }

        document.addEventListener('mousemove', (event) => {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const buttonRect = button.getBoundingClientRect();
            const buttonX = buttonRect.left + buttonRect.width / 2;
            const buttonY = buttonRect.top + buttonRect.height / 2;

            const distanceX = mouseX - buttonX;
            const distanceY = mouseY - buttonY;
            const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2);

            const repelDistance = 120; // Distance threshold for repelling
            const speedFactor = 8; // Adjust movement intensity

            if (distance < repelDistance) {
                const angle = Math.atan2(distanceY, distanceX);
                velocityX -= Math.cos(angle) * speedFactor;
                velocityY -= Math.sin(angle) * speedFactor;
            }
        });

        button.addEventListener('mouseover', (event) => {
            teleportSound.play();
            posX = Math.random() * window.innerWidth;
            posY = Math.random() * window.innerHeight;
            velocityX *= 0;
            velocityY *= 0;
        });

        function animate() {
            posX += velocityX;
            posY += velocityY;

            // Apply friction to slow down movement gradually
            velocityX *= 0.9;
            velocityY *= 0.9;

            // Keep the button inside the window bounds
            const maxX = window.innerWidth - button.clientWidth - 2;
            const maxY = window.innerHeight - button.clientHeight;
            posX = Math.max(0, Math.min(maxX, posX));
            posY = Math.max(0, Math.min(maxY, posY));

            updateButtonPosition();
            requestAnimationFrame(animate);
        }

        // Initialize button position and start animation loop
        button.style.position = 'absolute';
        updateButtonPosition();
        animate();
    }
    noCount++;
  };

  return (
    <Background>
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
      </Background>
  );
}

export default Choice;