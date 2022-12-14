import { form } from "../constants"

function Input(props) {
    return (
        <input {...props}
            className="py-4 px-5 border border-custom-neutral-grayishBlue rounded-md mb-4 w-full
                    font-semibold text-custom-neutral-darkBlue
                    placeholder:text-custom-neutral-darkBlue/75" />
    )
}

function SubmitButton() {
    return (
        <button className="py-4 w-full bg-custom-primary-green text-white font-medium 
                            tracking-wider rounded-md shadow-inner mb-2" type="submit">
            CLAIM YOUR FREE TRIAL
        </button>
    )
}


function Form() {
    return (
        <form className="bg-white rounded-xl p-6 shadow-custom">
            <div>
                <Input type="text" placeholder={form.firstName.placeholder} name="first-name" />
            </div>
            <div>
                <Input type="text" placeholder={form.lastName.placeholder} name="last-name" />
            </div>
            <div>
                <Input type="text" placeholder={form.emailAddress.placeholder} name="email-address" />
            </div>
            <div>
                <Input type="text" placeholder={form.password.placeholder} name="password" />
            </div>
            <SubmitButton />

            <p className="text-custom-neutral-grayishBlue font-medium text-center text-xs px-4 leading-6">By clicking the button, you are agreeing to our
                <span className="font-semibold text-custom-primary-red"> Terms and Services</span>
            </p>
        </form>
    )
}

export default Form