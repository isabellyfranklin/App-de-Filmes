import "./StarRating.scss"
import { IoMdStar } from "react-icons/io";
import { MdOutlineStarBorder } from "react-icons/md";

export interface Props {
    rating: number
}

export default function StarRating(props: Props) {
    const numStars = Math.round(props.rating / 2);

    const fullStars: number[] = [];
    const empyStars: number[] = [];

    for (let i = 0; i < 5; i++) {
        if (i < numStars) {
            fullStars.push(i);
        } else {
            empyStars.push(i);
        }
    }

    return (
        <div className="movie-rate">
            {fullStars.map(index => (
                <IoMdStar key={index} />
            ))}
            {empyStars.map(index => (
                <MdOutlineStarBorder key={index} />
            ))}
        </div>
    );
}