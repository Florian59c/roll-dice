import { useParams } from 'react-router';
import './css/RollDice.css';
import typeOfDice from '../objects/TypeOfDice';

function RollDice() {

    const { name } = useParams<{ name?: string }>();

    const dice = typeOfDice.find((dice) => {
        return dice.name === name;
    })

    return (
        <div className="RollDice">
            <p>{dice?.name}</p>
        </div>
    );
}

export default RollDice;