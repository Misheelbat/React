import React, { useState } from 'react';
import cx from 'classnames';
import {
	IoIosArrowDropleftCircle as Left,
	IoIosArrowDroprightCircle as Right,
} from 'react-icons/io';

//Hooks
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';

const SCROLL_AMOUNT = 40;
export default function Scrollbar({ data, styles }) {
	const [clicked, setClicked] = useState('');
	const scrollRef = useHorizontalScroll();

	const setActiveClass = (i) => {
		setClicked(i);
	};
	const scroll = (offset) => {
		scrollRef.current.scrollLeft += offset;
	};

	return (
		<div className={styles.ul}>
			<Left
				onClick={() => scroll(-SCROLL_AMOUNT)}
				className={cx(styles.arrow, styles.left)}
			/>
			<ul className={styles.items} ref={scrollRef}>
				{data.map((item, i) => (
					<li
						className={i === clicked ? styles.active : ''}
						onClick={() => setActiveClass(i)}
						key={item}
					>
						{item}
					</li>
				))}
			</ul>
			<Right
				onClick={() => scroll(SCROLL_AMOUNT)}
				className={cx(styles.arrow, styles.right)}
			/>
		</div>
	);
}
