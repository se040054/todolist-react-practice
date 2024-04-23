import TodoItem from './TodoItem';

const TodoCollection = ({
  todos,
  onChangeMode,
  onSave,
  onDelete,
  onToggleDone,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleDone={(id) => onToggleDone?.(id)}
            onChangeMode={({ id, isEdit }) => {
              onChangeMode?.({ id, isEdit });
            }}
            onSave={({ id, title }) => {
              onSave?.({ id, title });
            }}
            onDelete={(id) => onDelete?.(id)}
          ></TodoItem>
        );
      })}
    </div>
  );
};

export default TodoCollection;
