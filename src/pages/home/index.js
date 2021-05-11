const Home = () => {
  return (
    <div>
      <div className="navigation fixed top-0 mb-0 mt-0 w-full">
        <div>Home</div>
      </div>

      <div className="banner flex flex-row flex-wrap">
        <div className="head-title mb-14 mx-auto">
          <div className="rw-sentence">
            <div>
              Host fantastic virtual&nbsp;
              <span className="rw-words rw-words-1">
                <span>spice</span>
                <span>colors</span>
                <span>happiness</span>
              </span>
            </div>
          </div>
        </div>

        <div className="head-subtext mb-14 mx-auto">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </p>
        </div>

        <div className="action-btn mx-auto">
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
