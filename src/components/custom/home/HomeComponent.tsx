import '../Login/LoginComponent.scss';
import '../../../assets/theme/custom-theme.scss'
import React, { useEffect } from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import WhyImg from '../../../assets/img/why.png'
import HowImg from '../../../assets/img/how2.png'
import Feature1 from '../../../assets/img/feature/feature1.png'
import Feature2 from '../../../assets/img/feature/feature2.png'
import Feature3 from '../../../assets/img/feature/feature3.png'
import { injectIntl } from 'react-intl';

const HomeComponent = (props: any) => {

    const intl = { props }

    const events1 = [
        { status: 'Scarica Metamask', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#F8D6B9', image: 'game-controller.jpg' },
        { status: 'Registrati', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#F8D6B9' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#F8D6B9' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#F8D6B9' }
    ];

    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const customizedMarker = (item: any) => {
        return (
            <span className="custom-marker p-shadow-2" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

    const customizedContent = (item: any) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                { item.image && <img src={`showcase/demo/images/product/${item.image}`} onError={(e: any) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} alt={item.name} width={200} className="p-shadow-2" />}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
                    quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!</p>
                <Button label="Read more" className="p-button-text"></Button>
            </Card>
        );
    };


    const featureContent = (imgPath: any, title?: string, subTitle?: string) => { //title: string, percentage: number
        return (
            <motion.div whileHover={{ scale: 1.2 }} >
                <Card>

                    <div className="container">
                        <div className="row justify-content-center align-items-center">

                            <div className="col-12 p-2">
                                <img src={imgPath} className="img-size" />
                            </div>

                            <div className="col-12 p-2">
                                <div className="row justify-content-center">
                                    <h2 className="bold">{title}</h2>
                                </div>
                                <div className="row justify-content-center">
                                    <h4>{subTitle}</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </Card >
            </motion.div>
        );
    };


    return (
        <div id='Login'>
            <div className="background-img">
                <div className="background-opacity">
                    <div className="container custom-container">
                        <div className='row full-height justify-content-center align-items-center'>

                            <div className='col-lg-8 col-md-12 justify-content-center text-center align-items-center full-height'>

                                <div className="main-title">Il primo registro di animali su Blockchain</div>
                                <div className="sub-title">Sicuro, Semplice e Trasparente. Per padroni e veterinari</div>

                            </div>


                        </div>
                    </div>
                </div>
            </div>

            {/* Why */}
            <div className="background-primary" id="#why">
                <div className="container">
                    <div className='row justify-content-around align-items-center  pt-4 pb-4'>

                        <div className='col-lg-4 col-md-12 justify-content-center text-center align-items-center full-height'>

                            <motion.div
                                ref={ref}
                                animate={controls}
                                initial="hidden"
                                variants={{
                                    visible: { opacity: 1, x: 0 },
                                    hidden: { opacity: 0, x: -300 }
                                }}
                            >
                                <div className='row justify-content-start align-items-center'>
                                    <div className="main-title">Perchè ?</div>
                                    <div className="sub-paragraph">Grazie alla tecnologia Blockchain è possibile garantire la totale trasparenza e tracciabilità dei dati sugli animali</div>
                                    <p></p>
                                </div>
                            </motion.div>

                        </div>

                        <div className='col-lg-6 col-md-12 justify-content-end text-center align-items-center full-height'>

                            <motion.div
                                ref={ref}
                                animate={controls}
                                initial="hidden"
                                variants={{
                                    visible: { opacity: 1, x: 0 },
                                    hidden: { opacity: 0, x: 300 }
                                }}
                            >
                                <img src={WhyImg} className="img-size"></img>
                            </motion.div>

                        </div>


                    </div>
                </div>
            </div>

            {/* How */}
            <div className="background-primary" id="#why">
                <div className="container">
                    <div className='row justify-content-around align-items-center  pt-4 pb-4'>

                        <div className='col-lg-6 col-md-12 justify-content-center text-center align-items-center full-height'>

                            <motion.div
                                ref={ref}
                                animate={controls}
                                initial="hidden"
                                variants={{
                                    visible: { opacity: 1, x: 0 },
                                    hidden: { opacity: 0, x: -300 }
                                }}
                            >
                                <img src={HowImg} className="img-size"></img>
                            </motion.div>

                        </div>

                        <div className='col-lg-4 order-first order-md-last col-md-12 justify-content-end text-center align-items-center full-height'>

                            <motion.div
                                ref={ref}
                                animate={controls}
                                initial="hidden"
                                variants={{
                                    visible: { opacity: 1, x: 0 },
                                    hidden: { opacity: 0, x: 300 }
                                }}
                            >
                                <div className='row justify-content-start align-items-center'>
                                    <div className="main-title">Come ?</div>
                                    <div className="sub-paragraph">Grazie allo sviluppo di Smart Contract</div>
                                    <p></p>
                                </div>

                            </motion.div>

                        </div>


                    </div>
                </div>
            </div>

            {/* Features */}
            <div className="background-primary" id="#why">
                <div className="container">

                    <div className="row justify-content-around bordered-card  pt-4 pb-4">

                        <div className="col-lg-3 col-sm-10 p-1">
                            {featureContent(Feature1, "Gestione dei dati", "Trasparente e organizzata. Accesso istantaneo allo storico delle visite e libretto sanitario dell'animale. Utile per il veterinario, i padroni e le associazioni.")}
                        </div>


                        <div className="col-lg-3 col-sm-10 p-1">
                            {featureContent(Feature2, "Tracciabilità", "In caso di smarrimento o di trasferimento dell'animale sarà più semplice risalire ai dati ad esso collegati. Ogni animale avrà un QRCode personale contenente tutti i dati salvati su Blockchain.")}
                        </div>


                        <div className="col-lg-3 col-sm-10 p-1">
                            {featureContent(Feature3, "Genealogia", "Garantendo trasparenza e tracciabilità dell'animale si facilita la costruzione della genealogia dello stesso. Oltre a migliorare significativamente la prevenzione nei confronti di eventuali patologie ereditarie.")}
                        </div>

                    </div>

                </div>
            </div>

            {/* How it works */}
            <div className="background-primary">
                <div className="container">
                    <div className='row justify-content-center align-items-center'>

                        <div className='col-lg-12 col-md-12 justify-content-center text-center align-items-center'>

                            <div className='row justify-content-center align-items-center'>
                                <div className="main-title">Come Funziona ?</div>
                            </div>

                            <div className="bordered-card">
                                <Timeline value={events1} align="alternate" marker={customizedMarker} content={customizedContent} />
                            </div>

                        </div>


                    </div>
                </div>
            </div>


        </div >

    )
};

export default injectIntl(HomeComponent);