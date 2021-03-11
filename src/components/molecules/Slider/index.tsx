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

export type InlineStyles = {[key: string]: string | number}
export type OnChange = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

export const Slider: React.FC<Props> = (props) => {
	console.log('Rencer Slider Model');
	const { currentValueSet, limitValueSet, stepValue, minNumberChange, maxNumberChange } = props;

	const railWrapperStyles : {[key: string]: number} = { width: 300 };

	const minPercentage = currentValueSet.min / limitValueSet.max;
	const maxPercentage = currentValueSet.max / limitValueSet.max;

	const minPixel = railWrapperStyles.width * minPercentage;
	const maxPixel = railWrapperStyles.width * maxPercentage;
	const rangePixel = maxPixel - minPixel;

	// useMemo is to save result of calculation
	const thresholdPixel = useMemo(()=> Math.round(railWrapperStyles.width / ((limitValueSet.max - limitValueSet.min) / stepValue)),[props]);
	// useEffect(()=>{
	// execute once props is updated, this var is memorized
	// 	console.log(thresholdPixel);
	// }, [props]);

	// states
	const [mouseMoving, setMouseMoving] = useState<number>(0);
	const [railTrackStyles, setRailTrackStyles] = useState<InlineStyles>({ width: rangePixel, left: minPixel, right: 'auto' });
	const [minHandleStyles, setMinHandleStyles] = useState<InlineStyles>({ left: minPixel, right: 'auto' });
	const [maxHandleStyles, setMaxHandleStyles] = useState<InlineStyles>({ left: maxPixel, right: 'auto' });
	
	// https://blanktar.jp/blog/2020/06/react-why-state-not-updated
	// const [clickedPoint, setClickedPoint] = useState<number>(0);
	// if update clickedPoint by using function, state is not updated immediatery
	// state is updated when "useState called again" == "component rendered again"
	// useEffect(()=>{
	// //execute once props is updated
	// 	console.log(clickedPoint);
	// }, [clickedPoint]);

	const onMinChange : OnChange = (e) => {
		const clickedPoint = e.pageX;
		const minMouseMoveFunc = (e: MouseEvent):void => {
			const currentMove : number = e.pageX - clickedPoint;
			setMouseMoving(currentMove);
			// here pseudo re-rendering by using useState
		}

		const mouseUpFunc = ():void => {
			// here store update
			document.removeEventListener('mousemove', minMouseMoveFunc);
			console.log('mouseup');
		}

		document.addEventListener('mousemove', minMouseMoveFunc);
		document.addEventListener('mouseup', mouseUpFunc);
	}
	const onMaxChange : OnChange = (e) => {
		console.log('noop')
	}

	return (
		<Presentational
			railWrapperStyles={railWrapperStyles}
			railTrackStyles={railTrackStyles}
			minHandleStyles={minHandleStyles}
			maxHandleStyles={maxHandleStyles}
			onMinChange = {onMinChange}
			onMaxChange={onMaxChange}
			mouseMoving={mouseMoving}
		/>
	);
};