import React, { useState, useEffect } from 'react';
import './app.css';
import InputField from './components/input-field/input-field';
import TaskList from './components/task-list/task-list';
import MadeWithLove from './components/footer/with-love';


const App = () => {
    const [tasks, setTasks] = useState([]),
        githubLink = "https://github.com/SnovRuslan";

    /**
     * When App component will mounted.
     * useEffect callback will check
     * if any tasks are already in localStorage.
     */
    useEffect(() => {
        if (localStorage.getItem('-app-tasks')) {
            const tasksFromStorage = JSON.parse(localStorage.getItem('-app-tasks'));
            setTasks(tasksFromStorage);
        }
    }, []);

    /**
     * Submitting user task by clicking Enter.
     * First checks if task with the same name alreay exist.
     * And then ckecing if the input value isn't just a spaces.
     * If everything all right - adding task to list
     * and renewing component state
     */
    const submitUserTask = e => {
        if (e.key === 'Enter') {
            // checking if the same task already added.
            const hasSameTask = tasks.some(item => {
                return item.text.toLowerCase() === e.target.value.trim().toLowerCase();
            });

            if (hasSameTask) {
                e.target.style.outlineColor = 'var(--red)';
                alert("The same task already in a list. Try again!");
                return;
            }

            // checking correctivity and then submitting a task.
            if (!e.target.value.trim()) {
                e.target.style.outlineColor = 'var(--red)';
            }
            else if (e.target.value.trim()) {
                const newTasks = [
                    ...tasks,
                    {
                        text: e.target.value.trim(),
                        isDone: 'no'
                    }
                ];
                setTasks(newTasks);
                localStorage.setItem('-app-tasks', JSON.stringify(newTasks));

                e.target.style.outlineColor = 'var(--green)';
                e.target.value = '';
            }
        }
    };

    /**
     * Deletes user task after clicking delete icon.
     * Filtering tasks in state and then renewing state.
     */
    const deleteUserTask = e => {
        const filtered = tasks.filter(item => {
            return item.text !== e.target.parentNode.firstChild.textContent;
        });

        setTasks(filtered);
        localStorage.setItem('-app-tasks', JSON.stringify(filtered));
    };

    /**
     * Editting user task after clicking edit icon.
     * Makes <div> with task text content editable
     * and adds eventListener to it (keydown).
     * if new task will be correct, it renews tasks in state
     */
    const editUserTask = e => {
        const taskBlock = e.target.parentNode.firstChild,
            previousBlockValue = taskBlock.textContent;

        taskBlock.contentEditable = true;
        taskBlock.focus();
        taskBlock.title = "Click enter to submit the task";

        taskBlock.addEventListener('keydown', e => {
            if (e.key === 'Enter' && e.target.textContent.trim()) {
                taskBlock.contentEditable = false;
                taskBlock.title = "Double click to mark as done";

                tasks.map(item => {
                    if (item.text === previousBlockValue) {
                        item.text = e.target.textContent.trim();
                    }
                    return true;
                });

                setTasks(tasks);
                localStorage.setItem('-app-tasks', JSON.stringify(tasks));
            }
        });
    };

    /**
     * Marking user task as done or not.
     * If it's done, it will be styled with text-decoration: line-through
     * and else the text-decoration will be set to none.
     * And then renewing state and pushing in localStorage new state
     */
    const markAsDone = e => {
        tasks.map(item => {
            if (item.text === e.target.textContent) {
                if (item.isDone === 'yes') {
                    item.isDone = 'no';
                    e.target.style.textDecoration = 'none';
                } else {
                    item.isDone = 'yes';
                    e.target.style.textDecoration = 'line-through';
                }
            }
            return true;
        });

        setTasks(tasks);
        localStorage.setItem('-app-tasks', JSON.stringify(tasks));
    };

    return (
        <>
            <header title="Simple TODO app made with React.js v.16.8">
                <a
                    href={`${githubLink}/react-todo-app`}
                    target="_blank"
                    rel="noopener noreferrer"
                >TODO</a>
            </header>

            <main>
                <InputField submitTask={submitUserTask} />
                <TaskList
                    list={tasks}
                    removeTask={deleteUserTask}
                    editTask={editUserTask}
                    markAsDone={markAsDone}
                />
            </main>

            <footer>
                <MadeWithLove githubProfile={githubLink} />
            </footer>
        </>
    );
};

export default App;
