import { FunctionComponent } from "react";
import './SkeletonStyle.css';

const SkeletonCard: FunctionComponent = () => {
    return (
        <div className="skeletonCard">
            <div className="avatar"></div>
            <p className='name'></p>
            <p className='email'></p>
            <div className='action'>
               <div></div>
               <div></div>
            </div>
        </div>
    )
}

export default SkeletonCard;