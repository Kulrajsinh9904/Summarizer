import Hero from "./components/Hero"
import Demo from "./components/Demo"
import FeaturesSection from "./components/FeaturesSection"
import "./App.css"
const App = () => {
  return (
   <main>
        <div className="main">
            <div className="gradient"/>
        </div>
        <div className="app">
            <Hero/>
            <Demo/>
            <FeaturesSection/>
        </div>
   </main>
  )
}

export default App
