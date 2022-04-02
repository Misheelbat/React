import { useRef, useEffect } from 'react';

export const useHorizontalScroll = () => {
	const elementRef = useRef();
	useEffect(() => {
		const element = elementRef.current;

		if (element) {
			const onWheel = (e) => {
				if (e.deltaY === 0) return;
				if (
					!(element.scrollLeft === 0 && e.deltaY < 0) &&
					!(
						element.scrollWidth -
							element.clientWidth -
							Math.round(element.scrollLeft) ===
							0 && e.deltaY > 0
					)
				) {
					e.preventDefault();
				}
				element.scrollTo({
					left: element.scrollLeft + e.deltaY,
					behavior: 'smooth',
				});
			};
			element.addEventListener('wheel', onWheel);
			return () => element.removeEventListener('wheel', onWheel);
		}
	}, []);
	return elementRef;
};
