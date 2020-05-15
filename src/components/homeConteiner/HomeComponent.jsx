import React, { useState, useEffect, useContext }from 'react';
import * as HomeComponent from './StyleHomeComponent';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { blueGrey } from '@material-ui/core/colors';
import Loader from 'react-loader';
import moment from 'moment';

import {
	saveMockOnLocalStorage,
	setTimeSheet,
	getGraphData } from '../../controller/webServices';
import mockData from '../../controller/mockData';
import ViewTask from '../viewTaskContainer/ViewTask';
import graphics from '../../assets/icons/graphic-logo.svg';
import home from '../../assets/icons/home-logo.svg';
import IconButton from '../../../node_modules/@material-ui/core/IconButton';
import Graphic from '../GraphicContainer/GraphicComponent';

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
	const [_taskList, _projectList, _staffData] = mockData;
	const classes = useStyles();
	const [projectList, setProjectList] = useState(_projectList.projectList);  
	const [view, setView] = useState(false);
	const [taskList, setTaskList] = useState(_taskList.taskList);
	const [graphdata, setGraphdata] = useState();
	const CONSTANTE = 1;
	//staffData.staffid
	const [staffData, setStaffData] = useState(_staffData.staffData);
	const [taskInProgress, setTaskInProgress] = useState(-1);
	const [timeHandler, setTimeHandler] = useState({});
	const [hideLoader, setHideLoader] = useState(true);	
	// console.log('taskList', taskList);
	// console.log('projectList', projectList);
	// console.log('staffData', staffData);

	useEffect(() => {
		saveMockOnLocalStorage();
		// setGraphdata(getGraphData(taskList));
		//TODO: Bloque de consumo de API, no se uso por problema con cantidad de llamdas permitidas al servidor
		/*
		getMockData().then(mockData => {
			
			setProjectList(_projectList);
			console.log(_taskList);
			setTaskList(_taskList);
			setStaffData(_staffData);
		}).catch(error => console.log('error', error));
		*/
		
		/*
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
		}   */
	}, [CONSTANTE]);

	const taskStatusHandler = (taskId) => {
		setTaskInProgress(taskId);
	}

	const timestampStart = (taskId) => {
		const now = moment().format('X');
		const timeObject = {
			"id": staffData.staffid,
			"note": "Hola mundo",
			"start_time": now,
			"end_time": null,
			"task_id": taskId,
			"staff_id": "1",
			"full_name": "Gabriela J",
			"time_spent": "0"
		}		
		setTimeHandler(timeObject);
	};

	const timestampEnd = (taskId) => {	
		if(timeHandler.id){
			const later = moment().format('X');
			const timeObject = {};
			Object.assign(timeObject, timeHandler);
			timeObject.end_time = later;
			const timeCalc = moment(later, 'X').diff(moment(timeObject.start_time, 'X'), 'seconds');
			timeObject.time_spent = '' + timeCalc;
			// console.log(timeObject);
			//Guardar en API
			setTimeSheet(timeObject, taskId);
			setTimeHandler({});
		}		
	};

	const tempoHandler = (type, taskId) => {
		switch(type){
			case 'start':
				timestampStart(taskId);
				break;
			case 'pause':
			case 'stop':
				timestampEnd(taskId);
				break;
			default:
		}
	}


	/*
	const goBack = () => {
		const aux = view - 1;
		setView(aux);
	};
	*/


	return(
		<>
			<div>		
				<HomeComponent.ScreenContainer>
					<HomeComponent.HomeContainer>
						<HomeComponent.Header> 
							<h1>{staffData.firstname ? "Bienvenido, " + staffData.firstname + '!' : null}</h1>
							<IconButton
								name = 'Graphics'
								value = 'Graphics'
								onClick = {() => setView(!view)}
							> 
								<img                        
									src = {view === false ? graphics : home} 
									alt= 'graphics'
									height='40'
									width='40'
								/> 
							</IconButton>
						</HomeComponent.Header>
						<HomeComponent.DivisionBar>
							<FormControl className={classes.formControl}>
								{/* <InputLabel  style={{ color: blueGrey[900] }}  id="demo-simple-select-label">Proyectos</InputLabel> */}
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
								>									
									{projectList.map((project, index) => (
										<MenuItem
											as="button"
											key={index}
											value={project.projectId}>
											{project.projectName}
										</MenuItem>
									))}		 
								</Select>
							</FormControl>
						</HomeComponent.DivisionBar>
						{view === false
							?( <ViewTask
								taskList={taskList}
								tempoHandler={tempoHandler}
								taskStatusHandler={taskStatusHandler}
							/> )	
							: null
						}
						{view === true
							?(<div>
								<Graphic
									taskList={taskList}
								/>
							</div>)
							: null
						}			
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

				
			
			
		</>
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
