import React, { useRef, useEffect } from 'react';

export default function OutsideAlerter(props) {
    const wrapperRef = useRef(null);
    const setOpen = props.setOpen;

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setOpen(false);
                }
            }
    
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    useOutsideAlerter(wrapperRef);

    return <div ref={wrapperRef}>{props.children}</div>;
}