import { Bookshelf } from "../components/Bookshelf"
import { BookReviews } from "../components/BookReviews"

function getBooks() {
    return;
}

export function Reading() {
    return (
        <div className="readingContent">
            <Bookshelf />
            <BookReviews />
        </div>
    )
}