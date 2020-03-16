import React from "react";

const BookRow = props => {
  const book = props.book;
  // let authorName = "";
  // for (var i = 0; i < book.authors.length; i++) {
  //   if (i !== book.authors.length - 1) {
  //     authorName += book.authors[i].name + " ,";
  //   } else {
  //     authorName += book.authors[i].name;
  //   }
  // }

  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.authors.map(author => author.name).join(" ,")}</td>
      <td>
        <button className="btn" style={{ backgroundColor: book.color }} />
      </td>
    </tr>
  );
};

export default BookRow;
