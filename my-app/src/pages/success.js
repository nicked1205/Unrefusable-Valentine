import Background from "../components/background";
import { useNavigate } from "react-router-dom";
function Success() {
    const navigate = useNavigate();
    const currentLocation = window.location.href;
    const destination = `/choice${currentLocation.split("success")[1]}`

    const shareData = {
      title: "Be My Valentine",
      text: "Invite your special someone to be your Valentine! (they can't say no)",
      url: destination,
    };

    async function handleShare() {
      try {
        await navigator.share(shareData);
        alert("Shared succesfully!");
      } catch (err) {
        alert("Error: " + err);
      }
    }

    function handleNaviation() {
      navigate(destination);
    }
  
    return (
      <Background>
        <div className="font-bold text-4xl text-red-700 mb-6">
          Hooray! You have successfully customized your message! 🎉
        </div>
        <div className="text-red-700 text-sm">
            Click <div className="text-red-800 hover:text-red-500 duration-200 inline-block hover:cursor-pointer underline" onClick={handleShare}>here</div> to share the message link to that somebody, 
            or <div className="text-red-800 hover:text-red-500 duration-200 inline-block hover:cursor-pointer underline" onClick={handleNaviation}>here</div> to see your creation!
        </div>
        <div className='fixed left-0 top-0'>
            <button className="text-red-700 underline px-4 py-2 rounded hover:text-red-500 duration-200" onClick={navigate('/')}>
                Back
            </button>
        </div>
      </Background>
    );
  }
  
  export default Success;