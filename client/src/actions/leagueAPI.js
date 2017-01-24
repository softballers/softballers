import axios from 'axios';

export const LEAGUE_DATA_RECEIVED = 'LEAGUE_DATA_RECEIVED';
export const LEAGUE_DATA_ERR = 'LEAGUE_DATA_ERR';

export function getOneLeagueData(leagueID){
	const query = axios.get(`http://localhost:8080/league/${leagueID}`);	
	return (dispatch) => {
		query.then(response => {
			dispatch({
				type: LEAGUE_DATA_RECEIVED,
				payload: response.data,
			})
		})
		.catch(err => {
			dispatch({
				type: LEAGUE_DATA_ERR,
				payload: err,
			})
		})
	}
}

export function getAllLeagueData(){
	const query = axios.get(`http://localhost:8080/league/`);	
	return (dispatch) => {
		query.then(response => {
			dispatch({
				type: LEAGUE_DATA_RECEIVED,
				payload: response.data,
			})
		})
		.catch(err => {
			dispatch({
				type: LEAGUE_DATA_ERR,
				payload: err,
			})
		})
	}
}

