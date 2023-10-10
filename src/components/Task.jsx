function Task({ data }) {
    return (
        <article className="Task__Item">
            {data && <h2>Task: {data}</h2>}
        </article>
    );
}

export default Task;
