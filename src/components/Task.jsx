function Task({ data }) {
    // {
    //     text: "hehehe";
    // }
    return (
        <article className="Task__Item">
            <h2>Task: {data.text}</h2>
        </article>
    );
}

export default Task;
