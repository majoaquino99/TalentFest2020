import styled from 'styled-components';

const ScreenContainer = styled.div`
	background: #002633;
	position: absolute;
	top: 0px;
	left: 0px;
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const HomeContainer = styled.div`
    background-color:#FFFFFF;
	min-height: 100vh;
	width: 600px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
const Header = styled.div`
	background-color: white;
    width: 600px;
    height: 64px;
    display: flex;
    flex-direction: row !important;
	justify-content:  space-between;
    align-items: center;
    >h1{
        color: black;
        font-size: 20px;
        margin: 5px 20px 5px
    };
`;
 
const DivisionBar = styled.div`
    background: #FBD104;
    width: 600px;
    height: 60px;
    display: flex;
    flex-direction: row !important;
    justify-content: center;
    align-items: center;
`;

const TasksContainer = styled.div`
	height: fit-content;
	background-color: transparent;
	padding: 15px;
	display: grid;
	grid-gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
`;




export { ScreenContainer, HomeContainer, Header, DivisionBar, TasksContainer};