import React from 'react';
import styled from 'styled-components';
import { Spinner } from 'native-base';
import {View, Text} from 'react-native';

const Wrapper = styled.View`
    position: absolute;
    height: 100%;
    width: 100%;
    background: rgba(0,0,0,0.8);
    align-items: center;
    justify-content: center;
    elevation: 5;
`;

const Loader = ({text}) => {
    return (
        <Wrapper>
            <Spinner color='#00495A'/>
            <Text style={{color: '#fff'}}> {text} </Text>
        </Wrapper>
    )
}

export default Loader;
