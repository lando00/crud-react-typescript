import { FunctionComponent } from "react";
import SkeletonCard from "./SkeletonCard";
import './SkeletonStyle.css';

const ShowSkeleton: FunctionComponent = () => {
    return (
        <div className="skeletonContainer">
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
        </div>
    )
}

export default ShowSkeleton;