import { Header, Footer } from './components/Layout.jsx'
import {
  Hero, Stats, Vision, Services, Methods, Fieldwork, Coverage, Testimonials, Faq, Contact,
} from './components/Sections.jsx'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Vision />
        <Services />
        <Methods />
        <Fieldwork />
        <Coverage />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
