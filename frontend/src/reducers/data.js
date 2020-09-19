import { RECEIVE_API_DATA,RECEIVE_AGENT_DATA,RECEIVE_TEAM_LEADER_DATA,RECEIVE_MANAGER_DATA } from "../actions";

export default (state = {}, { type, data }) => {
    switch (type) {
        case RECEIVE_API_DATA:
            return data;
        case RECEIVE_AGENT_DATA:
            return data;
        case RECEIVE_TEAM_LEADER_DATA:
            return data;
        case RECEIVE_MANAGER_DATA:
            return data;
        default:
            return state;
    }
};
