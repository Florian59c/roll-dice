import { useParams } from 'react-router';
import './css/RollDice.css';
import typeOfDice from '../objects/TypeOfDice';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import TypeOfDiceInterface from '../interfaces/TypeOfDiceInterface';

function RollDice() {

    const { name } = useParams<{ name?: string }>();
    const dice: TypeOfDiceInterface | undefined = typeOfDice.find((dice) => {
        return dice.name === name;
    });
    const [face, setFace] = useState<number>(0);
    const [isPlay, setIsPlay] = useState<boolean>(false);

    function roll() {
        if (typeof dice?.faces !== "undefined") {
            setFace(Math.floor(Math.random() * dice.faces) + 1);
            setIsPlay(true);
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
                                <h1>Le résultat du dé est :</h1>
                                {/* <h1>Le résultat du dé est : {face}</h1> */}
                                <div className='face-img'>
                                    {/* au clic sur le bouton, la video se lance automatiquement et sans son. Losrqu'elle se termine, isplay repasse a false, et la video est remplacé par l'image avec le résultat du lancé du dé */}
                                    {isPlay ? (
                                        <video
                                            src={require(`../video/Many-roll-dice.mp4`)}
                                            onEnded={() => { setIsPlay(false) }}
                                            autoPlay
                                            muted
                                        ></video>
                                    ) : (
                                        <img
                                            src={require(`../img/D${dice.faces}/D${dice.faces}-${face}.png`)}
                                            alt={`face ${face} du dé ${dice.faces}`}
                                        />
                                    )}
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
        </div >
    );
}

export default RollDice;