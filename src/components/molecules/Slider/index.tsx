import React, {useReducer, useEffect} from 'react';
import { Slider as Presentational } from './Slider';
import type { minAndMaxType } from '../../organisms/SliderContent/index';

type Props = {
	currentValueSet: minAndMaxType;
	limitValueSet: minAndMaxType;
	stepValue: number;
	handleMinChange: (value: number) => void;
	handleMaxChange: (value: number) => void;
};

export type InlineStyles = {[key: string]: string | number}

export const Slider: React.FC<Props> = (props) => {
	const { currentValueSet, limitValueSet, stepValue, handleMinChange, handleMaxChange } = props;

	const railWrapperStyles : {[key: string]: number} = { width: 300 };

	const minPercentage = currentValueSet.min / limitValueSet.max;
	const maxPercentage = currentValueSet.max / limitValueSet.max;

	const minPixel = railWrapperStyles.width * minPercentage;
	const maxPixel = railWrapperStyles.width * maxPercentage;
	const rangePixel = maxPixel - minPixel;

	const railTrackStyles : InlineStyles = { width: rangePixel, left: minPixel, right: 'auto' };
	const minHandleStyles : InlineStyles = { width: 30, height: 30, left: minPixel, right: 'auto' };
	const maxHandleStyles : InlineStyles = { width: 30, height: 30, left: maxPixel, right: 'auto' };

	// const testfunc = (num : number) => {
	// 	handleMinChange(num);
	// }

	// By using uselayouteffect, create Slider styles from maxValue/minValue/limitValueSet
	useEffect(()=>{ // https://reffect.co.jp/react/react-useeffect-understanding
		console.log('useEffectが実行されました')
		console.log(currentValueSet)
		// minHandle
		console.log(minPercentage)
		// maxHandle
		console.log(maxPercentage)
	});

	return (
		<Presentational
			railWrapperStyles={railWrapperStyles}
			railTrackStyles={railTrackStyles}
			minHandleStyles={minHandleStyles}
			maxHandleStyles={maxHandleStyles}
		/>
	);
};