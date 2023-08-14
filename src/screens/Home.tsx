import './css/Home.css';
import TypeOfDice from '../objects/TypeOfDice';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="Home">
            <h1>Choisissez le type de dé que vous voulez lancer</h1>
            {TypeOfDice.map((dice) => {
                return (
                    <Link to={`/roll-dice/${dice.name}`}>
                        <button>{dice.name}</button>
                    </Link>
                )
            })}
        </div>
    );
}

export default Home;