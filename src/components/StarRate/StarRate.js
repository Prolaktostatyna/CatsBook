import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar as faSolidStar} from '@fortawesome/free-solid-svg-icons';
import {faStar as faReguralStar} from "@fortawesome/free-regular-svg-icons";
import { faFaceFrown } from "@fortawesome/free-regular-svg-icons";
import './StarRate.scss'

const StarRate = (props) => {
    const rating = props.rating
    
    if(rating === 0) {
        return ( 
        <div className="starRate">
            <div><FontAwesomeIcon icon={faReguralStar}/></div>
            <div><FontAwesomeIcon icon={faReguralStar}/></div>
            <div><FontAwesomeIcon icon={faReguralStar}/></div>
            <div><FontAwesomeIcon icon={faReguralStar}/></div>
            <div><FontAwesomeIcon icon={faReguralStar}/></div>
        </div>
        )
    }else if (rating === 1){
        return ( 
        <div className="starRate">
            <div><FontAwesomeIcon icon={faSolidStar}/></div>
            <div><FontAwesomeIcon icon={faReguralStar}/></div>
            <div><FontAwesomeIcon icon={faReguralStar}/></div>
            <div><FontAwesomeIcon icon={faReguralStar}/></div>
            <div><FontAwesomeIcon icon={faReguralStar}/></div>
        </div>
        )       
    } else if (rating === 2){
        return ( 
        <div className="starRate">
            <div><FontAwesomeIcon icon={faSolidStar}/></div>
            <div><FontAwesomeIcon icon={faSolidStar}/></div>
            <div><FontAwesomeIcon icon={faReguralStar}/></div>
            <div><FontAwesomeIcon icon={faReguralStar}/></div>
            <div><FontAwesomeIcon icon={faReguralStar}/></div>
        </div>
        )  
    } else if (rating === 3){
        return ( 
        <div className="starRate">
            <div><FontAwesomeIcon icon={faSolidStar}/></div>
            <div><FontAwesomeIcon icon={faSolidStar}/></div>
            <div><FontAwesomeIcon icon={faSolidStar}/></div>
            <div><FontAwesomeIcon icon={faReguralStar}/></div>
            <div><FontAwesomeIcon icon={faReguralStar}/></div>
        </div>
        )  
    } else if (rating === 4){
        return ( 
        <div className="starRate">
            <div><FontAwesomeIcon icon={faSolidStar}/></div>
            <div><FontAwesomeIcon icon={faSolidStar}/></div>
            <div><FontAwesomeIcon icon={faSolidStar}/></div>
            <div><FontAwesomeIcon icon={faSolidStar}/></div>
            <div><FontAwesomeIcon icon={faReguralStar}/></div>
        </div>
        )  
    } else if (rating === 5){
        return ( 
        <div className="starRate">
            <div><FontAwesomeIcon icon={faSolidStar}/></div>
            <div><FontAwesomeIcon icon={faSolidStar}/></div>
            <div><FontAwesomeIcon icon={faSolidStar}/></div>
            <div><FontAwesomeIcon icon={faSolidStar}/></div>
            <div><FontAwesomeIcon icon={faSolidStar}/></div>
        </div>
        )  
    } else if (rating === undefined){
        return (
        <div className="starRate__noData"> Sorry, no data <FontAwesomeIcon icon={faFaceFrown}/></div>
        )
    }
}
 
export default StarRate;