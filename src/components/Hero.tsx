import {useState, useEffect} from "react";
import axios from "axios";

function Hero() {
    const [quote, setQuote] = useState('Loading...');
    const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
    const apiKey = 'aqvlHffnjePEq36mhQcUhQ==6zw8IfQeozmGabJn';

    useEffect(() => {
        axios.get(url, {
            headers: {
                'X-Api-Key': apiKey
            }
        }).then((res) => {
            setQuote(res.data[0].quote)
            
        });
    }, []);

    return(
        <section className="hero">
            <div className="image"></div>
            <div className="hero-text">
                <h4>Software Developer</h4>
                <p>Do what you can with the knowledge you're given</p>
                <p>{quote}</p>
            </div>
            <div>
            </div>
        </section>
    )
}

export default Hero;