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
				{data &&
					data.map((item) => (
						<li
							className={cx(
								item.name === clicked ? styles.active : '',
								styles.singleItem
							)}
							onClick={() => setClicked(item.name)}
							key={item.name}
						>
							{item.name}
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
