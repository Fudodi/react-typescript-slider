import React from 'react';
import { SliderContent } from '../components/organisms/SliderContent/index';
import styles from './App.module.scss';
import type { minAndMaxType } from '../components/organisms/SliderContent/index';

function App() {
	// initial set value for min / max
	const initialValueSet: minAndMaxType = {
		min: 20,
		max: 80,
	}
	// limit value for min / max
	const limitValueSet: minAndMaxType = {
		min: 0,
		max: 100,
	}
	// how much value we change for one step
	const stepValue : number = 10;
	return (
		<div className={styles.root}>
			<SliderContent
				initialValueSet={initialValueSet}
				limitValueSet={limitValueSet}
				stepValue={stepValue}
			/>
		</div>
	);
}

export default App;
