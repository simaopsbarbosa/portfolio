import githubLogo from "../images/github-logo.png";
import simaoMini from "../images/simao-mini.png";

function Header() {
  return (
    <div className="mx-auto mt-10 flex max-w-[700px] items-center justify-between rounded-full border border-[#535353] bg-gradient-to-r from-[#1d1d1d] to-[#383838]">
      <div className="flex items-center">
        <img
          src={simaoMini}
          width="60px"
          className="m-1 rounded-full border border-[#777777]"
        ></img>
        <p className="mx-3 text-xl font-bold text-white">Simão Barbosa</p>
      </div>
      <div className="m-5 flex justify-end gap-8">
        <a className="font-light">about</a>
        <a className="font-light">projects</a>
        <a className="font-light">contact</a>
        <a href="https://github.com/simaopsbarbosa/">
          <img
            src={githubLogo}
            alt="github"
            width="24"
            className="block align-middle"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default Header;
