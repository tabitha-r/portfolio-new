import React, { useState, useRef, useEffect } from 'react';
import './fadeIn.css';

const FadeInSection = (props) => {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();
    
    useEffect(() => {
        const observer = new IntersectionObserver(items => {
            items.forEach(item => setVisible(item.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);

    return (
        <div
            className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>
    )
}

export default FadeInSection;