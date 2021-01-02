// this is container component
import React, { useCallback } from 'react';
import { Slider as Presentational } from './Slider';

export const Slider: React.FC = React.memo(() => {
	const minimumValue = 1;
	const handleMinimumNumberChange = () => {};

	return (
		<Presentational
			minimumValue = { minimumValue }
			handleMinimumNumberChange = { handleMinimumNumberChange }
		/>
	);
});
