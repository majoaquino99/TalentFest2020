import mockTimeTables from './mockTimeTables';
import mockData from './mockData';

const API_URL = 'https://cubosv2.4040.wtf/api/'


const createHeader = (type) => {
	const myHeaders = new Headers();
	myHeaders.append('authtoken', process.env.REACT_APP_AUTHTOKEN);

	return {
		method: type,
		headers: myHeaders,
	};
};

const apiCallFunction = (url = '', http_method = 'GET') => {
	const requestOptions = createHeader(http_method);
	return fetch(url, requestOptions);
};

//Llamada por id a staff
const getStaffDataById = (staffID) => {
	//fetch(API_URL + 'staffs/' + staffID, requestOptions)
	return new Promise((resolve, reject) => {
		apiCallFunction(API_URL + 'staffs/' + staffID, 'GET')
			.then(response => response.json())
			.then(result => {
				const staffData = {
					'staffid': result.staffid,
					'firstname': result.firstname,
					'full_name': result.full_name,
				}
				// console.log(staffData);
				resolve (staffData);
			
			})
			.catch(error => {
				console.log('error', error);
				reject (error);
			});
	});	
};


export const getTaskDataByStaffId = (staffID) => {
	return new Promise( (resolve, reject) => {
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
				for(let i=0; i < 10; i++) {
					taskWithCompleteData.push(apiCallFunction(API_URL + 'tasks/' + taskWithProjectIdData[i].id, 'GET'));
				}

				Promise.all(taskWithCompleteData) // allSettled
					.then(responses => Promise.all(responses.map(element => element.json())))
					.then(jsonObjects => { 
					// console.log('result of task search by id', jsonObjects);
						const taskAssignedToStaff = jsonObjects.filter(element => { 
							if(element.assignees_ids.includes('' + staffID)) {
								return true;
							}
						});
						// console.log('result of task with same staffID', taskAssignedToStaff);
						const taskList = [];
						const projectList = [];

						taskAssignedToStaff.forEach(element => {
							const infoTask = {
								taskId: element.id,
								taskName: element.name,
								description: element.description, 
								priority: element.priority,
								status: element.status,
							};
							taskList.push(infoTask);

							const infoProject ={
								projectId: element.project_data.id,
								projectName: element.project_data.name,
							};

							//if(!projectList.find(proj => proj.projectId === element.project_data.id)){
							if(!projectList.includes(infoProject)) {
								console.log('no existia', infoProject);
								projectList.push(infoProject);
							}
						});
						
						return { taskList, projectList }
					}).then(({taskList, projectList}) => {
						getStaffDataById(staffID)
							.then(data => {
								const staffData = {};
								Object.assign(staffData, data);
								console.log('finalData', { taskList, projectList, staffData });
								resolve ({ taskList, projectList, staffData });
							})
							.catch(error => console.log('error', error));
					})
			})
			.catch(error => {
				console.log('error', error);
				reject (error);
			});
	});
};


//------------------------------
export const getMockData = () => {
	return mockData;
}


// -----------------------------
export const saveMockOnLocalStorage = () => {
	// console.log(mockTimeTables);
	localStorage.setItem('mockTimeTables', JSON.stringify(mockTimeTables));
};

export const setTimeSheet = (object, taskId) => {
	// Hacer el put a la API - Mock mode: leer el localstorage push object al arreglo y volver a guardar en localstorage
	
	let retrievedObject = JSON.parse(localStorage.getItem('mockTimeTables'));
	retrievedObject.forEach(element => {
		if(element.id === taskId){
			element.timesheets.push(object);
		}
	});
	saveMockOnLocalStorage(retrievedObject);
	localStorage.setItem('mockTimeTables', JSON.stringify(retrievedObject));	
	console.log('Nuevo registro: ', retrievedObject);
};

//==========
export const getGraphData = ({taskList}) => {
	const sum = (accumulator, currentValue) => accumulator + currentValue; // time_spent
	//Llamada a API task por id, iterar en el timeSheet y sumar los timpos, para retornarlos en
	// un objeto {'taskName': suma}
	const data = JSON.parse(localStorage.getItem('mockTimeTables'));
	const graphData = [];
	console.log('data ', data); //id
	console.log('taskList ', taskList); //taskId

	for(let i=0; i < taskList.length; i++){
		const [element] = data.filter(item => item.id === taskList[i].taskId);
		console.log('element', '\n', element);
		/*if(element.length > 0) {
			let sum;
			for(let j=0; j < element.timesheets.length; j++) {
				sum += element.timesheets.time_spent;
			}
			console.log('name', element.timesheets[0].note);
			console.log('time ', sum);
		}*/
	}


	/*
	data.forEach((element, index) => {
		for(let i=0; i < taskList.length; i++){
			if(element.id === taskList[i].taskId){
				if(element.timesheets.length > 0) {
					const timeSum = element.timesheets.reduce(sum);
					const tempObject = {
						[taskList[i].taskName]: timeSum,
					}
					
					graphData.push(tempObject);
				}
			}
		}

	});
	console.log('********');
	console.log('graphData ', graphData);
	return graphData;*/
};