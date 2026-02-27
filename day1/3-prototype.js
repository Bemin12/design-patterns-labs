class Document {
  constructor(header, footer, pages, text) {
    this.header = header;
    this.footer = footer;
    this.pages = pages;
    this.text = text;
  }

  clone() {
    return new Document(...Object.values(this));
  }
}

const doc1 = new Document('header', 'footer', 20, 'some text');
const doc2 = doc1.clone();
console.log(doc2);
