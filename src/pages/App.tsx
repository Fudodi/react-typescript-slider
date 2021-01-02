import React from 'react';
import { Slider } from '../components/organisms/Slider/index'
import styles from './App.module.scss';

function App() {
	return (
		<div className={styles.root}>
			<Slider />
		</div>
	);
}

export default App;
