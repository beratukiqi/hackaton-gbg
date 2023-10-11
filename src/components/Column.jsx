import { useContext } from "react";
import Task from "./Task";
import MyContext from "../main";

function Column({ backlog }) {
    const { aiData } = useContext(MyContext);

    return (
        <div className="Column__Container">
            <h2>Column Component</h2>
            {backlog && aiData.map((task, i) => <Task data={task} key={i} />)}
        </div>
    );
}

export default Column;
