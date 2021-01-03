import React from 'react';
import styles from './index.module.scss';

type Props = {
	value: number;
	name: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const NumberField: React.FC<Props> = (props) => {
	const { value, name, onChange } = props;
	return (
		<input type="number" value={value} name={name} className={styles.root} onChange={onChange}/>
	);
};
