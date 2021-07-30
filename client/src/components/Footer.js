import React from "react";
import "./Footer.css";

const Footer = (props) => {
    return (
        <div
            className={
                props.mobile ? "footer-container-mobile" : "footer-container"
            }
        >
            <div
                className={
                    props.mobile
                        ? "github-icon-container-mobile"
                        : "github-icon-container"
                }
                onClick={() => {
                    window.location.href =
                        "https://github.com/olivervz/spotify-toolbox";
                }}
            >
                <svg
                    viewBox="0 0 51 49"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={
                        props.mobile ? "github-icon-mobile" : "github-icon"
                    }
                >
                    <path d="M25.065 6.62286e-07C12.8324 -0.00157062 2.40458 8.86996 0.446038 20.9448C-1.5125 33.0197 5.57653 44.7324 17.1825 48.5975C18.4325 48.8225 18.88 48.055 18.88 47.395C18.88 46.8025 18.86 45.2325 18.8525 43.145C11.915 44.645 10.45 39.8 10.45 39.8C9.99333 38.2924 9.01148 36.9983 7.68254 36.1525C5.43254 34.605 7.85504 34.64 7.85504 34.64C9.45673 34.8596 10.8664 35.8086 11.6725 37.21C12.3549 38.4506 13.5044 39.3674 14.8658 39.7566C16.2272 40.1457 17.6876 39.9751 18.9225 39.2825C19.0386 38.0175 19.6014 36.8352 20.51 35.9475C14.975 35.32 9.15504 33.18 9.15504 23.6225C9.12432 21.1505 10.0423 18.7607 11.72 16.945C10.9609 14.7933 11.0503 12.4331 11.97 10.345C11.97 10.345 14.0625 9.6725 18.825 12.8975C22.9097 11.7775 27.2204 11.7775 31.305 12.8975C36.07 9.67 38.16 10.345 38.16 10.345C39.084 12.4321 39.1735 14.7939 38.41 16.945C40.0939 18.7606 41.0111 21.1566 40.97 23.6325C40.97 33.215 35.145 35.32 29.59 35.9375C30.7883 37.1626 31.4029 38.8433 31.2775 40.5525C31.2775 43.8875 31.2475 46.5775 31.2475 47.395C31.2475 48.0625 31.6925 48.8375 32.965 48.5925C44.5662 44.7209 51.6476 33.0074 49.6851 20.9358C47.7225 8.86413 37.2952 -0.00279793 25.065 6.62286e-07Z" />
                </svg>
            </div>
            <div
                className={
                    props.mobile ? "footer-links-mobile" : "footer-links"
                }
            >
                <h6
                    className={
                        props.mobile ? "footer-first-mobile" : "footer-first"
                    }
                    onClick={() => {
                        window.location.href =
                            process.env.REACT_APP_BASE_URL + "/" + props.first;
                    }}
                >
                    {props.first}
                </h6>
                <h6
                    className={
                        props.mobile ? "footer-second-mobile" : "footer-second"
                    }
                    onClick={() => {
                        window.location.href =
                            process.env.REACT_APP_BASE_URL + "/" + props.second;
                    }}
                >
                    {props.second}
                </h6>
            </div>
        </div>
    );
};

export default Footer;
