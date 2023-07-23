import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

//import Sort from "./Sort"
const Books = () => {
  const [books, setbooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setbooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  console.log(books);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
  <wrapper>
      <div className="books">
        {books.map((book) => (
          <div key={book.id} className="book">
            <img src={book.cover} alt="" />
            <h2>{book.title}</h2>
            <p>{book.desc}</p>
            <span>${book.price}</span>
            <button className="delete" onClick={() => handleDelete(book.id)}>Delete</button>
            <button className="update">
              <Link
                to={`/update/${book.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>

     
  </wrapper>

  );
};
const Wrapper = styled.section
.books {
  display: flex;

  .book {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    img {
      width: 200px;
      height: 300px;
      object-fit: cover;
    }

    button {
      padding: 3px 6px;
      background-color: white;
      cursor: pointer;
    }
    .delete {
      border: 1px solid rgb(245, 191, 191);
      color: rgb(242, 100, 100);
    }
    .update {
      border: 1px solid rgb(204, 204, 243);
      color: rgb(139, 139, 234);
    }
  }
}
export default Books;


