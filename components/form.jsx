"use client"

import Image from "next/image"
import { use, useState } from "react"
import { emailFormat, form } from "../constants"
import iconError from "../public/images/icon-error.svg"

function Input(props) {

    const borderColor = (props.valid) ? "border border-custom-neutral-grayishBlue/50 focus:border-black " : "border-2 border-custom-primary-red focus:border-custom-primary-red"

    return (
        <div className="mb-4 ">
            <div className={`flex py-4 px-5 md:px-8 rounded-md w-full ${borderColor}`}>

                <input type={props.type} placeholder={props.placeholder} name={props.name}
                    className={`w-full border-0
                    font-semibold text-custom-neutral-darkBlue
                    placeholder:text-custom-neutral-darkBlue/75
                    outline-none`} />

                {!props.valid && <ErrorIcon />}
            </div>
            {!props.valid && <Warning warning={props.warning} />}
        </div>

    )
}

function SubmitButton() {
    return (
        <button className="py-4 w-full bg-custom-primary-green text-white font-medium 
                            tracking-wider rounded-md shadow-custom-inner mb-2
                            hover:bg-opacity-60"
            type="submit">
            CLAIM YOUR FREE TRIAL
        </button>
    )
}

function Warning({ warning }) {
    return (
        <div className="text-custom-primary-red text-end text-xs italic mt-2">
            {warning}
        </div>
    )
}

function ErrorIcon() {
    return (
        <Image src={iconError} alt="error" />
    )
}

function Form() {

    const [validation, setValidation] = useState({
        firstName: true,
        lastName: true,
        emailAddress: true,
        password: true,
    })
    const [emailWarning, setEmailWarning] = useState("")

    function emailValidator(email) {
        if (!email) {
            setEmailWarning(form.emailAddress.warningEmpty)
            return false
        }

        if (!email.match(emailFormat)) {
            setEmailWarning(form.emailAddress.warningFormat)
            return false
        }

        setEmailWarning("")
        return true
    }

    function handleSubmit(event) {
        event.preventDefault()

        // check empty
        let firstName = event.target.first_name.value ? true : false
        let lastName = event.target.last_name.value ? true : false
        let emailAddress = emailValidator(event.target.email_address.value)
        let password = event.target.password.value ? true : false

        setValidation({
            firstName: firstName,
            lastName: lastName,
            emailAddress: emailAddress,
            password: password,
        })
    }

    return (
        <form className="bg-white rounded-xl p-6 md:p-10 shadow-custom" onSubmit={handleSubmit} noValidate>
            <Input type="text" placeholder={form.firstName.placeholder} name="first_name" valid={validation.firstName} warning={form.firstName.warning} />
            <Input type="text" placeholder={form.lastName.placeholder} name="last_name" valid={validation.lastName} warning={form.lastName.warning} />
            <Input type="email" placeholder={form.emailAddress.placeholder} name="email_address" valid={validation.emailAddress} warning={emailWarning} />
            <Input type="password" placeholder={form.password.placeholder} name="password" valid={validation.password} warning={form.password.warning} />
            <SubmitButton />

            <p className="text-custom-neutral-grayishBlue font-medium text-center text-xs px-4 leading-6">By clicking the button, you are agreeing to our
                <a href="#" className="font-semibold text-custom-primary-red"> Terms and Services</a>
            </p>
        </form>
    )
}

export default Form