export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";

export const REQUEST_AGENT_DATA = "REQUEST_AGENT_DATA";
export const RECEIVE_AGENT_DATA = "RECEIVE_AGENT_DATA";

export const REQUEST_TEAM_LEADER_DATA = "REQUEST_TEAM_LEADER_DATA";
export const RECEIVE_TEAM_LEADER_DATA = "RECEIVE_TEAM_LEADER_DATA";

export const REQUEST_MANAGER_DATA = "REQUEST_MANAGER_DATA";
export const RECEIVE_MANAGER_DATA = "RECEIVE_MANAGER_DATA";

export const requestApiData = () => ({ type: REQUEST_API_DATA });
export const receiveApiData = data => ({ type: RECEIVE_API_DATA, data });

export const requestAgents = () => ({ type: REQUEST_AGENT_DATA });
export const receiveAgents = data => ({ type: RECEIVE_AGENT_DATA, data });

export const requestTeamLeaders = () => ({ type: REQUEST_TEAM_LEADER_DATA });
export const receiveTeamLeaders = data => ({ type: RECEIVE_TEAM_LEADER_DATA, data });

export const requestManagers = () => ({ type: REQUEST_MANAGER_DATA });
export const receiveManagers = data => ({ type: RECEIVE_MANAGER_DATA, data });
