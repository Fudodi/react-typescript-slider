import React from 'react';
import { SliderContent } from '../components/organisms/SliderContent/index';
import styles from './App.module.scss';
import type { StateType } from '../components/organisms/SliderContent/index';

function App() {
	type ValueSets = {[key: string]: number}
	const initialValueSet: StateType = {
		min: 20,
		max: 80,
	}
	const limitValueSet: ValueSets = {
		limitMin: 0,
		limitMax: 100,
	}
	return (
		<div className={styles.root}>
			<SliderContent
				initialValueSet={initialValueSet}
				limitValueSet={limitValueSet}
			/>
		</div>
	);
}

export default App;
