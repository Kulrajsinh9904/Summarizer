import {logo} from "../assets"
const Hero = () => {
  return (
        <header className="w-full flex flex-col justify-center items-center">
              <nav className="flex justify-between items-center w-full mb-2 pt-2">
                 <h2 className="text-3xl orange_gradient text-start font-bold cursor-pointer">Summarizer</h2>
                 <button 
                    type="button"
                    onClick={() => {window.open('https://github.com/zkBOYss/Summarizer')}}
                    className="black_btn text-center"
                    >
                    Github
                 </button>
              </nav>
              <h2 className="head_text">
                      Summarize Your Articles <br className="mx-md:hidden"/>
                          With <span className="orange_gradient">Summarizer</span>
              </h2>
              <h2 className="desc">
              Summarizer is a revolutionary tool that streamlines the process of digesting vast amounts of information. 
              </h2>
        </header>
  )
}

export default Hero
