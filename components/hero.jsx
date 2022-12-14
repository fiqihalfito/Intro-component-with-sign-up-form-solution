import { hero } from "../constants"

function Hero() {
    return (
        <div className="text-white text-center mb-12">
            <h1 className="font-bold text-3xl mb-6">{hero.title}</h1>
            <p>{hero.subtitle}</p>
        </div>
    )
}

export default Hero