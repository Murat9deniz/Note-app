import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { TodoContext } from "../../context/todostore";

const Note = ({ text, color, isDone, id }) => {
  const { handleOnCheck, handleOnDelete } = useContext(TodoContext)
  return (
    <div
      style={{
        color: "white",
        backgroundColor: `rgb(${color.red},${color.green},${color.blue})`,
        width: "90%",
        height: 45,
        margin: "25px auto",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "20px",
        paddingLeft: "10px",
        textDecoration: isDone ? "line-through" : "none"
      }}
    >
      {text}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: 60
        }}
      >
        <AiFillCheckCircle
          style={{
            cursor: "pointer"
          }}
          onClick={() => handleOnCheck(id)}
        />
        <AiFillDelete
          style={{
            cursor: "pointer"
          }}
          onClick={() => handleOnDelete(id)}
        />
      </div>
    </div>
  );
};

export default Note;
