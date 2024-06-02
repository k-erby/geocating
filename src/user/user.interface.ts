interface UserInformation {
    name: string,
    contact: ContactInformation,
}

type ContactMethod = "email" | "phone" | "text";
interface ContactInformation {
    preference: ContactMethod,
    contact: {
        email?: string, // need strong typing here
        phone?: string // hmm, i18n
    }
}