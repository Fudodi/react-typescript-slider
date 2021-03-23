import React from 'react';
import type { railStyles, OnChange} from './index';
import styles from './index.module.scss';

type Props = {
	railWrapperWidth: number;
	railTrackStyles: railStyles;
	minHandlePosition: number;
	maxHandlePosition: number;
	onMinChange: OnChange;
	onMaxChange: OnChange;
	testWatch: number;
};

export const Slider: React.FC<Props> = React.memo( ({
	railWrapperWidth,
	railTrackStyles,
	minHandlePosition,
	maxHandlePosition,
	onMinChange,
	onMaxChange,
	testWatch
	}) => {

	console.log('render slider presentational')
	return	(
		<div>
			<div>{testWatch}</div>
			<div className={styles.wrapper} style={{width: railWrapperWidth}}>
				<div className={styles.placeholder}></div>
				<div className={styles.railTrack} style={railTrackStyles}></div>
				<div className={styles.sliderHandle} style={{left: minHandlePosition, right: 'auto'}} onMouseDown={onMinChange} draggable="false"></div>
				<div className={styles.sliderHandle} style={{left: maxHandlePosition, right: 'auto'}} onMouseDown={onMaxChange} draggable="false"></div>
			</div>
		</div>
)});