import "./style.css";

const Buttons = ({ tasks, hideDone }) => (
    <div className="section__BlockButtons">
        {tasks.length > 0 && (
            <>
                <button className="section__button">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="section__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;