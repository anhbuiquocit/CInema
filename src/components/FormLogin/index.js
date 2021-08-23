import styled from 'styled-components';
import { TextField, Button } from '@material-ui/core';
import { Opacityanm } from '../animations';
const StyledFormContainer = styled.div`
    background-color: #ffff;
    display: flex;
    animation: ${Opacityanm} linear .5s;
`;
const FormContainer = styled.form`
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    & a{
        margin-top: 10px;
        
    }
    .styledButton{
        margin: 20px 0;
    }
`;

const InputContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 15px 0;
    .input{
        min-width: 300px;
        
    }
    i{
        font-size: 1.3rem;
        color: rgb(0, 132, 203);
        padding: 19px 10px 0 0 ;
    }
`;
export const FormLogin = () => {
    return (
        <StyledFormContainer>
            <FormContainer>

                <InputContainer>
                    <i class="fas fa-user"></i>
                    <TextField className="input" label="username" name="inputUsername" />
                </InputContainer>


                <InputContainer>
                    <i class="fas fa-unlock-alt"></i>
                    <TextField className="input" label="password" name="inputPassword" type="password" />
                </InputContainer>

                <a href="#">Quên mật khẩu?</a>

                <Button className="styledButton" variant="contained" color="secondary">ĐĂNG NHẬP BẰNG TÀI KHOẢN</Button>
                <Button className="styledButton" variant="contained" color="primary">
                    ĐĂNG NHẬP BẰNG FACEBOOK
                </Button>
            </FormContainer>
        </StyledFormContainer>
    );
}