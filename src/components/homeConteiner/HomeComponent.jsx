import React, { useState, useEffect, useContext }from 'react';
import * as HomeComponent from './StyleHomeComponent';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { blueGrey } from '@material-ui/core/colors';
import Loader from 'react-loader';

import { getTaskDataByStaffId } from '../../controller/webServices';
import ViewTask from '../viewTaskContainer/ViewTask';
// import { auth } from '';

/* [Sprint 1] VistaHome. 
const { staffID } = useContext(auth); 
const [taskList, setTaskList] = useState([]); 

useEffect(() => {}, [staffID]); => 
Llamada a API para obtener todos los proyectos en los que participa nuestro usuario. 
Esta informacion se guarda en projectList. Despues realiza una llamada a API para sacar
las tareas asignadas al usuario en el projectList[0] y las almacena en taskList. 
Usando el context de Auth almacena el nombre de usuario en staffName.

 [Sprint 2] const [projectList, setProjectList] = useState([]);  

 [Sprint 3] const [view, setView] = useState(‘viewTask’); 
 // viewTask || viewGraph 

 const [taskInProgress, setTaskInProgress] = useState(false);
 const staffName; 
 const tempoHandler = (type) ={ //Push time data to API }; 
 const taskStatusHandler = (newStatus) => {// Actualizar el estado de la tarea en API, 
 activar un reacarga de data, setTaskList } */
const projectListMock = [
	{ 
		id:1,
		name: 'Proyecto #1',
		tasks: {
			name:'Task project 1'
		}
	},
	{
		id:2,
		name: 'Proyecto #2',
		tasks: {
			name:'Task project 2'
		}
	},
	{	
		id:3,
		name: 'Proyecto #3',
		tasks: {
			name:'Task project 2'
		}
	},
	{
		id:4,
		name: 'Proyecto #4',
		tasks: {
			name:'Task project 2'
		}
	}
]



const Home = () => {
	const classes = useStyles();
	const [projectList, setProjectList] = useState(projectListMock);  
	const [taskList, setTaskList] = useState([
		{
			description: "es una tarea con mas descripción",
			priority: "1",
			status: "2",
			taskId: "53",
			taskName: "nueva tarea 14",
		},
		{
			description: "es una tarea con mas descripción",
			priority: "1",
			status: "2",
			taskId: "54",
			taskName: "nueva tarea 20",
		}
	]); 
	const [taskInProgress, setTaskInProgress] = useState(false);
	const [hideLoader, setHideLoader] = useState(true);	
	// const { staffID } = useContext(auth);
	// getTaskDataByStaffId
	const staffID = 1;
	const [staffData, setStaffData] = useState({
		firstname: "Gabriela",
		full_name: "Gabriela J",
		staffid: "1",
	}); 
	console.log('taskList', taskList);
	console.log('projectList', projectList);
	console.log('staffData', staffData);

	/*
	useEffect(() => {
		setHideLoader(false);
		// obtengo un objeto de la base de datos (API)
		getTaskDataByStaffId(staffID)
			.then(data => {
				setProjectList(data.projectList);
				console.log(data.taskList);
				setTaskList(data.taskList);
				setStaffData(data.staffData);
			}).then(() => {
				setHideLoader(true);
			})
			.catch(error => console.log('error', error));

		/*if (staffID) {
			const unsubscribe = (() => {
				settaskList();
				setLoaded(true)
			});
			return unsubscribe; 
		} else {
			return <Redirect to='/' />;
		}   
	}, [staffID]);
	*/

	const tempoHandler = (type) => {
		console.log('hola soy el tampo handle llamado por: ', type);
	}

	const taskStatusHandler = () => {
		console.log('hola soy taskStatusHandler');
	}


	return(
		<div>
			<HomeComponent.ScreenContainer>
				<HomeComponent.HomeContainer>
					<HomeComponent.Header> 
						<h1>{staffData.firstname ? "Bienvenido, " + staffData.firstname + '!' : null}</h1>
					</HomeComponent.Header>
					<HomeComponent.DivisionBar>
						<FormControl className={classes.formControl}>
							{/* <InputLabel  style={{ color: blueGrey[900] }}  id="demo-simple-select-label">Proyectos</InputLabel> */}
							<Select
								labelId="demo-simple-select-label"
								id="demo-simple-select"
							>									
								{projectList.map(project => (
									<MenuItem
										as="button"
										key={project.projectId}
										value={project.projectId}>
										{project.projectName}
									</MenuItem>
								))}		 
							</Select>
						</FormControl>
					</HomeComponent.DivisionBar>
					<ViewTask taskList={taskList} tempoHandler={tempoHandler} taskStatusHandler={taskStatusHandler} />									
				</HomeComponent.HomeContainer>
				<div>
					<Loader 
						loaded={hideLoader}
						lines={20}
						color="#4997B4"
						radius={30}
						length={20}
					/>	
				</div>		
			</HomeComponent.ScreenContainer>
		</div>
	)

};
const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		minWidth: 170,
		backgroundColor:' #ffff',
	},
}));

export default Home;
