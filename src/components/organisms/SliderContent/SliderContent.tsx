// this is presentational component
import * as React from 'react';
import styles from './SliderContent.module.scss';
import { NumberInput } from '../../molecules/NumberInput';
import { Slider } from '../../molecules/Slider';
import type { InlineStyles } from '../../molecules/Slider';

type Props = {
	minValue: number;
	maxValue: number;
	railWrapperStyles: InlineStyles;
	railTrackStyles: InlineStyles;
	minHandleStyles: InlineStyles;
	maxHandleStyles: InlineStyles;
	handleMinNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleMaxNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const SliderContent: React.FC<Props> = ({
	minValue,
	maxValue,
	railWrapperStyles,
	railTrackStyles,
	minHandleStyles,
	maxHandleStyles,
	handleMinNumberChange,
	handleMaxNumberChange,
	 }) => (
	<form className={styles.root} action="">
		<fieldset>
			<legend>スライダー</legend>
			<NumberInput
				label="最小値"
				name="minValue"
				value={minValue}
				onChange={handleMinNumberChange}
			/>
			<NumberInput
				label="最大値"
				name="maxValue"
				value={maxValue}
				onChange={handleMaxNumberChange}
			/>
			<Slider
				railWrapperStyles={railWrapperStyles}
				railTrackStyles={railTrackStyles}
				minHandleStyles={minHandleStyles}
				maxHandleStyles={maxHandleStyles}
			/>
		</fieldset>
	</form>
);
