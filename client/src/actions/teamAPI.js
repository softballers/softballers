import axios from 'axios';

export const TEAM_DATA_RECEIVED = 'TEAM_DATA_RECEIVED';
export const TEAM_DATA_ERR = 'TEAM_DATA_ERR';

export function getOneTeamData(teamname){
	const query = axios.get(`http://localhost:8080/league/${teamname}`);	
	return (dispatch) => {
		query.then(response => {
			dispatch({
				type: TEAM_DATA_RECEIVED,
				payload: response.data,
			})
		})
		.catch(err => {
			dispatch({
				type: TEAM_DATA_ERR,
				payload: err,
			})
		})
	}
}

export function getAllTeamData(){
	const query = axios.get(`http://localhost:8080/team/`);	
	return (dispatch) => {
		query.then(response => {
			dispatch({
				type: TEAM_DATA_RECEIVED,
				payload: response.data,
			})
		})
		.catch(err => {
			dispatch({
				type: TEAM_DATA_ERR,
				payload: err,
			})
		})
	}
}

