import heart_left from '../resources/heart_left.webp';

function Background ({children}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200">
        <img className="absolute w-56 h-56 bottom-2 left-2" src={heart_left} alt="something's wrong"></img>
        {children}
    </div>
  );
}

export default Background;