import React, { useEffect, useState } from 'react'
import axios from 'axios';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Home() {

    const navigate = useNavigate()
    const [url, setUrl] = useState('')
    const [loading, setLoading] = useState(false);
    const [content, setContent] = useState('')
    const [cursorVisible, setCursorVisible] = useState(true);

    const getContent = () => {
        setLoading(true);
        axios.post('https://api.izabel.ai/api/instagram', { url: url })
        .then((response) => {
            const text = response.data.content.trim();
            let index = -1; 
            const interval = setInterval(() => {
                setContent((prevText) => prevText + text[index]);
            index++;
            if (index === text.length - 1) {
                clearInterval(interval);
                setLoading(false);
            }
            }, 30);
        })
        .catch((error) => {
          console.error('Error:', error);
        })
        .finally(() => {
            setLoading(false);
        });
    }

    useEffect(() => {
        const cursorInterval = setInterval(() => {
          setCursorVisible((prevCursorVisible) => !prevCursorVisible);
        }, 1000); // Adjust blinking speed here (500ms means the cursor blinks every half-second)
    
        return () => {
          clearInterval(cursorInterval);
        };
      }, []);

    return (
        <>
            <div className="wrapper center">
                <div className="input-wrapper">
                    <div className="form-wrapper center">
                        <input onChange={(e) => setUrl(e.target.value)} type="text" placeholder='website URL...' />
                        <button onClick={() => getContent()} >
                            {loading ? <div className="loader"></div> : 'Show me what you can do'}
                        </button>
                    </div>
                    <div className="output">
                        { content ? (
                            <>
                                <span>{content}</span>
                                {cursorVisible && <div className="cursor">|</div>}
                            </>
                        )
                        :null}
                    </div>
                    <button onClick={() => navigate('plan')}></button>
                </div>
            </div>
        </>
    )
}

export default Home