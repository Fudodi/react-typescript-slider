import React from 'react';
import type { InlineStyles, OnChange} from './index';
import styles from './index.module.scss';

type Props = {
	railWrapperStyles: InlineStyles;
	railTrackStyles: InlineStyles;
	minHandleStyles: InlineStyles;
	maxHandleStyles: InlineStyles;
	onMinChange: OnChange;
	onMaxChange: OnChange;
	mouseMoving: number;
};

export const Slider: React.FC<Props> = React.memo( ({
	railWrapperStyles,
	railTrackStyles,
	minHandleStyles,
	maxHandleStyles,
	onMinChange,
	onMaxChange,
	mouseMoving
	}) => {

	console.log('render slider presentational')
	return	(
		<div>
			<div>{mouseMoving}</div>
			<div className={styles.wrapper} style={railWrapperStyles}>
				<div className={styles.placeholder}></div>
				<div className={styles.railTrack} style={railTrackStyles}></div>
				<div className={styles.sliderHandle} style={minHandleStyles} onMouseDown={onMinChange} draggable="false"></div>
				<div className={styles.sliderHandle} style={maxHandleStyles} onMouseDown={onMaxChange} draggable="false"></div>
			</div>
		</div>
)});