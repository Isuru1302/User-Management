import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './reducers';
import UserManagementSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(UserManagementSaga);
