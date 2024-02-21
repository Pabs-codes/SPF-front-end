import React, {useCallback, useEffect, useState} from "react";
import {API_URL} from "../../configs/Configs";
import {useDispatch, useSelector} from "react-redux";
import * as statusActions from "../../store/actions/status";
import {fetchImage} from "../../store/actions/image";
import Loader from "react-loader-spinner";

const UserHistoryPage = () => {


    const dispatch = useDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const finishLoad = (msg) => {
        setTimeout(function () {
            setIsLoading(false);
        }, 5000);
    };
    const askImage = useCallback(() => {
        setError(null);
        setIsLoading(true);

        return dispatch(fetchImage())
            .then((response) => {

                finishLoad();
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            });
    }, [dispatch, setIsLoading, setError]);


    useEffect(() => {
        askImage();
    }, [dispatch, askImage]);



    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         // setImage(null);
    //         // deleteSpecificCache("https://drive.google.com/uc?export=view&id=1wpmwXZEmz2RZECdpF_JWOlDIBATCSj3J")
    //         setImage("https://drive.google.com/uc?export=view&id=1wpmwXZEmz2RZECdpF_JWOlDIBATCSj3J&cache=none");
    //     }, 1000);
    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);


    return (

        <React.Fragment>


            {/*{!isLoading && (*/}
            <section style={{height: "87vh"}}>
                <div className="container h-100">
                    <div className="row align-items-center" style={{height: "70vh"}}>
                        <div className="col-sm-8 section-heading">
                            <h2
                                className="text-uppercase"
                                data-aos={"fade-up"}
                                data-aos-delay={100}
                                data-aos-duration={700}
                            >
                                See Your Pet
                            </h2>
                            <h4
                                className="text-uppercase"
                                data-aos={"fade-up"}
                                data-aos-delay={200}
                                data-aos-duration={700}
                            >
                                {/*<Image key={Date.now()} source={{uri: <your local uri>}/>*/}


                            </h4>

                            {isLoading && (
                                // <div align="center" style={{paddingTop: 25, paddingBottom: 10}}>
                                <Loader type="ThreeDots" color="green" height={100} width={100}/>
                                // </div>
                            )}

                            {!isLoading && (<img key={Date.now()}
                                                 src="https://drive.google.com/uc?export=view&id=1wpmwXZEmz2RZECdpF_JWOlDIBATCSj3J&cache=none"
                                                 alt={"Image of your pet"}/>)}


                        </div>
                    </div>
                </div>
            </section>
            {/*)}*/}

        </React.Fragment>

    )
        ;
};

export default UserHistoryPage;
