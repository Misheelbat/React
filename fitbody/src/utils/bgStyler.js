const BODY_FRONT = "url('/muscles/muscular_system_front.svg')";
const BODY_BACK = "url('/muscles/muscular_system_back.svg')";


const setBg = (muscle) => {
	if (!muscle) return;
	const bgUrl = [];
	const mainMuscle = `url(/muscles/main/muscle-${muscle.id}.svg)`;
	bgUrl.push(mainMuscle);
	if (muscle.is_front) {
		bgUrl.push(BODY_FRONT);
	} else {
		bgUrl.push(BODY_BACK);
	}
	return { backgroundImage: bgUrl.toString() };
};
export default setBg;
