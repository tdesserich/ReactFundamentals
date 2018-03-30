import React, { Component } from 'react';
import styled from 'styled-components';
import { Form } from './Form';

const Wrapper = styled.div`
  background: #dbdbdb;
`;


export default class MovieApp extends Component {
    render() {
        return (
            <Wrapper className="main">
                <div className="mainDiv">
                    <Form />
                </div>
            </Wrapper>
        );
    }
}