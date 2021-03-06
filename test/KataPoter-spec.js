var Basket = require('../src/Basket.js').Basket;
var Book = require('../src/Book.js').Book;

describe('Basket', function() {
  var basket;
  var firstBook;
  var secondBook;
  var thirdBook;
  var fourthBook;

  beforeEach(function() {
    basket = new Basket();
    firstBook = new Book("First book");
    secondBook = new Book("Second book");
    thirdBook = new Book("Third book");
    fourthBook = new Book("Fourth book");
  });

  describe('empty', function() {
    it('the price is 0 €', function() {
      expect(basket.price()).toBe(0);
    });
  });

  describe('when "first book" is added', function() {
    beforeEach(function() {
      basket.addBook(firstBook);
    });

    it('the price is 8 €', function() {
      expect(basket.price()).toBe(8);
    });
  });

  describe('when the basket has "first book" twice', function() {
    beforeEach(function() {
      basket.addBook(firstBook);
      basket.addBook(firstBook);
    });
    it('the price is 16 €', function() {
      expect(basket.price()).toBe(16);
    });
  });

  describe('when the basket has "first book" thrice', function() {
    beforeEach(function() {
      basket.addBook(firstBook);
      basket.addBook(firstBook);
      basket.addBook(firstBook);
    });
    it('the price is 24 €', function() {
      expect(basket.price()).toBe(24);
    });
  });

  describe('when the basket has "first" and "second" books', function() {
    beforeEach(function() {
      basket.addBook(firstBook);
      basket.addBook(secondBook);
    });

    it('the price has a 5% discount (15.2 €)', function() {
      expect(basket.price()).toBe(15.2);
    });
  });

  describe('when the basket has "first", "second" and "third" books', function() {
    beforeEach(function() {
      basket.addBook(firstBook);
      basket.addBook(secondBook);
      basket.addBook(thirdBook);
    });

    it('the price has a 10% discount (21.6 €)', function() {
      expect(basket.price()).toBe(21.6);
    });
  });

  describe('when the basket has "first", "first" and "second" books', function() {
    beforeEach(function() {
      basket.addBook(firstBook);
      basket.addBook(firstBook);
      basket.addBook(secondBook);
    });

    it('the price has a 5% discount of 2 books and 0% for 1 book (23.2)', function() {
      expect(basket.price()).toBe(23.2);
    });
  });
  describe('when the basket has 2 "first" books and 2 "second" books', function() {
    beforeEach(function() {
      basket.addBook(firstBook);
      basket.addBook(firstBook);
      basket.addBook(secondBook);
      basket.addBook(secondBook);
    });

    it('the price has to apply twice 5% of discount(30.4)', function() {
      expect(basket.price()).toBe(30.4);
    });
  });

  describe('when the basket has a "first", "second", "third" and "fourth" books', function() {
    beforeEach(function() {
      basket.addBook(firstBook);
      basket.addBook(secondBook);
      basket.addBook(thirdBook);
      basket.addBook(fourthBook);
    });

    it('the price has to apply 20% of discount(30.4)', function() {
      expect(basket.price()).toBe(25.6);
    });
  });

  describe('when the basket has a "first", "second", "third", "fourth" and "fifth" books', function() {
    beforeEach(function() {
      basket.addBook(firstBook);
      basket.addBook(secondBook);
      basket.addBook(thirdBook);
      basket.addBook(fourthBook);
      var fifthBook = new Book("Fifth book");
      basket.addBook(fifthBook);
    });

    it('the price has to apply 25% of discount(30)', function() {
      expect(basket.price()).toBe(30);
    });
  });

  describe('when the basket has 2 "first" books, 2 "second" books, 2 "third" books, 1 "fourth" book and 1 "fifth" book', function() {
    beforeEach(function() {
      basket.addBook(firstBook);
      basket.addBook(firstBook);
      basket.addBook(secondBook);
      basket.addBook(secondBook);
      basket.addBook(thirdBook);
      basket.addBook(thirdBook);
      basket.addBook(fourthBook);
      var fifthBook = new Book("Fifth book");
      basket.addBook(fifthBook);
    });

    it('the price has to apply twice 20% of discount(51.2)', function() {
      expect(basket.price()).toBe(51.2);
    });
  });
});
