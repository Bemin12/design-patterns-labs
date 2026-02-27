class Pizza {
  constructor(builder) {
    this.size = builder.size;
    this.toppings = builder.toppings;
  }
}

class PizzaBuilder {
  constructor() {
    this.size = 'small';
    this.toppings = [];
  }

  setSize(size) {
    this.size = size;
    return this;
  }

  addTopping(topping) {
    this.toppings.push(topping);
    return this;
  }

  build() {
    return new Pizza(this);
  }
}

const pizzaBuilder = new PizzaBuilder()
  .setSize('medium')
  .addTopping('Pepperoni')
  .addTopping('Mushrooms')
  .build();

console.log(pizzaBuilder);
