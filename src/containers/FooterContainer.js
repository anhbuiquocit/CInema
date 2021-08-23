import styled from "styled-components";
import { BetaCinema } from "../components/Foooter/BetaCinema";
import { ListCluster } from "../components/Foooter/ListCluster";
import { ConnectWithUs } from "../components/Foooter/ConnectWithUs";
import { Contact } from "../components/Foooter/Contact";
export const FooterContainer = () => {
    return (

        <div className="container mt-5">
            <div className="row">
                <div className="col col-md-2">
                   <BetaCinema/>
                </div>
                <div className="col col-md-5">
                   <ListCluster/>
                </div>
                <div className="col col-md-3">
                    <ConnectWithUs/>
                </div>
                <div className="col col-md-2">
                    <Contact/>
                </div>
            </div>
        </div>
    );

}