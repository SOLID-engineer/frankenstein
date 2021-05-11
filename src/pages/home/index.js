const Home = () => {
  return (
    <div>
      <div className="navigation fixed top-0 mb-0 mt-0 w-full">
        <div>Home</div>
      </div>

      <div className="banner flex flex-col items-center justify-center">
        <p className="head-title mb-28">
          <div className="rw-sentence">
            <span>Host fantastic virtual</span>
            &nbsp;
            <br />
            <div className="rw-words rw-words-1">
              <span>spice</span>
              <span>colors</span>
              <span>happiness</span>
            </div>
          </div>
        </p>

        <p className="head-subtext mb-14">
          Airmeet is an online venue for your events, designed to deliver real
          engagement and best-in-class interactions.
        </p>

        <div className="action-btn">
          <button className="left-btn mr-10 p-4 focus:outline-none">
            Get started
          </button>

          <button className="right-btn p-4 focus:outline-none">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
