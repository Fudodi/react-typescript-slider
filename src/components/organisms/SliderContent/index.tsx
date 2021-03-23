// this is container component
import React, { useReducer } from 'react';
import { SliderContent as Presentational } from './SliderContent';

type Props = {
	initialValueSet: minAndMaxType;
	limitValueSet: minAndMaxType;
	stepValue: number;
};
export type minAndMaxType = {
	min: number;
	max: number;
}

export const SliderContent: React.FC<Props> = React.memo((props) => {
	const { initialValueSet, limitValueSet, stepValue } = props;
	// better to use union type rather than enum
	// enum is inferior at compiling a
	// https://www.benmvp.com/blog/type-checking-react-usereducer-typescript/
	// https://engineering.linecorp.com/ja/blog/typescript-enum-tree-shaking/
	type Action =
		| { type: 'changeMin'; value: number;}
		| { type: 'changeMax'; value: number;};

	const State : minAndMaxType = {...initialValueSet}
	const reducerFunc = (state: minAndMaxType, action: Action): minAndMaxType => {
		switch (action.type) {
			case 'changeMin':
				return {...state, min: action.value}
			case 'changeMax':
				return {...state, max: action.value}
			default:
				return state
		}
	}

	const [state, dispatch] = useReducer(reducerFunc, State);

	const minNumberChange = (value: number): void => {
		dispatch({type: 'changeMin', value: value});
	};
	const maxNumberChange = (value: number): void => {
		dispatch({type: 'changeMin', value: value});
	};

	return (
		<Presentational
			currentValueSet={state}
			limitValueSet={limitValueSet}
			stepValue={stepValue}
			minNumberChange={minNumberChange}
			maxNumberChange={maxNumberChange}
		/>
	);
});
