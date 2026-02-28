class ToDoState {
  nextState() {}
  display() {}
}

class InProgressState extends ToDoState {
  nextState() {
    return new ReadyForReviewState();
  }

  display() {
    return 'State: In Progress';
  }
}

class ReadyForReviewState extends ToDoState {
  nextState() {
    return new DoneState();
  }

  display() {
    return 'State: Ready for Review';
  }
}

class DoneState extends ToDoState {
  nextState() {
    return this;
  }

  display() {
    return 'State: Done';
  }
}

class ToDo {
  constructor(title) {
    this.title = title;
    this.state = new InProgressState();
  }

  transition() {
    this.state = this.state.nextState();
  }

  displayStatus() {
    console.log(`Task: ${this.title}`);
    console.log(this.state.display());
  }
}

// Usage
const task = new ToDo('Design patterns lab');

task.displayStatus();

task.transition();
task.displayStatus();

task.transition();
task.displayStatus();

task.transition();
task.displayStatus();
