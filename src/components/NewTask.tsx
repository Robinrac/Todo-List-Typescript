import './NewTask.css'

import { FcHighPriority } from 'react-icons/fc';
import { useRef } from "react";
import { useState } from "react";

interface INewTask {
  getTask: (task: string) => void;
}

const NewTask = (props: INewTask) => {
  const [isValidInput, setIsValidInput] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const inputValue = inputRef.current!.value.trim();

    if (inputValue.length === 0) {
      setIsValidInput(false);
      return;
    }

    setIsValidInput(true);
    inputRef.current!.value = "";

    props.getTask(inputValue);
  };

  return (
    <div id="input-content">
      <p id="author-tag">Author: Robin Raczkiewicz</p>
      <h1>TODO-LIST</h1>
      <p>Add tasks here:</p>

      <form onSubmit={handleSubmit} id="form-content">
        <input type="text" placeholder='"Make dinner..."' ref={inputRef} id="form-input"></input>
        <button type="submit" id="form-button">Add task</button>
      </form>

      {!isValidInput && <p id="input-invalid"><FcHighPriority/> Invalid Task Input</p>}
    </div>
  );
};

export default NewTask;