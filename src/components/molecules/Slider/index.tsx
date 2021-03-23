import React, {useState, useCallback, useMemo, useEffect} from 'react';
import { Slider as Presentational } from './Slider';
import type { minAndMaxType } from '../../organisms/SliderContent/index';

type Props = {
	currentValueSet: minAndMaxType;
	limitValueSet: minAndMaxType;
	stepValue: number;
	minNumberChange: (arg: number) => void;
	maxNumberChange: (arg: number) => void;
};

export type railStyles = {
	width: number;
	left: number;
}
export type OnChange = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

export const Slider: React.FC<Props> = (props) => {
	console.log('Rencer Slider Model');
	const { currentValueSet, limitValueSet, stepValue, minNumberChange, maxNumberChange } = props;

	const railWrapperWidth : number = 300;

	const minPercentage = currentValueSet.min / limitValueSet.max;
	const maxPercentage = currentValueSet.max / limitValueSet.max;

	const minPixel = railWrapperWidth * minPercentage;
	const maxPixel = railWrapperWidth * maxPercentage;
	const rangePixel = maxPixel - minPixel;

	// useMemo is to save result of calculation
	const thresholdPixel = useMemo(()=> Math.round(railWrapperWidth / ((limitValueSet.max - limitValueSet.min) / stepValue)),[props]);
	// useEffect(()=>{
	// execute once props is updated, this var is memorized
	// 	console.log(thresholdPixel);
	// }, [props]);

	// states
	const [railTrackStyles, setRailTrackStyles] = useState<railStyles>({ width: rangePixel, left: minPixel });
	const [minHandlePosition, setMinHandlePosition] = useState<number>(minPixel);
	const [maxHandlePosition, setMaxHandlePosition] = useState<number>(maxPixel);
	
	// https://blanktar.jp/blog/2020/06/react-why-state-not-updated
	// const [clickedPoint, setClickedPoint] = useState<number>(0);
	// if update clickedPoint by using function, state is not updated immediatery
	// state is updated when "useState called again" == "component rendered again"
	// useEffect(()=>{
	// //execute once props is updated
	// 	console.log(clickedPoint);
	// }, [clickedPoint]);

	const onMinChange : OnChange = (e) => { // *to-do check re-rendering caused by any clicks after running this 
		let clickedPoint = e.pageX;
		let currentHandlePosition = minHandlePosition;
		let currentMinValue = currentValueSet.min;
		const minMouseMoveFunc = (e: MouseEvent):void => {
			console.log('moving')
			const mouseEvent = e;
			const currentMove : number = mouseEvent.pageX - clickedPoint;
			console.log(currentMove)
			// move slider handle according to the position of cursor
			// handle moved to the right side (plus)
			if (currentMove > thresholdPixel) {
				const nextHandlePosition = currentHandlePosition + thresholdPixel;

				// update handle style
				setMinHandlePosition(nextHandlePosition);
				// update clickedpoint
				clickedPoint = mouseEvent.pageX;
				// update currentHandlePosition
				currentHandlePosition = nextHandlePosition;
				// update minValue
				currentMinValue += stepValue;
			} else if (currentMove < thresholdPixel * -1 ) {
				// handle moved to the left side (minus)
				const nextHandlePosition = currentHandlePosition - thresholdPixel;

				// update handle style
				setMinHandlePosition(nextHandlePosition);
				// update clickedpoint
				clickedPoint = mouseEvent.pageX;
				// update currentHandlePosition
				currentHandlePosition = nextHandlePosition;
				// update minValue
				currentMinValue -= stepValue;
			}
		}

		const mouseUpFunc = ():void => {
			// here store update
			document.removeEventListener('mousemove', minMouseMoveFunc);
			document.removeEventListener('mouseup', mouseUpFunc);
			minNumberChange(currentMinValue)
		}

		document.addEventListener('mousemove', minMouseMoveFunc);
		document.addEventListener('mouseup', mouseUpFunc);
	}
	const onMaxChange : OnChange = (e) => {
		console.log('noop')
	}

	return (
		<Presentational
			railWrapperWidth={railWrapperWidth}
			railTrackStyles={railTrackStyles}
			minHandlePosition={minHandlePosition}
			maxHandlePosition={maxHandlePosition}
			onMinChange = {onMinChange}
			onMaxChange={onMaxChange}
			testWatch={currentValueSet.min}
		/>
	);
};