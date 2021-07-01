class LocalStorage {
  constructor(storage) {
    this.storage = storage;
  }

  save(todoItem) {
    const todoItems = this.all();
    const nextId = parseInt(this.storage.getItem('todoItemNextId'), 10)
        || Math.max(0, ...todoItems.map((item) => item.id));

    const newTodoItems = [
      ...todoItems,
      { completed: false, ...todoItem, id: nextId + 1 },
    ];

    this.storage.setItem('todoItemNextId', nextId + 1);
    this.storage.setItem('todoItems', JSON.stringify(newTodoItems));
  }

  all() {
    return JSON.parse(this.storage.getItem('todoItems')) || [];
  }

  update(todoItem) {
    const newTodoItems = this.all().map((oldItem) => {
      if (oldItem.id !== todoItem.id) {
        return oldItem;
      }

      return { ...oldItem, ...todoItem };
    });

    this.storage.setItem('todoItems', JSON.stringify(newTodoItems));
  }
}

export default LocalStorage;
