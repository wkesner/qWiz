//currently not doing anything
import { bindActionCreators, createStore } from 'redux';
import scoreReducer from './reducer';

const store = createStore(scoreReducer);

const doIncrementScore = () => ({ type: 'INCREMENT_SCORE'})

const boundIncrementScore = ()=>
bindActionCreators(doIncrementScore(), store.dispatch);

export default boundIncrementScore;
