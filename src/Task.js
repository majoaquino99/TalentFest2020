import React from 'react';
import styled from 'styled-components';

import { FaPlay, FaStop, FaPause } from 'react-icons/fa';

const ContainerStyle = styled.article`
    width: 600px;
    border-radius:15px;
    height: fit-content;
    box-shadow: 2px 1px 5px 0px rgba(0,0,0,0.75);
    padding:1rem;
    background-color: ${(props) => props.bgColor };
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin:0 auto;
`
const Icon = styled.div`
    padding:0 9px;
    font-size:40px;
    display: ${(props) => props.display};
    color: ${(props) => props.color};
`
const Titles = styled.div`
    color:#002633;
`
const ContainerPlayer = styled.div`
    height:80px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`
const Player = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    min-width: 150px;
`

const Title = styled.h3`
    text-align:left;
    padding:0;
    margin:0;
`

const Subtitle = styled.h4`
    padding:0;
    text-align:left;
    margin:0;
`

function Task ( {
	taskInfo, isActive, inActive, tempoHandler, taskStatusHandler
} ){

	return(
		<ContainerStyle bgColor={ isActive ? '#F8E47B': '#FFFFFF'}>
			<Titles>
				<Title>{taskInfo.title}</Title>
				<Subtitle>{taskInfo.priority}</Subtitle>
			</Titles>
			<ContainerPlayer>
				<Player>
					<Icon 
						display={isActive ? 'none': 'block'}
						color={inActive ?   '#C4C4C4' : '#F8E47B'}
					><FaPlay/>
					</Icon>
					<Icon
						display={isActive ? 'block': 'none'}
						color={inActive ? '#C4C4C4' : '#002633'}
					><FaPause/>
					</Icon>
					<Icon 
						display={isActive ? 'block': 'none'}
						color={inActive ? '#C4C4C4' : '#002633'}
					><FaStop/>
					</Icon>
				</Player>
				<select
				>
					<option value="project1">project1</option>
					<option value="project2">project2</option>                    
				</select>
			</ContainerPlayer> 
		</ContainerStyle>
	)

}
export default Task;