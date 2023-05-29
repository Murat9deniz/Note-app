import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoManager = ({ children }) => {

  const [todoes, setTodoes] = useState([]);

  const handleOnCheck = (id) => {
    setTodoes((prev) => {
      const newTodoes = [...prev];
      const index = newTodoes.findIndex((todo) => todo.id === id);
      newTodoes[index] = {
        ...newTodoes[index],
        isDone: !newTodoes[index].isDone
      };
      return newTodoes;
    });
  };

  const handleOnDelete = (id) => {
    setTodoes((prev) => prev.filter((todo) => todo.id != id));
  };

  const randomColor = () => ({
    red: Math.random() * 256,
    green: Math.random() * 256,
    blue: Math.random() * 256
  });

  const genarateNote = note => {
    const newTodo = {
      id: Math.round(Math.random() * 1000),
      content: note,
      color: randomColor(),
      isDone: false
    };
    setTodoes([...todoes, newTodo]);
  };
  return (
    <TodoContext.Provider
      value={{
        todoes,
        handleOnCheck,
        handleOnDelete,
        genarateNote
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoManager;
