import React from 'react';
import styles from './index.module.scss';

export type InlineStyles = {[key: string]: string}

type Props = {
	railWrapperStyles: InlineStyles;
	railTrackStyles: InlineStyles;
	minHandleStyles: InlineStyles;
	maxHandleStyles: InlineStyles;
};

export const Slider: React.FC<Props> = (props) => {
	const { railWrapperStyles, railTrackStyles, minHandleStyles, maxHandleStyles } = props;
	return (
		<div className={styles.wrapper} style={railWrapperStyles}>
			<div className={styles.placeholder}></div>
			<div className={styles.railTrack} style={railTrackStyles}></div>
			<div className={styles.sliderHandle} data-value-type="min" data-js-position="" style={minHandleStyles}></div>
			<div className={styles.sliderHandle} data-value-type="max" data-js-position="" style={maxHandleStyles}></div>
		</div>
	);
};