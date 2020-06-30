/*Create a class library and implement the following : constructor must take booklist as argument getBookList(); 
issueBook(bookname , user);
returnBook();*/

class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }
    getBookList() {
        this.bookList.forEach(element => {
            console.log(element)

        });
    }
    issueBook(bookname, user) {
        if (this.issuedBooks[bookname] == undefined) {
            this.issuedBooks[bookname] = user;
            console.log(`book has been isuued`)
        } else {
            console.log(` already issued`)
        }
    }
    returnBook(bookname) {
        delete this.issuedBooks[bookname];
        console.log(`book has been returned`)
    }
}

libObj = new Library(['python', 'java', 'ruby', 'c#']);
libObj.getBookList();
libObj.issueBook('python', 'mary');
libObj.issueBook('python', 'mary');
libObj.returnBook('python');
libObj.issueBook('python', 'mary');