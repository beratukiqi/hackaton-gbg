import { useState } from "react";
import Column from "./Column";
import GPTModule from "./GPTModule";

function BoardView() {
    const [popupVisible, setPopupVisible] = useState(false);

    const handlePopup = () => {
        setPopupVisible(true);
    };
    return (
        <div className="Board_View">
            {popupVisible && <GPTModule setPopupVisible={setPopupVisible} />}
            <h2>Board View Component</h2>
            <div className="Column__Wrapper">
                <Column backlog={true} />
                <Column />
                <Column />
            </div>
            <button onClick={handlePopup}>ADD STUFF</button>
        </div>
    );
}

export default BoardView;
