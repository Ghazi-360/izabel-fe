import React from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Form() {

    const navigate = useNavigate()

    return (
        <>
            <div className="center">
                <div className="form-box">
                    <div className="web-url">
                        <p>Your web address</p>
                        <form>
                            <input type="text" name="" id="" placeholder='http://bcc.co.uk' />
                            <button className='BTN'>Submit</button>
                        </form>
                        <p>Great I have got your website and checking it now. Please wait...</p>
                    </div>
                    <p>Awesome!! I got all information about your site and ready to create engaging content for you.</p>
                    <div className="plan">
                        <p>You choose beginner plan</p>
                        <p>you may upgrade to the Pro plan which includes Megaprompt allowing  highly personalized and 100% unique content tailored to your business brand or service</p>
                        <div className="button-wrapper">
                            <button className='BTN'>Skip</button>
                            <button className='BTN'>Upgrade to Pro</button>
                        </div>
                    </div>
                    <div className="inputs">
                        <div className="dropdown">
                            <label for="languages">Target Language:</label>
                            <select name="languages" id="languages">
                                <option value="english">English</option>
                                <option value="french">French</option>
                                <option value="german">German</option>
                                <option value="italian">Italian</option>
                                <option value="russian">Russian</option>
                                <option value="turkish">Turkish</option>
                            </select>
                        </div>
                        <div className="dropdown">
                            <label for="etyle">Writing Style:</label>
                            <select name="style" id="style">
                                <option value="promotional" selected>Promotional</option>
                            </select>
                        </div>
                    </div>
                    <div className="inputs">
                        <div className="dropdown">
                            <label for="country">Target Country:</label>
                            <select name="country" id="country">
                                <option value="english">UK</option>
                                <option value="french">France</option>
                                <option value="german">Germany</option>
                                <option value="italian">Italy</option>
                                <option value="russian">Russia</option>
                                <option value="turkish">Turkey</option>
                            </select>
                        </div>
                        <div className="dropdown">
                            <label for="country">Target Country:</label>
                            <select name="country" id="country">
                                <option value="london">London</option>
                                <option value="paris">Paris</option>
                                <option value="berlin">Berlin</option>
                                <option value="rome">Rome</option>
                                <option value="moscow">Moscow</option>
                                <option value="istanbul">Istanbul</option>
                            </select>
                        </div>
                    </div>
                    <div className="textarea">
                        <label for="detail">What do you want to achieve?</label>
                        <textarea id="detail" name="detail" placeholder='I want to market my dentist clinic to the patients in London'>

                        </textarea>
                        <div className="button-wrapper">
                            <button onClick={() => navigate('/payment')} className='BTN'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form