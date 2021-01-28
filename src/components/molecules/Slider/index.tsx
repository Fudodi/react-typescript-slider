import React, {useReducer} from 'react';
import { Slider as Presentational } from './Slider';
import styles from './index.module.scss';

type Props = {
	minValue: number;
	maxValue: number;
	limitValueSet: Object;
	stepValue: number;
};

type InlineStyles = {[key: string]: string | number}
export type StateType = {
	railWrapperStyles: InlineStyles;
	railTrackStyles: InlineStyles;
	minHandleStyles: InlineStyles;
	maxHandleStyles: InlineStyles;
}

export const Slider: React.FC<Props> = (props) => {
	const { maxValue, minValue, limitValueSet, stepValue } = props;

	const State : StateType = {
		// Define Slider parts' width & height here because they're related to Slider logic
		railWrapperStyles: { width: 300 },
		railTrackStyles: { width: 120, left: 12, right: 'auto' },
		minHandleStyles: { width: 30, height: 30, left: 12, right: 'auto' },
		maxHandleStyles: { width: 30, height: 30, left: 132, right: 'auto' },
	}
	type Action =
	// todo: create actions by mouse events
		| { type: 'changeMin'; value: number;}
		| { type: 'changeMax'; value: number;};
	const reducerFunc = (state: StateType, action: Action): StateType => {
		switch (action.type) {
			case 'changeMin':
				return {...state}
			case 'changeMax':
				return {...state}
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(reducerFunc, State);

	return (
		<Presentational
			railWrapperStyles={state.railWrapperStyles}
			railTrackStyles={state.railTrackStyles}
			minHandleStyles={state.minHandleStyles}
			maxHandleStyles={state.maxHandleStyles}
		/>
	);
};