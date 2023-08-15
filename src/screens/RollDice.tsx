import { useParams } from 'react-router';
import './css/RollDice.css';
import typeOfDice from '../objects/TypeOfDice';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function RollDice() {

    const [nbFace, setNbFace] = useState(0);
    const [face, setFace] = useState(0);
    const { name } = useParams<{ name?: string }>();
    const dice = typeOfDice.find((dice) => {
        return dice.name === name;
    });
    const [picture, setPicture] = useState("");

    function roll() {
        if (typeof dice?.faces !== "undefined") {
            setNbFace(dice?.faces);
            setFace(Math.floor(Math.random() * nbFace) + 1);
            setPicture(`D${nbFace}F${face}`);
            console.log(picture);

        } else {
            console.error("Une erreur est survenue lors de la récupération du type de dé");
        }
    }

    return (
        <div className="RollDice">
            {typeof dice === "undefined" ? (
                <div>
                    <h1>Une erreur est survenue lors de la récupération du type de dé</h1>
                    <Link to="/">
                        <button>Retourner à la page d'accueil</button>
                    </Link>
                </div>
            ) : (
                <div className='roll'>
                    <div className='roll-container'>
                        {face > 0 ? (
                            nbFace === 2 ? (
                                <div className='face-img'>
                                    <img src={require(`../img/D${nbFace}/D${nbFace}-${face}.png`)} alt={`face ${face} du dé ${nbFace}`} />
                                </div>
                            ) : (
                                <div className='void-face'>
                                    <h1>{face}</h1>
                                </div>
                            )
                        ) : (
                            <div className='void-face'></div>
                        )}
                    </div>
                    <div className='roll-button'>
                        <button onClick={roll}>Lancer le dé</button>
                        <button onClick={() => setFace(0)}>réinitialiser le dé</button>
                        <Link to="/">
                            <button>Changer de dé</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RollDice;