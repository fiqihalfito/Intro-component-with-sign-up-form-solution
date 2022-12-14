export const hero = {
    title: "Learn to code by watching others",
    subtitle: "See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable."
}


export const form = {
    firstName: {
        placeholder: "First Name",
        warning: "First Name cannot be empty",
    },
    lastName: {
        placeholder: "Last Name",
        warning: "Last Name cannot be empty",
    },
    emailAddress: {
        placeholder: "Email Address",
        warningFormat: "Looks like this is not an email",
        warningEmpty: "Email Address cannot be empty",
    },
    password: {
        placeholder: "Password",
        warning: "Password cannot be empty",
    },
    submitText: "Claim your free trial",
}

export const emailFormat = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/