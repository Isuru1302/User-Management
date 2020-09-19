import { RECEIVE_AGENT_DATA } from "../actions";

export default (state = {}, { type, agents }) => {
    switch (type) {
        case RECEIVE_AGENT_DATA:
            return agents;
        default:
            return state;
    }
};
