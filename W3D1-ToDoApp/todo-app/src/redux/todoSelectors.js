import { VISIBILITY_FILTERS } from "../filters";

export const getTodoState = (store) => store.todos;

export const getTodoList = (store) => getTodoState(store) ? getTodoState(store).allIds : [];

export const getTodoById = (store, id) =>getTodoState(store) ? { ...getTodoState(store).byIds[id], id } : {};

export const getAllTodos = (store) =>getTodoList(store).map((id) => getTodoById(store, id))

export const getToDosByVisibiltyFilter = (store, visibilityFiliter) => {
  const allTodos = getAllTodos(store);
  switch (visibilityFiliter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter((todo) => todo.completed);

    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter((todo) => !todo.completed);
    case VISIBILITY_FILTERS.ALL:

    default:
      return allTodos;
  }
};
