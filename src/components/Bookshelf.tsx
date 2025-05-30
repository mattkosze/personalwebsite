import type { Book } from "./BookReviews"
import { useState, useRef, useEffect } from "react";

export const Books = [
    {title: "Venture Deals", cover: "https://m.media-amazon.com/images/I/71uAXl4fuJL._AC_UF1000,1000_QL80_.jpg", author: "Brad Feld", date: "May 2025", spineColour: "#ebebeb", textColour: "#000000", rating: 3.7, description: "A great introduction to the VC world. Balances storytelling and direct value pretty well, but more focused on the latter. Written by two active VC's, it provides a great insider's perspective on what to look for.\nOften referenced by people I consider to be mentors, I thought it wouldn't hurt to take a look. I don't regret it. Even if you aren't actively looking for financing, it's key to understand how the ecosystem works and whether your business fits the venture capital profile -- because not every idea does."},
    {title: "The Wealth of Nations", cover: "https://m.media-amazon.com/images/I/71ANvymikVL._AC_UF1000,1000_QL80_.jpg", author: "Adam Smith", date: "2025", spineColour: "#003d0b", textColour: "#F5F5DC", rating: 4, description: "\"The accommodation of an industrious and frugal peasant... exceeds that of many an African king.\"\nAt ~1200 pages, it's hard to have a good a low fluff/value ratio. But, an interesting read to anyone interested in economic theory and how it's evolved.\nPublished in 1776, the examples are very outdated, but the gist of many holds surprisingly well. Effectively a discourse on mercantilism, Smith argues for minimal government intervention -- except matters of the \"greater good,\" in which rational actors may not produce the necessary outcome.\nI find the book particularly interesting because his laissez-faire economic theories are evident in later developments by Keynes and Marx, making the book relevant in debates so prevalent today."},
    {title: "Zero to One", cover: "https://m.media-amazon.com/images/I/51zGCdRQXOL.jpg", author: "Peter Thiel", date: "2025", spineColour: "#4A646C", textColour: "#E5E4E2", rating: 4, description: "Notes on startups, or how to build the future."},
    {title: "The Innovator's Dilemma", cover: "https://m.media-amazon.com/images/I/81aBi22axsL._AC_UF1000,1000_QL80_.jpg", author: "Walter Isaacson", date: "2025", spineColour: "#2d3e82", textColour: "#FFFFFF", rating: 4, description: "How a group of hackers, geniuses, and geeks created the digital revolution."},
    {title: "The Lean Startup", cover: "https://m.media-amazon.com/images/I/71sxTeZIi6L.jpg", author: "Eric Ries", date: "2025", spineColour: "#56a1d4", textColour: "#000000", rating: 4, description: "How today's entrepreneurs use continuous innovation."},
    {title: "Thinking Fast and Slow", cover: "https://m.media-amazon.com/images/I/61fdrEuPJwL.jpg", author: "Daniel Kahneman", date: "2025", spineColour: "#ededed", textColour: "#000000", rating: 4, description: "A fascinating look at the two systems that drive the way we think."},
    {title: "The Power Broker", cover: "https://m.media-amazon.com/images/I/81sw84h-ZTL._AC_UF1000,1000_QL80_.jpg", author: "Robert A. Caro", date: "2025", spineColour: "#a81d1d", textColour: "#FFFFFF", rating: 4, description: "A fascinating look at the two systems that drive the way we think."},
    {title: "The Charisma Myth", cover: "https://m.media-amazon.com/images/I/81hS0u0bqXL.jpg", author: "Olivia Fox Cabane", date: "2024", spineColour: "#006104", textColour: "#FFFFFF", rating: 4, description: "A fascinating look at the two systems that drive the way we think."},
    {title: "How to Win Friends and Influence People", cover: "https://m.media-amazon.com/images/I/71vK0WVQ4rL.jpg", author: "Dale Carnegie", date: "2024", spineColour: "#d60000", textColour: "#000000", rating: 4, description: "A fascinating look at the two systems that drive the way we think."},
    {title: "Statistics 4th Edition", cover: "https://m.media-amazon.com/images/I/51+Dm4dgucL.jpg", author: "David Freedman", date: "2024", spineColour: "#003d0b", textColour: "#FFFFFF", rating: 3.5, description: "I firmly believe that understanding statistics enhances your understanding of the world. Also, allegedly, one of Ken Griffin's recommended books. \nUnsurprisingly, it's a little bit outdated. Still, great examples and very intuitive. However, anyone looking for a refresher on statistics, choose a more recent book or edition of it."},
    {title: "Built to Last", cover: "https://m.media-amazon.com/images/I/61-+RJemWdL._AC_UF1000,1000_QL80_.jpg", author: "Jim Collins", date: "2024", spineColour: "#f0ebe7", textColour: "#000000", rating: 4, description: "One way "},
    {title: "The Mom Test", cover: "https://m.media-amazon.com/images/I/61ixLoT4lyL.jpg", author: "Rob Fitzpatrick", date: "2024", spineColour: "#ff1b9d", textColour: "#000000", rating: 5, description: "An essential guide on how to ask the right questions. If an entrepreneur could read only one book, it should be this.\nFew books provide this much value in this dense a package, and I say that in the best way possible. It succinctly describes\nSpoiler alert: it doesn't actually involve your mom... "},
    {title: "Hard Thing About Hard Things", cover: "https://m.media-amazon.com/images/I/810u9MkT3SL.jpg", author: "Ben Horowitz", date: "2024", spineColour: "#212121", textColour: "#fc7900", rating: 5, description: "An essential guide on how to ask the right questions. If an entrepreneur could read only one book, it should be this.\nFew books provide this much value in this dense a package, and I say that in the best way possible. It succinctly describes\nSpoiler alert: it doesn't actually involve your mom... "},

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
    const [hoverDirection, setHoverDirection] = useState<null | 'left' | 'right'>(null);
    const booksContainerRef = useRef<HTMLDivElement>(null);
    const scrollSpeed = 2;

    useEffect(() => {
        const container = booksContainerRef.current;
        if (!container) return;
        
        const preventWheel = (e: WheelEvent) => {
            e.preventDefault();
        };
        
        const preventTouch = (e: TouchEvent) => {
            e.preventDefault();
        };
        
        container.addEventListener('wheel', preventWheel, { passive: false });
        container.addEventListener('touchmove', preventTouch, { passive: false });
        
        return () => {
            container.removeEventListener('wheel', preventWheel);
            container.removeEventListener('touchmove', preventTouch);
        };
    }, []);

    useEffect(() => {
        if (!hoverDirection || !booksContainerRef.current) return;
        
        const container = booksContainerRef.current;
        let animationFrameId: number;
        
        const scroll = () => {
            if (hoverDirection === 'left') {
                container.scrollLeft -= scrollSpeed;
            } else {
                container.scrollLeft += scrollSpeed;
            }
            animationFrameId = requestAnimationFrame(scroll);
        };
        
        animationFrameId = requestAnimationFrame(scroll);
        
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [hoverDirection]);

    return <div className="bookShelf">
        <button 
            className="bookShelfButton"
            onMouseEnter={() => setHoverDirection('left')} 
            onMouseLeave={() => setHoverDirection(null)}
        >
            &lt;
        </button>
        <div 
            className="bookShelfBooks"
            ref={booksContainerRef}
        
        >
            {Books.map(book => <BookComponent book={book} key={book.title} />)}
        </div>
        <button 
            className="bookShelfButton"
            onMouseEnter={() => setHoverDirection('right')} 
            onMouseLeave={() => setHoverDirection(null)}
        >
                &gt;
        </button>
    </div>
}