import books from "@/app/api/db";

export async function PUT(
    request: Request,
    context: { params: { id: string } }
){
    const id = +context.params.id;
    const book = await request.json();
    const Index = books.findIndex((b) => b.id === id);

    if (Index === -1) {
        return new Response("Book not found", { status: 404 });
    }

    books[Index] = book;
    return Response.json(books);
}

export async function DELETE(
    request: Request,
    context: { params: { id: string } }
){
    const id = +context.params.id;
    const Index = books.findIndex((b) => b.id === id);

    if (Index === -1) {
        return new Response("Book not found", { status: 404 });
    }

    books.splice(Index, 1);
    return Response.json(books);
}