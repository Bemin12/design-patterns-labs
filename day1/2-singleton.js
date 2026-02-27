class Counter {
  constructor() {
    if (Counter.instance) return Counter.instance;
    Counter.instance = this;
    this.active = (this.active || 0) + 1;
  }
}

const i1 = new Counter();
const i2 = new Counter();
const i3 = new Counter();
console.log(i1.active);
console.log(i2.active);
console.log(i3.active);
