import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { usePlanContext } from '../contexts/PlanContext';

function Account() {

    const { userData } = usePlanContext() 

    const email = userData.email;

    const [userDocs, setUserDocs] = useState([]);

    useEffect(() => {
        axios.post('https://api.izabel.ai/api/get-user-docs', { email: email })
        .then((response) => {
            setUserDocs(response.data.docs); // Assuming the API response structure matches the data you provided
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }, []);

    return (
        <>
            <div className="wrapper center">
                <div className="account-wrapper">
                    <table>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Plan</th>
                                <th>Created at</th>
                                <th>Status</th>
                                <th>File</th>
                            </tr>
                        </thead>
                        <tbody>
                        {userDocs.map((doc, index) => (
                            <tr key={index}>
                                <td>{doc.email}</td>
                                <td>{doc.plan}</td>
                                <td>{doc.created_at}</td>
                                <td>{doc.status}</td>
                                <td>
                                    {doc.download_link && (
                                    <a href={doc.download_link} target="_blank" rel="noopener noreferrer">
                                        Download
                                    </a>
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Account