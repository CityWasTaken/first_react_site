function Footer() {
    const date = new Date();

    return(
        <footer>
            <p>&copy; Copyright {date.getFullYear()} </p>
            <p>Designed & Developed by City Smith</p>
        </footer>
    )
}

export default Footer;