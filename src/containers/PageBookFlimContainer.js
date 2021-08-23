import React from 'react'
import { FlimBook } from '../components/FlimBook'
import styled from 'styled-components';
import  {ButtonCustom} from './../components/FormLogin/Button';
import { useSelector, useDispatch } from 'react-redux';
const Container = styled.div`
    margin-top: 100px;

    
    .button_book__col{
        display: flex;
        justify-content: flex-end;
        padding: 30px;
    }
`;

function PageBookFlimContainer() {
    const data = useSelector(state => state.flimClick);
    console.log(data);

    return (
        <Container className="container">

            <div className="row">

                <div className="col col-md-12">
                    <h3>ĐẶT VÉ</h3>
                </div>
            </div>
            <div className="row">
                <div className="col col-md-12">
                    <FlimBook data={data}/>
                 
                    
                </div>
            </div>
            <div className="row">
                <div className="col col-md-12 button_book__col">
                    <ButtonCustom content="Đặt vé" bgc="rgb(0, 132, 203) !important"/>
                </div>
            </div>
        </Container>
    )
}

export default PageBookFlimContainer
