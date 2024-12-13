import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './index.css';

function Profile() {
    const API_URL = 'https://rickandmortyapi.com/api/character';
    const { id } = useParams();
    const [character, setCharacter] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
        fetch(`${API_URL}/${id}`)
            .then((response) => response.json())
            .then((data) => setCharacter(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, [id]);
  
    if (!character) return <div>Loading...</div>;
  
    return (
        <div className="profile-container">
            <div className="profile-card">
                <h1>{character.name}</h1>
                <img
                    src={character.image}
                    alt={character.name}
                    style={{ width: '150px', borderRadius: '10%' }}
                />
                <p><strong>Species:</strong> {character.species}</p>
                <p><strong>Status:</strong> {character.status}</p>
                <p><strong>Gender:</strong> {character.gender}</p>
                <p><strong>Origin:</strong> {character.origin.name}</p>
                <p><strong>Location:</strong> {character.location.name}</p>
            </div>
            <button className="backButton" onClick={() => navigate('/')}>
                Back
            </button>
        </div>
    );
}

export default Profile;
