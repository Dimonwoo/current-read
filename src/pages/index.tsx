import BookList from "components/BookList";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl text-center font-bold mb-4">My Reading List</h1>
      <BookList />
    </div>
  );
}
