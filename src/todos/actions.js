export const CREATE_TODO = 'CREATE_TODO';

export const createTodo = text => {
    return {
        type: CREATE_TODO,
        payload: { text }
    }
};

export const REMOVE_TODO = 'REMOVE_TODO';

export const removeTodo = text => {
    return {
        type: REMOVE_TODO,
        payload: { text }
    }
};

export const MARK_AS_COMPLETED = 'MARK_AS_COMPLETED';

export const markAsCompleted = text => ({
    type: MARK_AS_COMPLETED,
    payload: { text }
});