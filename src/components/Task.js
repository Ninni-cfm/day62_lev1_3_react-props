const progressIcons = [
    '/img/no.png',
    '/img/doing.png',
    '/img/check.png'
];
const progressTextStyle = [
    { textDecoration: "underline" },
    { textDecoration: "none" },
    { textDecoration: "line-through" },
];

const Task = (props) => {

    const progress = props.task.progress;

    return (
        <li>
            < img src={progressIcons[progress]} alt="" />
            <span style={progressTextStyle[progress]}> {props.task.name} </span>
            <img src={props.task.icon} alt="" />
        </li >
    );
}

export default Task;