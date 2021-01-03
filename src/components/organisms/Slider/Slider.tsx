// this is presentational component
import * as React from 'react';
import styles from './Slider.module.scss';
import { NumberInput } from '../../molecules/NumberInput';

type Props = {
	minValue: number;
	maxValue: number;
	handleMinNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleMaxNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Slider: React.FC<Props> = ({
	minValue,
	maxValue,
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
		</fieldset>
	</form>
);
