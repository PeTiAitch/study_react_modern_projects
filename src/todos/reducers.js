import {
    CREATE_TODO,
    REMOVE_TODO,
    MARK_AS_COMPLETED,
    LOAD_TODOS_IN_PROGRESS,
    LOAD_TODOS_SUCCESS,
    LOAD_TODOS_FAILURE
} from './actions';

const initialState = {
    isLoading: false,
    data: []
};


export const todos = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { todo } = payload;
            return {
                 ...state, 
                 data: state.data.concat(todo)
            };
        }

        case REMOVE_TODO: {
            const { id } = payload;
            return { 
                ...state, 
                data: state.data.filter(todo => todo.id !== id)
            };
        }

        case MARK_AS_COMPLETED: {
            const updated = payload.todo;
            return {
                ...state,
                data: state.data.map(todo => {
                    if (todo.id === updated.id) {
                        return updated;
                    }

                    return todo
                })
            }
        }

        case LOAD_TODOS_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                data: payload.todos
            };
        }

        case LOAD_TODOS_IN_PROGRESS: {
            return {
                ...state,
                isLoading: true,
            };
        }

        case LOAD_TODOS_FAILURE: return {
            ...state,
            isLoading: false,
        };

        default:
            return state;
    }
}