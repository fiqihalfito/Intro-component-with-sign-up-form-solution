import { offer } from "../constants"

function Offer() {
    return (
        <button className="bg-custom-accent-blue rounded-lg w-full text-white mb-8
                            py-4 px-16 leading-7 shadow-custom ">
            <span className="font-bold">Try it free 7 days</span> then $20/mo. thereafter
        </button>
    )
}

export default Offer