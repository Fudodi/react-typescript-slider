// this is container component
import React, { useReducer } from 'react';
import { SliderContent as Presentational } from './SliderContent';
import type { InlineStyles } from '../../molecules/Slider';

export const SliderContent: React.FC = React.memo(() => {
	type StateType = {
		min: number;
		max: number;
		railWrapperStyles: InlineStyles;
		railTrackStyles: InlineStyles;
		minHandleStyles: InlineStyles;
		maxHandleStyles: InlineStyles;
	}
	// better to use union type rather than enum
	// enum is inferior at compiling a
	// https://www.benmvp.com/blog/type-checking-react-usereducer-typescript/
	// https://engineering.linecorp.com/ja/blog/typescript-enum-tree-shaking/
	type Action =
		| { type: 'changeMin'; value: number;}
		| { type: 'changeMax'; value: number;};

	const State : StateType = {
		min: 0,
		max: 100,
		// Define Slider parts' width & height here because they're related to Slider logic
		railWrapperStyles: { width: 300 },
		railTrackStyles: { width: 120, left: 12, right: 'auto' },
		minHandleStyles: { width: 30, height: 30, left: 12, right: 'auto' },
		maxHandleStyles: { width: 30, height: 30, left: 132, right: 'auto' },
	}
	const reducerFunc = (state: StateType, action: Action): StateType => {
		switch (action.type) {
			case 'changeMin':
				return {...state, min: action.value}
			case 'changeMax':
				return {...state, max: action.value}
			default:
				return state
		}
	}
	
	const [count, dispatch] = useReducer(reducerFunc, State);

	const handleMinNumberChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
			dispatch({type: 'changeMin', value: Number(e.target.value)});
		};
	const handleMaxNumberChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
			dispatch({type: 'changeMax', value: Number(e.target.value)});
		};

	return (
		<Presentational
			minValue = { count.min }
			maxValue = { count.max }
			railWrapperStyles = { count.railWrapperStyles }
			railTrackStyles = { count.railTrackStyles }
			minHandleStyles = { count.minHandleStyles }
			maxHandleStyles = { count.maxHandleStyles }
			handleMinNumberChange = { handleMinNumberChange }
			handleMaxNumberChange = { handleMaxNumberChange }
		/>
	);
});
