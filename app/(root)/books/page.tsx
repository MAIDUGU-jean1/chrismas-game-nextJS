
const  page = async() => {
  const res = await fetch("http://localhost:3000/api/books");
  const books = await res.json();

  return (
    <div>
      <h1> Book List </h1>
        <div>{JSON.stringify(books, null , 2)}</div>
    </div>
  )
}

export default page
