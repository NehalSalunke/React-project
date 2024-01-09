const clickHandler = () => {
  alert("Hello World");
};
const Book = ({ img, title, author }) => {
  console.log(img, title, author);

  return (
    <section className="book">
      <img src={img} alt="" />
      <h1 onClick={clickHandler}>{title}</h1>
      <h4>{author}</h4>
      <button onClick={() => console.log(img, title, author)}>check</button>
    </section>
  );
};

export default Book;
