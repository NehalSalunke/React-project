import { Books } from "./data";
const BookList = ({ Book }) => {
  return (
    <section className="booklist">
      {Books.map((book, index) => (
        <Book key={index} {...book}></Book>
      ))}
    </section>
  );
};
export default BookList;

// const BookList = () => {
//   return (
//     <>
//       <section className="booklist">
//         {Books.map(({ img, title, author }, index) => (
//           <div key={index} className="book">
//             <img src={img}></img>
//             <h1>title : {title}</h1>
//             <p>Author: {author}</p>
//           </div>
//         ))}
//       </section>
//     </>
//   );
// };
// export default BookList;
