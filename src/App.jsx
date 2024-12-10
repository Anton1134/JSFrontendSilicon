import './assets/css/styles.css'
import Carousel from './components/Carousel'
import Faq from './components/Faq'
import Features from './components/Features'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import InfoBox from './components/InfoBox'
import Rating from './components/Rating'
import Sponsor from './components/Sponsor'
import Subscribe from './components/Subscribe'

function App() {


  return (
    <>
    <div className="wrapper">
      <Header />
      <main>
        <Hero />
        <Sponsor />
        <Features />
        <Carousel />
        <InfoBox />
        <Rating />
        <Faq />
        <Subscribe />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
