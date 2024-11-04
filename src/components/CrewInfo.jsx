import { useParams, useLocation, Link } from "react-router-dom";
import vent from '../assets/zzz.gif';
import "../App.css";

function CrewInfo() {
    const { state } = useLocation();
    return (
        <div className="whole-page">
            <h1>Crewmate: {state.name}</h1>
            <h2>Color: {state.color}</h2>
            <div className="gallery-image">
                <img src={vent} alt="" />
            </div>
            
            <br />
            <Link to={`/gallery/edit/${state.id}`} state={state}>
                <button>Let's modify this crewmate!</button>
            </Link>
        </div>
    );
}

export default CrewInfo;