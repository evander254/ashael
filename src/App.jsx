import Mesh from './components/Mesh'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Process from './components/Process'
import Why from './components/Why'
import Testimonials from './components/Testimonials'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  return (
    <>
      <Mesh />
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Why />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
