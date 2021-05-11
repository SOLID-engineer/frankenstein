import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search";
import Home from "./pages/home";
function App() {
  const [offSet, setOffset] = useState();
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);
  const handleDisplaySearch = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="App">
      {offSet > 50 && (
        <nav className="bg-white w-full flex flex-col py-4 border-b-2 sticky top-0 z-50">
          <button
            className="rounded-full mx-auto w-1/2 flex justify-between items-center space-x-5 focus:shadow-lg border focus:outline-none py-3 px-4"
            onClick={handleDisplaySearch}
          >
            <span> Start your search</span>
            <div className="bg-red-500 rounded-full p-2">
              <svg
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                role="presentation"
                focusable="false"
                style={{
                  display: "block",
                  fill: "none",
                  height: "16px",
                  width: "16px",
                  stroke: "white",
                  strokeWidth: "4",
                  overflow: "visible",
                }}
              >
                <g fill="none">
                  <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
                </g>
              </svg>
            </div>
          </button>
          {isShow && <Search />}
        </nav>
      )}
      <div className={`${offSet > 10 && "opacity-0"}`}>
        <Search />
      </div>
      <Home />
    </div>
  );
}
export default App;
