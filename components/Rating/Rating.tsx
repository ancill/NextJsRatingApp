import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './Rating.svg';
import { KeyboardEvent, useEffect, useState } from 'react';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	const constructRating = (currentRating: number) => {
		const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
			return (
				<StarIcon className={cn(styles.star, {
					[styles.fill]: i < currentRating,
					[styles.editable]: isEditable
				})}
					key={i}
					onMouseEnter={() => changeRating(i + 1)}
					onMouseLeave={() => changeRating(rating)}
					onClick={() => clickRating(i + 1)}
					tabIndex={isEditable ? 0 : -1}
					onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable && handleSpace(i + 1, e)}
				/>
			);
		});

		setRatingArray(updatedArray);
	};

	const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
		if (e.code !== 'Space' || !setRating) {
			return;
		}
		setRating(i);
	};

	const changeRating = (i: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(i);
	};

	const clickRating = (i: number) => {
		if (!isEditable && !setRating) {
			return;
		}
		setRating(i);
	};



	return <div {...props}>
		{ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
	</div>;
};