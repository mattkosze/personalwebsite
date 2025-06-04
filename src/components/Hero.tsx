import React from 'react';
import TextTransition, { presets } from 'react-text-transition';

const texts = ['Matt', 'learning', 'reading', 'creating']

export function Hero() {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1), ((texts[index%4] == 'Matt') ? 3000 : 1500),
        );
        return () => clearInterval(intervalId)
    })


    return (
        <div className="heroContainer">
            <div className="heroMain">
                <div className="heroClass">
                    <h1 className="heroText">Hey there, I'm </h1>
                    <TextTransition className="heroText" style={{height: 'auto', width: '200px', color: '#0367A6', fontWeight: 550}} springConfig={presets.stiff}>{texts[index % texts.length]}.</TextTransition>
                </div>
                <img src="/HeadshotTrimmed.png" style={{width: 220, borderRadius: 500}}/>
            </div>
            <div className="heroBottom">
                <p style={{margin: 0, marginBottom: 10, fontWeight: 600}}>A little about me...</p>
                <ul className="factList">
                    <li className="fastListItem">I'm currently a rising junior at Boston Uni. studying computer science and psychology; I was initially a finance major for 2 days. The intersection of CS and Psych particularly interests me because it gives insight into things like how human (ir)rationality impacts data and markets.</li>
                    <li className="fastListItem">Most of my time is spent either ideating, building, studying, or reading. I'm also super passionate about skiing and the outdoors so, unsurprisingly, winter's my favourite season.</li>
                    <li className="fastListItem">My interests are geared toward machine learning, psychology, model context protocol, and economics. If you know any interesting resources (books, articles, etc) in those domains, lmk!</li>
                    <li className="fastListItem">I've previously worked on projects including: Score, a platform which used 3.5M criminal court cases in Massachusetts to quantify judge bias and lead to better outcomes for defendants; Telemate, an AI voice assistant for restaurants </li>
                </ul>
            </div>
        </div>
    )
}