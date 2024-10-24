function ContactForm() {
    const accessKey = 'fd5cf248-0b1e-47f4-a801-f48cb6b60e03'

    return(
        <form action="https://api.web3forms.com/submit" method="POST">
            <h5 className="text-center">Contact Me</h5>

            <input type="hidden" name="access_key" value={accessKey} />
            <input type="hidden" name="subject" value="New Submission from Portfolio Contact Form" />
            <input name="full_name" type="text" placeholder="Enter your full name" required />
            <input name="email" type="email" placeholder="Enter your email address" required />
            <textarea name="message" placeholder="Tell me something" required ></textarea>
            <button>Send</button>
        </form>
    )
}

export default ContactForm;