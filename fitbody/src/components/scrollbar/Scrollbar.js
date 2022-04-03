import React, { useState } from 'react';
import cx from 'classnames';

// Hooks
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';
import { useCardContext } from '../../hooks/useCardContext';

// Components
import {
	IoIosArrowDropleftCircle as Left,
	IoIosArrowDroprightCircle as Right,
} from 'react-icons/io';

const SCROLL_AMOUNT = 40;

export default function Scrollbar({ data, styles }) {
	const [clicked, setClicked] = useState('');
	const scrollRef = useHorizontalScroll();
	const { selected, setSelected } = useCardContext();

	const scroll = (offset) => {
		scrollRef.current.scrollLeft += offset;
	};
	const handleClick = (item) => {
		setClicked(item.name);
		setSelected({ ...selected, subCategory: item.id });
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
							onClick={() => handleClick(item)}
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
