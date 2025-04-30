import './App.css'

import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Add from './Components/Add/Index'
import Footer from './Components/Footer/Index'
import Dash from './Components/Dash'


function App() {

  return (
    <>
      <main>
        <Header />
        <Home />
        <About />
        <Add />
        <Dash />
      </main>
      <Footer />

    </>
  )
}

export default App
