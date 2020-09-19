import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

import {
    REQUEST_API_DATA,
    receiveApiData,
    receiveAgents,
    REQUEST_AGENT_DATA,
    REQUEST_MANAGER_DATA,
    REQUEST_TEAM_LEADER_DATA, receiveTeamLeaders, receiveManagers
} from "../actions";

import {fetchData, getAgents, getManagers, getTeamLeaders} from "../Api";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
    try {
        // do api call
        const data = yield call(fetchData);
        yield put(receiveApiData(data));
    } catch (e) {
        console.log(e);
    }
}

function* getAgentsData(action) {
    try {
        const data = yield call(getAgents);
        yield put(receiveAgents(data));
    } catch (e) {
        console.log(e);
    }
}

function* getTeamLeadersData(action) {
    try {
        const data = yield call(getTeamLeaders);
        yield put(receiveTeamLeaders(data));
    } catch (e) {
        console.log(e);
    }
}

function* getManagerData(action) {
    try {
        const data = yield call(getManagers);
        yield put(receiveManagers(data));
    } catch (e) {
        console.log(e);
    }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* UserManagementSaga() {
    yield takeLatest(REQUEST_API_DATA, getApiData);
    yield takeLatest(REQUEST_AGENT_DATA, getAgentsData);
    yield takeLatest(REQUEST_TEAM_LEADER_DATA, getTeamLeadersData);
    yield takeLatest(REQUEST_MANAGER_DATA, getManagerData);
}
