export type Book = {
    title: string;
    cover: string;
    author: string;
    date: string;
    spineColour: number;
    textColour: number;
    rating: number;
    description: string;
}

export function BookCard({ book } : {book: Book}) {
    return (
        <>
            <div className="book-card">
                <img className="book-cover" src={book.cover} alt={`${book.title} cover`} />
                <div>
                    <h2>{book.title}</h2>
                    <p>{book.description}</p>
                </div>
            </div>
        </>
    )
}

