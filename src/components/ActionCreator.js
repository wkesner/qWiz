//currently not doing anything
import { bindActionCreators, createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer);

const doIncrementScore = () => ({ type: 'INCREMENTED_SCORE'})

const boundIncrementScore = ()=>
bindActionCreators(doIncrementScore(), store.dispatch);

export default boundIncrementScore;
