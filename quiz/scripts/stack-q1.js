class PStack {
  #id;
  constructor() {
    this.#id = 1;
    this._persons = [];
  }

  showId() {
    return this.#id;
  }

  set_persons(persons) {
    this._persons = persons;
  }

  get_persons() {
    return this._persons;
  }
}

class PStackImpl extends PStack {
  constructor() {
    super();
  }

  push(p) {
    return this._persons.push(p)
  }

  pop() {
    return this._persons.pop().age
  }
}

let pstack = new PStackImpl();
pstack.set_persons([{name: 'Jojo', age: 21}, {name: 'Gabi', age: 29}]);
pstack.push({name: 'Dein', age: 19});
console.log(pstack.pop());
console.log(pstack.pop());
console.log(pstack.get_persons());
