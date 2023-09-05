import React, { useEffect, useState } from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { usePlanContext } from '../contexts/PlanContext'
import axios from 'axios';
import { Country }  from 'country-state-city';

const countryCodes = ['GB', 'FR', 'DE', 'IT', 'RU', 'TR'];
const capitalCities = {
    GB: 'London',
    FR: 'Paris',
    DE: 'Berlin',
    IT: 'Rome',
    RU: 'Moscow',
    TR: 'Ankara',
};

function TypewriterEffect({ text, speed, onComplete }) {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      if (currentIndex < text.length) {
        const timeoutId = setTimeout(() => {
          setDisplayText(prevDisplayText => prevDisplayText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, speed);
  
        return () => clearTimeout(timeoutId);
      } else {
        onComplete(); // Call the callback when typewriter effect completes
      }
    }, [currentIndex, text, speed, onComplete]);
  
    return <span>{displayText}</span>;
}

function Form() {

    const navigate = useNavigate()
    const { selectedPlan, userData, updateFormData } = usePlanContext() 

    const email = userData.email;
    const plan = selectedPlan.name;

    const [url, setUrl] = useState('');
    const [apiResponse, setApiResponse] = useState(null);
    const [typewriterVisible, setTypewriterVisible] = useState(false);
    const [initialTypewriterComplete, setInitialTypewriterComplete] = useState(false);
    const [language, setLanguage] = useState('')
    const [writingStyle, setWritingStyle] = useState('')
    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [countries, setCountries] = useState([]);
    const [description, setDescription] = useState('')

    const checkUrl = (e) => {
        e.preventDefault();    
        // Show typewriter effect
        setTypewriterVisible(true);
    };

    const handleTypewriterComplete = () => {
        // Once initial typewriter effect completes, make the API call
        setInitialTypewriterComplete(true);
    
        axios.post('https://api.izabel.ai/api/check', { url: url })
          .then((response) => {
            setApiResponse(response.data.content);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
    };

    useEffect(() => {
        const filteredCountries = Country.getAllCountries().filter((country) =>
            countryCodes.includes(country.isoCode)
        );
        setCountries(filteredCountries);
    }, []);

    useEffect(() => {
        if (capitalCities.length === 0 || capitalCities[country] === undefined) {
            setCity('')
        } else {
            setCity(capitalCities[country]);
        }
    }, [country]);

    const checkout = () => {
        updateFormData(url, email, language, writingStyle, country, city, plan)
        window.location.href = selectedPlan.link        
    }

    const gotToProceed = () => {
        navigate('/proceed')
    }
 
    return (
        <>
            <div className="center">
                <div className="form-box">
                    <div className="web-url">
                        <p>Your web address</p>
                        <form>
                            <input onChange={(e) => setUrl(e.target.value)} type="text" name="" id="" placeholder='http://bcc.co.uk' />
                            <button className='BTN' onClick={(e) => checkUrl(e)}>Check</button>
                        </form>
                        {typewriterVisible && (
                            <p>
                                <TypewriterEffect
                                text="Great! I have got your website and checking it now. Please wait..."
                                speed={50}
                                onComplete={handleTypewriterComplete}
                                />
                            </p>
                        )}
                    </div>
                    {initialTypewriterComplete && (
                        <p>
                            {apiResponse === true && (
                            <TypewriterEffect text="Awesome!! I got all information about your site and ready to create engaging content for you." speed={50} onComplete={handleTypewriterComplete} />
                            )}
                            {apiResponse === false && (
                            <TypewriterEffect text="Alas! I could not check your site." speed={50} onComplete={handleTypewriterComplete} />
                            )}
                        </p>
                    )}                    
                    <p>You choose {selectedPlan.name} plan</p>
                    {
                        selectedPlan.name === "Professional" ? (
                            <>                                
                                <div className="inputs">
                                    <div className="dropdown">
                                        <label htmlFor="languages">Target Language:</label>
                                        <select name="languages" 
                                            onChange={(e) => setLanguage(e.target.value)} 
                                            value={language}
                                        >
                                            <option value="english">English</option>
                                            <option value="french">French</option>
                                            <option value="german">German</option>
                                            <option value="italian">Italian</option>
                                            <option value="russian">Russian</option>
                                            <option value="turkish">Turkish</option>
                                        </select>
                                    </div>
                                    <div className="dropdown">
                                        <label htmlFor="style">Writing Style:</label>
                                        <select name="style"
                                            onChange={(e) => setWritingStyle(e.target.value)} 
                                            value={writingStyle}
                                        >
                                            <option value="promotional" defaultValue>Promotional Style</option>
                                            <option value="formal" defaultValue>Formal Style</option>
                                            <option value="casual" defaultValue>Casual Style</option>
                                            <option value="technical" defaultValue>Technical Style</option>
                                            <option value="narrative" defaultValue>Narrative Style</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="inputs">
                                    <div className="dropdown">
                                        <label htmlFor="country">Target Country:</label>
                                        <select name="country" 
                                            onChange={(e) => setCountry(e.target.value)} 
                                            value={country}
                                        >
                                            {countries.map((country) => (
                                                <option key={country.isoCode} value={country.isoCode}>
                                                    {country.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="dropdown">
                                        <label htmlFor="city">Target City:</label>
                                        <select name="city" 
                                            onChange={(e) => setCity(e.target.value)} 
                                            value={city}
                                        >
                                            <option key={city} value={city}>
                                                {city}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div className="textarea">
                                    <label htmlFor="detail">What do you want to achieve?</label>
                                    <textarea name="detail" 
                                        placeholder='I want to market my dentist clinic to the patients in London'
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    ></textarea>
                                </div>
                            </>
                        ) : (
                            <div className="plan">
                                <p>you may upgrade to the Pro plan which includes Megaprompt allowing  highly personalized and 100% unique content tailored to your business brand or service</p>
                                <div className="button-wrapper">
                                    {/* <button className='BTN'>Skip</button> */}
                                    <button className='BTN' onClick={() => navigate('/plan')}>Upgrade to Pro</button>
                                </div>
                            </div>
                        )
                    }
                    <div className="button-wrapper">
                        <button onClick={() => checkout()} className='BTN'>Submit</button>
                        {/* <button onClick={() => gotToProceed()} className='BTN'>Go To Proceed</button> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form