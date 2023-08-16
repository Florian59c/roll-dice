import { Link } from 'react-router-dom';
import './css/NotFound.css';

function NotFound() {
    return (
        <div className="NotFound">
            <div>
                <h1>404</h1>
                <h1>La page n'a pas été trouvée !</h1>
            </div>
            <Link to="/">
                <button>Retourner à la page d'accueil</button>
            </Link>
        </div>
    );
}

export default NotFound;