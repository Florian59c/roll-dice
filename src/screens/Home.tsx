import './css/Home.css';
import TypeOfDice from '../objects/TypeOfDice';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Home">
            <h1>Choisissez le type de dé que vous voulez lancer</h1>
            <div className='dice-list'>
                {TypeOfDice.map((dice, index) => {
                    return (
                        <div className='dice' key={index}>
                            <p>Dé à {dice.faces} faces :</p>
                            <div>
                                <Link to={`/roll-dice/${dice.name}`}>
                                    <img src={dice.img} alt={`Dé à ${dice.faces} faces`} />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Home;