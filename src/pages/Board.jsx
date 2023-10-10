import { useNavigate } from "react-router";
import BoardView from "../components/BoardView";

function Board() {
    const navigate = useNavigate();
    return (
        <>
            <h1>BOARD PAGE</h1>
            <BoardView />
            <button onClick={() => navigate("/")}>TO Home</button>
        </>
    );
}

export default Board;
