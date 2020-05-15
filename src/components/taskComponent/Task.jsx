import React, { useState } from 'react';
import styled from 'styled-components';


import { FaPlay, FaStop, FaPause } from 'react-icons/fa';

const ContainerStyle = styled.article`
    width: 500px;
    border-radius:15px;
    height: fit-content;
    box-shadow: 2px 1px 5px 0px rgba(0,0,0,0.75);
    padding:1rem;
    background-color: ${(props) => props.bgColor };
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin:5px;
`;
const Icon = styled.div`
	padding:0 9px;
	margin-bottom: 5px;
    font-size:40px;
    display: ${(props) => props.display};
    color: ${(props) => props.color};
`;
const Titles = styled.div`
	flex:2;
    color:#002633;
`;
const ContainerPlayer = styled.div`
    height:80px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
	flex: 1;
`;
const Player = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    min-width: 150px;
`;

const Title = styled.h4`
    text-align:left;
    padding:0;
    margin:0;
`;

const Subtitle = styled.h4`
    padding:0;
    text-align:left;
	margin:0;
`;

function Task ( {
	taskInfo, isActive, inActive, tempoHandler, timerHandler, taskStatusHandler, blockingHandler
} ){

	const [flag, setFlag] = useState(isActive);
	
	return(
		<ContainerStyle bgColor={ isActive ? '#F8E47B': '#FFFFFF'}>
			<Titles>
				<Title>
					{taskInfo.taskName }
				</Title>
				<Subtitle>
					{'Prioridad: ' + taskInfo.priority}
				</Subtitle>
			</Titles>
			<ContainerPlayer>
				<Player>
					{flag 
						? <Icon
						// display={isActive ? 'block': 'none'}
							display="block"
							color="#002633"
							onClick={() => {
								setFlag(false);
								timerHandler.pause(); 
								tempoHandler('pause', taskInfo.taskId);
								blockingHandler(false);
							}}
						><FaPause/>
						</Icon>
						: <Icon 
						// display={isActive ? 'none': 'block'}
							display="block"
							color={isActive ?   '#002633' : '#FBD104'}
							onClick={() => {
								setFlag(true);
								timerHandler.start();
								taskStatusHandler(taskInfo.taskId);
								tempoHandler('start', taskInfo.taskId);
								blockingHandler(true);
							}}
						><FaPlay/>
						</Icon>}
					<Icon 
						display={isActive ? 'block': 'none'}
						color={inActive ? '#C4C4C4' : '#002633'}
						onClick={() => {
							timerHandler.stop();
							timerHandler.reset();
							taskStatusHandler(-1);
							tempoHandler('stop', taskInfo.taskId);
							blockingHandler(false);
						}}
					><FaStop/>
					</Icon>
				</Player>
				{/* <select>
					<option value="project1">project1</option>
					<option value="project2">project2</option>                    
				</select> */}
			</ContainerPlayer> 
		</ContainerStyle>
	)

}
export default Task;