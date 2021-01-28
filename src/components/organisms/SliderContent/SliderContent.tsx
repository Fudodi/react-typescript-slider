// this is presentational component
import * as React from 'react';
import styles from './SliderContent.module.scss';
import { Slider } from '../../molecules/Slider';
import type { minAndMaxType } from './index';

type Props = {
	currentValueSet: minAndMaxType;
	limitValueSet: minAndMaxType;
	stepValue: number;
	handleMinNumberChange: (value: number) => void;
	handleMaxNumberChange: (value: number) => void;
};

export const SliderContent: React.FC<Props> = ({
	currentValueSet,
	limitValueSet,
	stepValue,
	handleMinNumberChange,
	handleMaxNumberChange,
	 }) => (
	<form className={styles.root} action="">
		<fieldset>
			<legend>スライダー</legend>
			<input readOnly
				name="minValue"
				value={currentValueSet.min}
			/>
			<input readOnly
				name="maxValue"
				value={currentValueSet.max}
			/>
			<Slider
				currentValueSet={currentValueSet}
				limitValueSet={limitValueSet}
				stepValue={stepValue}
				handleMinChange={handleMinNumberChange}
				handleMaxChange={handleMaxNumberChange}
			/>
		</fieldset>
	</form>
);
