import githubLogo from '../images/github-logo.png';
import simaoMini from '../images/simao-mini.png';

function Header() {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-[#1d1d1d] to-[#383838] rounded-full max-w-[700px] mx-auto mt-10 border border-[#454545]">
      <div className='flex items-center'>
        <img src={simaoMini} width="60px" className='rounded-full m-1 border border-[#777777]'></img>
        <p className="text-xl font-bold text-white mx-3">Simão Barbosa</p>
      </div>
      <div className="flex gap-8 justify-end m-5">
        <a className="font-light">about</a>
        <a className="font-light">projects</a>
        <a className="font-light">contact</a>
        <a href="https://github.com/simaopsbarbosa/"><img src={githubLogo} alt="github" width="24" className='block align-middle'></img></a>
      </div>
    </div>
  );
}

export default Header;
