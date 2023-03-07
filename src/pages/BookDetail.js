import React from "react";
import {useParams} from "react-router";

const books = {
    bk2023 : { title:'IT CookBook, 알기 쉽게 해설한 자바 프로그래밍(10판)'
                , author:'김충석', price:'30,000원', pubdate:'2023-02-12' },
    bk0307 : { title:'실전에서 바로 쓰는 Next.js', author:'박수현', price:'판매가 :', pudate:'2023-01-20' },
}

const BookDetail = () => {
    const { id } = useParams();
    const book = books[id];
    return (
        <div>
            <h2>Book Detail</h2>
            <p>{book.title}</p>
            <p>{book.author} {book.price} {book.pubdate}</p>
        </div>
    );
}

export default BookDetail;