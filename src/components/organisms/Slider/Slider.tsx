// this is presentational component
import * as React from 'react';
import styles from './Slider.module.scss';
import { NumberInput } from '../../molecules/NumberInput';

type Props = {
	minimumValue: number;
	handleMinimumNumberChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Slider: React.FC<Props> = ({
	minimumValue,
	handleMinimumNumberChange,
	 }) => (
	<form className={styles.root} action="">
		<fieldset>
			<legend>スライダー</legend>
			<NumberInput
				label="最小値"
				name="minimumValue"
				value={minimumValue}
				onChange={handleMinimumNumberChange}
			/>
		</fieldset>
	</form>
);
