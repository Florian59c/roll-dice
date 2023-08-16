import { useParams } from 'react-router';
import './css/RollDice.css';
import typeOfDice from '../objects/TypeOfDice';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TypeOfDiceInterface from '../interfaces/TypeOfDiceInterface';

function RollDice() {

    const [nbFace, setNbFace] = useState<number>(0);
    const [face, setFace] = useState<number>(0);
    const { name } = useParams<{ name?: string }>();
    const dice: TypeOfDiceInterface | undefined = typeOfDice.find((dice) => {
        return dice.name === name;
    });

    function roll() {
        if (typeof dice?.faces !== "undefined") {
            setNbFace(dice?.faces);
            setFace(Math.floor(Math.random() * nbFace) + 1);
        } else {
            console.error("Une erreur est survenue lors de la récupération du type de dé");
        }
    }

    return (
        <div className="RollDice">
            {typeof dice === "undefined" ? (
                <div className='error-dice'>
                    <h1>Une erreur est survenue lors de la récupération du type de dé</h1>
                    <Link to="/">
                        <button>Retourner à la page d'accueil</button>
                    </Link>
                </div>
            ) : (
                <div className='roll'>
                    <div className='roll-container'>
                        {face > 0 ? (
                            <div>
                                <h1>Le résultat du dé est : {face}</h1>
                                <div className='face-img'>
                                    <img src={require(`../img/D${nbFace}/D${nbFace}-${face}.png`)} alt={`face ${face} du dé ${nbFace}`} />
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h1>Aucun lancé</h1>
                                <div className='void-face'></div>
                            </div>
                        )}
                    </div>
                    <div className='roll-button'>
                        <div>
                            <button onClick={roll}>Lancer le dé</button>
                        </div>
                        <div>
                            <button onClick={() => setFace(0)}>Réinitialiser le dé</button>
                        </div>
                        <div>
                            <Link to="/">
                                <button>Changer de dé</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default RollDice;