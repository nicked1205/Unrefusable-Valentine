function App() {
  return (
    <div
        className="flex flex-col items-center justify-center h-screen bg-pink-200"
      >
        <div className="font-bold text-4xl text-red-700">
          Will you be my valentine?
        </div>
        <div className="flex w-32 justify-between mt-6">
          <button className="bg-green-700 text-white px-4 py-2 rounded">
            Yes
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded">
            No
          </button>
        </div>
      </div>
  );
}

export default App;