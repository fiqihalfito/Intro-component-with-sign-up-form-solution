import Form from '../components/form'
import Hero from '../components/hero'
import Offer from '../components/offer'

export default function Home() {
  return (
    // px-6 py-24
    <div className="md:h-screen w-screen px-6 py-24 bg-custom-primary-red bg-intro-mobile bg-no-repeat
                    grid grid-flow-row">
      <Hero />
      <div>
        <Offer />
        <Form />
      </div>
    </div>
  )
}
