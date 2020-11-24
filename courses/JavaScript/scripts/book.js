export class Book {
    constructor(title, author, description, pages, currentPage, read) {
        this.title = title;
        this.author = author;
        this.description = description;
        this.pages = pages;
        this.currentPage = currentPage;
        this.read = false;
    }
    readBook(page) {
        if (page < 1 || page > this.pages) {
            return 0;
        }
        else if (page >= 1 && page < this.pages) {
            this.currentPage = page;
            return 1;
        }
        else if (page == this.pages) {
            this.currentPage = page;
            this.read = true;
            return 1;
        }
    }
}

const one = new Book("one", "openclassrooms 1", "des book one", "140", "0");
one.readBook(0);

const two = new Book("two", "openclassrooms 2", "des book two", "150", "0");
two.readBook(0);

const three = new Book("three", "openclassrooms 3", "des book three", "200", "0");
three.readBook(0);

export const books = [one, two, three];