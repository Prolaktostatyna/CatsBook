import React, { useEffect, useState } from "react";
import './BeforeSearch.scss'

const BeforeSearch = () => {
    const images = ['image-1', 'image-2', 'image-3'];    
    const [counter, setCounter] = useState(0);
    const [image, setImage] = useState(images[counter]);

    const changeTime = 2000; 

    useEffect(() => {
        const interval = setInterval(() => {
            setCounter(counter => counter + 1);
            if (counter === images.length - 1){
                setCounter(0);
            }
            setImage(images[counter]);
        }, changeTime);
        return () => clearInterval(interval);
    });

    return ( 
        <> 
        <div className={`beforeSearchGeneral beforeSearchImage ${image}`}></div>
        <p className="beforeSearchGeneral beforeSearchText">Type the cat breed into the search engine to learn more about it!</p>
        </>
    );
}
 
export default BeforeSearch;