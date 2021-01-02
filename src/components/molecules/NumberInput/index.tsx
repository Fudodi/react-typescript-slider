import React from 'react';
import { NumberField } from '../../atoms/NumberField';
import styles from './index.module.scss';

type Props = {
	label: string;
	name: string;
	value: number;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const NumberInput: React.FC<Props> = (props) => {
	const { name, label, value, onChange } = props;
	return (
		<div className={styles.root}>
			<label htmlFor={name}>{label}</label>
			<NumberField name={name} value={value} onChange={onChange} />
		</div>
	);
};