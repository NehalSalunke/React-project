import Book from "./Book";
import BookList from "./BookList";

function App() {
  return (
    <div>
      <BookList Book={Book} />
    </div>
  );
}

export default App;