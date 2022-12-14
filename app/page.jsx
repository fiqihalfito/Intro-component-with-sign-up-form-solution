import Form from '../components/form'
import Hero from '../components/hero'
import Offer from '../components/offer'

export default function Home() {
  return (
    // px-6 py-24
    <div className="md:h-screen w-screen px-6 py-24 md:px-40 md:py-0 bg-custom-primary-red 
                    bg-intro-mobile md:bg-intro-desktop bg-no-repeat md:bg-cover
                    grid grid-flow-row md:grid-cols-2 md:items-center md:gap-x-20 ">
      <Hero />
      <div>
        <Offer />
        <Form />
      </div>
    </div>
  )
}
