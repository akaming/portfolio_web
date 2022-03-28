import React, { ButtonHTMLAttributes, DetailedHTMLProps, InputHTMLAttributes, useState } from "react";
import styled from "styled-components"

type Props = {
    onClick?: React.MouseEventHandler;
    onChange?: React.ChangeEventHandler;
}

const ModeButton: React.FC<Props> = ({ onClick, onChange}) => {
    
    return (
        <ButtonBox onClick={onClick}>
            <ButtonCheckbox type="checkbox" onChange={onChange}/>
        </ButtonBox>
    )
}

export default ModeButton

const ButtonBox = styled.div`
    justify-content: left;
    align-items: center;
    display: flex;
    z-index: 0;
`

const ButtonCheckbox = styled.input`
   all: unset;
   z-index: 1;
   width: 80px;
   height: 32px;
   margin-top: 15px;
   background: #2e2e2e;
   border-radius: 20px;
   position: relative;
   line-height: 1;
   cursor: pointer;

    :before {
        content: '';
        position: absolute;
        width: 80px;
        height: 32px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        transition: all 0.2s ease-in-out;
    }
    &::after {
        position: relative;
        content: '';
        display: block;
        width: 25px;
        height: 25px;
        top: calc((32px - 25px) / 2);
        left: calc(80px - 29px);
        border-radius: 50%;
        transition: all 0.2s ease-in-out;
        background: url('/images/dark.png') center center / contain no-repeat;
    }

    &:checked {
        background: #fea331;
        transition: all 0.2s ease-in-out;

        :before {
            content: '';
            position: absolute;
            align-items: center;
            justify-content: flex-end;
        }

        :after {
            content: '';
            z-index: 2;
            top: calc((32px - 25px) / 2);
            left: calc((32px - 25px) / 2);
            width: 25px;
            height: 25px;
            display: block;
            border-radius: 50%;
            background-color: #fff;
            position: relative;
            background: url('/images/light.png') center center / contain no-repeat;
        }
    }
`