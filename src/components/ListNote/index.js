import Note from "../Note";
import "./listNote.css"
import { useContext } from "react";
import { TodoContext } from "../../context/todostore";

const ListNote = () => {
  const { todoes: items } = useContext(TodoContext)
  return (
    <div className="list-note">
      {items.map(({id, content, color, isDone}) => (
        <Note
          key={id}
          id={id}
          text={content}
          color={color}
          isDone={isDone}
        />
      ))}
    </div>
  );
};

export default ListNote;
