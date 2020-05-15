import React, { useState } from 'react';
import Timer from 'react-compound-timer';
import MockTask from '../components/mockComponent';
import styled from 'styled-components';

const Container = styled.div`
    text-align: center;
    width: 600px;
    height: 500px;
    display: flex;
    flex-flow: wrap column;
    align-self: baseline
`
const ActiveTaskArea = styled.div`
    height: 100px;
`
const TaskListArea = styled.div`
    height: 400px;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
`

const ViewTask = () => {
    const [taskIsActive, setTaskIsActive] = useState(false);
    const normalTask = [];
    const activeTask = [];

    const changeStatusTask = () => {
        setTaskIsActive(true);
    }

    return (
            <Container>

                <ActiveTaskArea>
                    <Timer initialTime={0}
                    startImmediately={false}
                    formatValue={(value) => 
                    `${(value < 10 ? `0${value}` : value)}`}
                    >
                        {({ start, resume, pause, stop, reset }) => (
                            <>
                            <div>Tiempo transcurrido</div>
                            <div>
                                <Timer.Hours />: 
                                <Timer.Minutes />:
                                <Timer.Seconds />
                            </div>
                            <br />
                            <div>
                                <button onClick={start}>Start</button>
                                <button onClick={pause}>Pause</button>
                                <button onClick={resume}>Resume</button>
                                <button onClick={stop}>Stop</button>
                                <button onClick={reset}>Reset</button>
                            </div>
                            </>
                        )}
                        </Timer>
                </ActiveTaskArea>
                <TaskListArea>
                    {console.log(taskIsActive)}
                    <MockTask changeStatusTask={changeStatusTask}></MockTask>
                    //Aqui va componente de Geo reemplazando MockTask
                </TaskListArea>
            </Container>
    );
}

export default ViewTask;