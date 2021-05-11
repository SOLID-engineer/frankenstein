function Search() {
  return (
    <div className="mt-20 flex mx-10 justify-center">
      <div className="grid grid-cols-4 w-full max-w-2xl rounded-full border border-gray-200 cursor-pointer bg-white">
        <div className="btn-effect btn-shadow">
          <span className="text-left text-xs font-semibold text-black">
            Location
          </span>
          <input
            type="text"
            placeholder="Where are you going ?"
            className="focus:outline-none overflow-ellipsis whitespace-nowrap overflow-hidden text-sm text-black placeholder-gray-500 bg-transparent"
          />
        </div>
        <button className="btn-effect btn-shadow">
          <span className="text-xs font-semibold text-black">Check in</span>
          <span className="text-sm text-gray-500">Add dates</span>
        </button>
        <button className="btn-effect btn-shadow">
          <span className="text-xs font-semibold text-black">Check out</span>
          <span className="text-sm text-gray-500">Add dates</span>
        </button>
        <button className="flex justify-between pl-5 pr-2 py-3 text-left hover:bg-transparent rounded-full hover:bg-gray-100 focus-within:outline-none btn-shadow">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-black">Guests</span>
            <span className="text-sm text-gray-500">Add dates</span>
          </div>
          <div className="bg-red-500 rounded-full p-3">
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
      </div>
    </div>
  );
}

export default Search;
