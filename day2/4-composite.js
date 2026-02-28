class Page {
  constructor(pageNum, text) {
    this.pageNum = pageNum;
    this.text = text;
  }

  display() {
    console.log(`   Page ${this.pageNum}: ${this.text}`);
  }
}

class Book {
  constructor(title) {
    this.title = title;
    this.pages = [];
  }

  add(page) {
    this.pages.push(page);
  }

  display() {
    console.log(` Book: ${this.title}`);
    this.pages.forEach((page) => page.display());
  }
}

class Box {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  add(book) {
    this.books.push(book);
  }

  display() {
    console.log(`Box: ${this.name}`);
    this.books.forEach((book) => book.display());
  }
}

// Usage

const p1 = new Page(1, 'Intro');
const p2 = new Page(2, 'Chapter 1');

const book1 = new Book('JS Design Patterns');
book1.add(p1);
book1.add(p2);

const book2 = new Book('Advanced JS');
book2.add(new Page(1, 'Closures'));

const bigBox = new Box('Main Storage');
bigBox.add(book1);
bigBox.add(book2);

bigBox.display();
