import React from 'react';
import styled from 'styled-components';

const Mock = styled.div`
    height: 100px;
    width: 400px;
    background-color: #F8E47B;
    border-radius: 20px;
    margin: .5em;
`


const MockList = ({changeStatusTask}) => {

    return (
        <Mock>
            <button
            onClick={changeStatusTask}
            >
            start tempo
            </button>
        </Mock>
    );
}

export default MockList;