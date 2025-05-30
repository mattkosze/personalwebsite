import { Books } from "./Bookshelf"

export type Book = {
    title: string;
    cover: string;
    author: string;
    date: string;
    spineColour: string;
    textColour: string;
    rating: number;
    description: string;
}

function BookCard({ book } : {book: Book}) {
    const descriptionSplit = book.description.split('\n');

    return (
        <div>
            <hr className="reviewDivider"/>
            <div className="bookCard">
                <img className="bookCardCover" src={book.cover} alt={`${book.title} cover`} />
                <div className="bookCardText">
                    <h2 className="bookCardTextTitle">{book.title}</h2>
                    <p className="bookCardTextAuthor">{book.author}</p>
                    <div className="bookCardTextInfo">
                        <p style={{margin: 0}}>Rating: {book.rating}/5</p>
                        <hr style={{margin: 0}}/>
                        <p style={{margin: 0}}>Read: {book.date}</p>
                    </div>
                    <div className="bookCardTextDesc">
                        {descriptionSplit.map((paragraph, index) => (
                            <p key={index} style={{marginTop: index === 0 ? 0 : '0.5rem'}}>
                                {paragraph}
                            </p>
                        ))}
                    </div>                
                </div>
            </div>
        </div>
    )
}

export function BookReviews() {
    return (
        <div className="reviewContainer">
            {Books.map((book) => <BookCard book={book} key={book.title}/>)}
        </div>
    )
}