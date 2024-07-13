interface Book {
    title : string;
    genre : 'fiction' | 'non-fiction' | 'educational';
    price : number;
}

let books: Book[] = [
    { title: "The Great Gatsby", genre: "fiction", price: 320 },
    { title: "War and Peace", genre: "fiction", price: 250 },
    { title: "Economics 101", genre: "educational", price: 480 },
    { title: "In Cold Blood", genre: "non-fiction", price: 300 },
    { title: "The Catcher in the Rye", genre: "fiction", price: 400 }
];

function filerGenrePrice(books: Book[], price: number):Book[] {
    return books.filter(book=>book.genre==='fiction'&&book.price>price)
}

function discountBook10(books:Book[]):Book[] {
    return books.map(book=>({...book,price:book.price*0.9}));
}

let filterBook = filerGenrePrice(books, 300);
let discountBooks = discountBook10(filterBook);

console.log(discountBooks);