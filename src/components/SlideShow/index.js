import React, { PureComponent } from 'react'

export const SlideShow = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="https://files.betacorp.vn/files/ecm/2021/04/29/1702x621-nhap-ma-shopee-135625-290421-93.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://files.betacorp.vn/files/ecm/2021/07/17/300621-nhuong-quyen-1702x621-01-1-182121-020721-85-161350-170721-45.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://files.betacorp.vn/files/ecm/2021/04/29/1702x621-nhap-ma-shopee-135625-290421-93.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}