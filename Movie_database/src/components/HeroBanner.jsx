"use client";
import './HeroBanner.css';
import TextType from './TextType.jsx';

const HeroBanner = (props) => {
    return (
        <section className="hero">
            <div className="video-background">
                <video className="hero_video" autoPlay muted loop playsInline>
                    <source src={props.videoUrl} type="video/mp4" />
                </video>
            </div>
            <div className="hero-content">
                <div>
                    <span className="hero-meta">{props.genre}, {props.releaseYear}</span>
                </div>
                <h1 className="hero-title">{props.title}</h1>
                
                <div className="hero-details">
                    <TextType 
                       text={[props.summary]}
                       typingSpeed={75}
                       pauseDuration={1500}
                       deletingSpeed={30}
                       showCursor={true}
                       cursorCharacter="|"
                    />
                </div>
                <button className="hero-button">{props.watchTrailer}</button>
                <button className="info-button">{props.moreInfo}</button>
            </div>
        </section>
    );
};

export default HeroBanner;

