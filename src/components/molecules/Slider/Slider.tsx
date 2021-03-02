import React from 'react';
import type { InlineStyles } from './index';
import styles from './index.module.scss';

type Props = {
	railWrapperStyles: InlineStyles;
	railTrackStyles: InlineStyles;
	minHandleStyles: InlineStyles;
	maxHandleStyles: InlineStyles;
};

export const Slider: React.FC<Props> = ({
	railWrapperStyles,
	railTrackStyles,
	minHandleStyles,
	maxHandleStyles,
	}) => {


	return	(
		<div className={styles.wrapper} style={railWrapperStyles}>
			<div className={styles.placeholder}></div>
			<div className={styles.railTrack} style={railTrackStyles}></div>
			<div className={styles.sliderHandle} style={minHandleStyles}></div>
			<div className={styles.sliderHandle} style={maxHandleStyles}></div>
		</div>
)};