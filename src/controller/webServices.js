const API_URL = 'https://cubosv2.4040.wtf/api/'


const createHeader = (type) => {
	const myHeaders = new Headers();
	myHeaders.append('authtoken', process.env.REACT_APP_AUTHTOKEN);

	return {
		method: type,
		headers: myHeaders,
	};
}

const apiCallFunction = (url = '', http_method = 'GET') => {
	const requestOptions = createHeader(http_method);
	return fetch(url, requestOptions);
};

//Llamada por id a staff
export const getStaffDataById = (staffID) => {
	//fetch(API_URL + 'staffs/' + staffID, requestOptions)
	apiCallFunction(API_URL + 'staffs/' + staffID, 'GET')
		.then(response => response.json())
		.then(result => {
			const staffData = {
				'staffid': result.staffid,
				'firstname': result.firstname,
				'full_name': result.full_name,
			}
			console.log(staffData);
			
		})
		.catch(error => console.log('error', error));
}


export const getTaskDataByStaffId = (staffID) => {
	//fetch(API_URL + 'tasks/search/', requestOptions)
	apiCallFunction(API_URL + 'tasks/search/', 'GET')
		.then(response => response.json())
		.then(result => {
			const taskWithProjectIdData = result.filter( element => element.rel_type === 'project')
			//console.log('taskWithProjectIdData', taskWithProjectIdData);
			
			const taskWithCompleteData = [];
			/*taskWithProjectIdData.forEach(element => {
				taskWithCompleteData.push(apiCallFunction(API_URL + 'tasks/' + element.id, 'GET'));
			});*/
			for(let i=11; i < 21; i++) {
				taskWithCompleteData.push(apiCallFunction(API_URL + 'tasks/' + taskWithProjectIdData[i].id, 'GET'));
			}

			Promise.all(taskWithCompleteData) // allSettled
				.then(responses => Promise.all(responses.map(element => element.json())))
				.then(jsonObjects => { 
					console.log('result of task search by id', jsonObjects);
					const taskAssignedToStaff = jsonObjects.filter(element => { 
						if(element.assignees_ids.includes('' + staffID)) {
							return true;
						}
					});
					console.log('result of task with same staffID', taskAssignedToStaff);
					const finalData = [];
					taskAssignedToStaff.forEach(element => {
						const infoARetornar = {
							staffId: staffID,
							taskId: element.id,
							taskName: element.name,
							description: element.description, 
							priority: element.priority,
							status: element.status,
							projectId: element.project_data.id,
							projectName: element.project_data.name,
						};

						finalData.push(infoARetornar);
					});
					
					console.log('finalData', finalData);
					
				})
		})
		.catch(error => console.log('error', error));
}

//lista de proyectos asignados al usuario
