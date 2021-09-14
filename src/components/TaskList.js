import Task from "./Task";

const taskList = [
    { name: "Hit the gym", progress: 2, icon: '/img/gym.png' },
    { name: "Pay bills", progress: 2, icon: '/img/bill.png' },
    { name: "Meet George", progress: 1, icon: '/img/dance.png' },
    { name: "Buy eggs", progress: 1, icon: '/img/eat.png' },
    { name: "Read a book", progress: 0, icon: '/img/book.png' },
    { name: "Organize office", progress: 0, icon: '/img/organize.png' }
]

const TaskList = () => {
    return (
        <ul style={{ listStyle: "none" }}>
            <Task task={taskList[0]} />
            <Task task={taskList[1]} />
            <Task task={taskList[2]} />
            <Task task={taskList[3]} />
            <Task task={taskList[4]} />
            <Task task={taskList[5]} />
        </ul>
    );
}

export default TaskList;