import { BookCard } from "./BookCard"
import type { Book } from "./BookCard"

const Books = [
    {title: "Venture Deals", cover: "bookCovers/ventureDealsCover.jpg", author: "Brad Feld", date: "2025", spineColour: "#8B7355", textColour: "#F5F5DC", rating: 4, description: "Good book; scratches the surface of the financial side of startups!"},
    {title: "The Wealth of Nations", cover: "bookCovers/ventureDealsCover.jpg", author: "Adam Smith", date: "2025", spineColour: "#355E3B", textColour: "#F5F5DC", rating: 4, description: "Great book and, imo, a must read for anyone interesting in the origins of capitalism as we know it today!"},
    {title: "Atomic Habits", cover: "bookCovers/ventureDealsCover.jpg", author: "James Clear", date: "2025", spineColour: "#483D8B", textColour: "#E6E6FA", rating: 4, description: "Great insights on building good habits!"},
    {title: "Sapiens", cover: "bookCovers/ventureDealsCover.jpg", author: "Yuval Noah Harari", date: "2025", spineColour: "#8B4513", textColour: "#F5F5DC", rating: 4, description: "A brief history of humankind."},
    {title: "Zero to One", cover: "bookCovers/ventureDealsCover.jpg", author: "Peter Thiel", date: "2025", spineColour: "#4A646C", textColour: "#E5E4E2", rating: 4, description: "Notes on startups, or how to build the future."},
    {title: "Deep Work", cover: "bookCovers/ventureDealsCover.jpg", author: "Cal Newport", date: "2025", spineColour: "#556B2F", textColour: "#FFFAF0", rating: 4, description: "Rules for focused success in a distracted world."},
    {title: "The Innovators", cover: "bookCovers/ventureDealsCover.jpg", author: "Walter Isaacson", date: "2025", spineColour: "#7C0A02", textColour: "#FAEBD7", rating: 4, description: "How a group of hackers, geniuses, and geeks created the digital revolution."},
    {title: "The Lean Startup", cover: "bookCovers/ventureDealsCover.jpg", author: "Eric Ries", date: "2025", spineColour: "#36454F", textColour: "#F5F5F5", rating: 4, description: "How today's entrepreneurs use continuous innovation."},
    {title: "Thinking Fast and Slow", cover: "bookCovers/ventureDealsCover.jpg", author: "Daniel Kahneman", date: "2025", spineColour: "#614051", textColour: "#FFE4C4", rating: 4, description: "A fascinating look at the two systems that drive the way we think."},
    {title: "Outliers", cover: "bookCovers/ventureDealsCover.jpg", author: "Malcolm Gladwell", date: "2025", spineColour: "#5F8575", textColour: "#F0FFFF", rating: 4, description: "The story of success."},
    {title: "The Power of Habit", cover: "bookCovers/ventureDealsCover.jpg", author: "Charles Duhigg", date: "2025", spineColour: "#826644", textColour: "#F5F5DC", rating: 4, description: "Why we do what we do in life and business."},
    {title: "Shoe Dog", cover: "bookCovers/ventureDealsCover.jpg", author: "Phil Knight", date: "2025", spineColour: "#4F666A", textColour: "#FFFFFF", rating: 4, description: "A memoir by the creator of Nike."},
    {title: "Educated", cover: "bookCovers/ventureDealsCover.jpg", author: "Tara Westover", date: "2025", spineColour: "#5D3954", textColour: "#F8F8FF", rating: 4, description: "A memoir about a woman who kept out of school."},
    {title: "Bad Blood", cover: "bookCovers/ventureDealsCover.jpg", author: "John Carreyrou", date: "2025", spineColour: "#582C2C", textColour: "#FFFAFA", rating: 4, description: "Secrets and lies in a Silicon Valley startup."},
    {title: "Originals", cover: "bookCovers/ventureDealsCover.jpg", author: "Adam Grant", date: "2025", spineColour: "#967969", textColour: "#FFFFF0", rating: 4, description: "How non-conformists move the world."},
    {title: "Becoming", cover: "bookCovers/ventureDealsCover.jpg", author: "Michelle Obama", date: "2025", spineColour: "#4A646C", textColour: "#F5FFFA", rating: 4, description: "A memoir by the former First Lady of the United States."},
    {title: "Principles", cover: "bookCovers/ventureDealsCover.jpg", author: "Ray Dalio", date: "2025", spineColour: "#3E5F42", textColour: "#F0FFF0", rating: 4, description: "Life and work principles from a successful investor."},
    {title: "Quiet", cover: "bookCovers/ventureDealsCover.jpg", author: "Susan Cain", date: "2025", spineColour: "#4C516D", textColour: "#F0F8FF", rating: 4, description: "The power of introverts in a world that can't stop talking."},
    {title: "Steve Jobs", cover: "bookCovers/ventureDealsCover.jpg", author: "Walter Isaacson", date: "2025", spineColour: "#36454F", textColour: "#FFFFFF", rating: 4, description: "The biography of Steve Jobs."},
    {title: "Grit", cover: "bookCovers/ventureDealsCover.jpg", author: "Angela Duckworth", date: "2025", spineColour: "#79443B", textColour: "#FFFAF0", rating: 4, description: "The power of passion and perseverance."}
]

function BookComponent({book}: { book: Book }) {
    const title = book.title;
    const spineColour = book.spineColour;
    const textColour = book.textColour;

    return <div className="bookSpine" style={{background:spineColour, backgroundImage: "url('bookCovers/spineTexture.jpg')", backgroundBlendMode: "overlay"}}>
        <p className="bookSpineText" style={{color:textColour}}>{title}</p>
    </div>
}

export function Bookshelf() {
    return <div className="bookShelf">
        <button className="bookShelfButton">&lt;</button>
        <div className="bookShelfBooks">
            {Books.map(book => <BookComponent book={book} key={book.title} />)}
        </div>
        <button className="bookShelfButton">&gt;</button>
    </div>
}