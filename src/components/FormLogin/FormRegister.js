import styled from "styled-components";
import { ButtonCustom } from "./Button";
import { Opacityanm } from "../animations";
const FormContainer = styled.form`
    padding: 45px 15px;
    background-color: #ffff;
    animation: ${Opacityanm} linear .5s;
`;
const FormContentContainer = styled.form`
    display: flex;
    flex-direction: column;
`;
const InputContainer = styled.div`
    
    display: flex;
    /* flex-direction: column; */
    padding: 15px 7px;
`;
const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    
    align-items: center;
    
   *:nth-child(2){
        margin-top: 25px;
   }
`;
export const FormRegister = () => {
    return (
        <FormContainer>
            <FormContentContainer class="form-inline">
                <InputContainer class="input-group mb-2 mr-sm-2 mt-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fas fa-envelope-square"></i></div>
                    </div>
                    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Email" />
                </InputContainer>

                <InputContainer class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fas fa-unlock-alt"></i></div>
                    </div>
                    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Mật khẩu" />
                </InputContainer>
                <InputContainer class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fas fa-unlock-alt"></i></div>
                    </div>
                    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Xác nhận lại mật khẩu" />
                </InputContainer>

                <InputContainer class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fas fa-table"></i></div>
                    </div>
                    <input type="datetime-local" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Ngày sinh" />
                </InputContainer>
                <InputContainer class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fas fa-venus-mars"></i></div>
                    </div>
                    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Giới tính" />
                </InputContainer>

                <InputContainer class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                        <div class="input-group-text"><i class="fas fa-phone-volume"></i></div>
                    </div>
                    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Số diện thoại" />
                </InputContainer>
                <ButtonContainer>
                    <ButtonCustom type="submit" content="Đăng ký" bgi="linear-gradient(to right, #fc3606 0%, #fda085 51%, #fc7704 100%) !important" />
                    <ButtonCustom type="submit" content="Đăng nhập bằng Facebook" bwidth="350px" bgi="linear-gradient(to right, #0a64a7 0%, #258dcf 51%, #3db1f3 100%) !important"/>
                </ButtonContainer>
            </FormContentContainer>
        </FormContainer>
    );
}