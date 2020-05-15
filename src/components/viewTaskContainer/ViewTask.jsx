import React, { useState } from 'react';
import Timer from 'react-compound-timer';
import styled from 'styled-components';
import Task from '../taskComponent/Task';
import BlockUi from 'react-block-ui';
import 'react-block-ui/style.css';

const Container = styled.div`
    text-align: center;
    width: 600px;
    height: 100%;
    display: flex;
    flex-flow: wrap column;
    align-self: baseline;
`;

const ActiveTaskArea = styled.div`
	display: flex;
	flex-flow: column wrap;
	align-items: center;
	flex: 1;
	height: 100px;
`;

const TaskListArea = styled.div`
	flex:2;
    height: 400px;
    display: flex;
    flex-flow: column wrap;
	align-items: center;
	padding-top: 20px;
`;

const ViewTask = ({taskList, tempoHandler, taskStatusHandler}) => {
	const [taskIsActive, setTaskIsActive] = useState(-1);
	const normalTask = [];
	const activeTask = [];
	const [blocking, setBlocking] = useState(false);


	const changeStatusTask = (status) => {
		setTaskIsActive(status);
	}

	taskList.forEach((element) => {
		if(taskIsActive === element.taskId){
			activeTask.push(element);
		} else {
			normalTask.push(element);
		}
	})

	return (
		<Container>
			<Timer initialTime={0}
				startImmediately={false}
				formatValue={(value) => 
					`${(value < 10 ? `0${value}` : value)}`}
			>
				{({ start, resume, pause, stop, reset }) => (
					<>
						{taskIsActive > -1 ?
							<ActiveTaskArea>
								<div>Tiempo transcurrido</div>
								<h1>
									<Timer.Hours />: 
									<Timer.Minutes />:
									<Timer.Seconds />
								</h1>
								{ activeTask.map(element => {
									return (<Task 
										key={element.taskId} 
										taskInfo={element} 
										isActive={true}
										tempoHandler={tempoHandler} 
										timerHandler={{ start, resume, pause, stop, reset}} 
										taskStatusHandler={changeStatusTask}
										blockingHandler={setBlocking}>
									</Task>);						
								})}
							</ActiveTaskArea> 
							: null
						}
						<BlockUi tag="div" blocking={blocking}>
							<TaskListArea>
								{ normalTask.map(element => {
									return (<Task 
										key={element.taskId} 
										taskInfo={element} 
										isActive={false}
										tempoHandler={tempoHandler} 
										timerHandler={{ start, resume, pause, stop, reset}} 
										taskStatusHandler={changeStatusTask}
										blockingHandler={setBlocking}>
									</Task>);						
								})}
							</TaskListArea>
						</BlockUi>
					</>
				)}
			</Timer>
			
		</Container>
	);
}

export default ViewTask;