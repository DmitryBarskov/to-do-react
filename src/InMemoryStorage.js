class InMemoryStorage {
  constructor() {
    this.todoItems = [
      { id: 1, text: 'Write tests' },
      { id: 2, text: 'Ride the bike' },
      { id: 3, text: 'Buy some milk', completed: true },
    ];
    this.nextId = 4;
  }

  save(todoItem) {
    const persisted = { id: this.nextId, ...todoItem };
    this.nextId += 1;
    this.todoItems.push(persisted);
    return persisted;
  }

  all() {
    return this.todoItems;
  }

  update(todoItem) {
    const old = this.todoItems.find((item) => item.id === todoItem.id);
    old.text = todoItem.text;
    old.completed = todoItem.completed;
  }
}

export default InMemoryStorage;
