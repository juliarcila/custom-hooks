import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";


const initialState = [
   
];

const init = () => {
    return JSON.parse( localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
    
    const [todos, dispatch] = useReducer(todoReducer, initialState, init )

    const handleNewTodo = (todo) =>  {
        const accion = {
            type: '[TODO] add todo',
            payload: todo,
        };

        dispatch( accion )
    };

    const handleRemoveTodo = ( id ) => {

        // console.log(id);

        dispatch({
            type: '[TODO] remove todo',
            payload: id,
        })
    };

    const handleToggleTodo = (id) => {
        
        dispatch({
            type: '[TODO] toggle todo',
            payload: id,
        })
    };

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const todosCount = todos.length;

    const pendingTodosCount = todos.filter(todo => todo.done === false).length;
    

    return ({
        todos,
        handleNewTodo,
        handleRemoveTodo,
        handleToggleTodo,
        todosCount,
        pendingTodosCount,
    });
}
