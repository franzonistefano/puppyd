import '../Login/LoginComponent.scss';
import '../../../assets/theme/custom-theme.scss'
import React from 'react';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import 'primeicons/primeicons.css';

const HomeComponent = (props: any) => {

    const events1 = [
        { status: 'Scarica Metamask', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#F8D6B9', image: 'game-controller.jpg' },
        { status: 'Registrati', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#F8D6B9' },
        { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#F8D6B9' },
        { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#F8D6B9' }
    ];

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

            {/* Perchè */}
            <div className="background-primary">
                <div className="container">
                    <div className='row justify-content-center align-items-center'>

                        <div className='col-lg-4 col-md-12 justify-content-center text-center align-items-center full-height'>

                            <div className='row justify-content-start align-items-center'>
                                <div className="main-title">Perchè ?</div>
                                <div className="sub-title">Grazie alla tecnologia Blockchain è possibile garantire 
                                la totale trasparenza e tracciabilità dei dati sugli animali</div>
                                <p></p>
                            </div>

                        </div>

                        <div className='col-lg-4 col-md-12 justify-content-center text-center align-items-center full-height'>

                            <img></img>

                        </div>


                    </div>
                </div>
            </div>

            {/* How it works */}
            <div className="background-primary">
                <div className="container">
                    <div className='row full-height justify-content-center align-items-center'>

                        <div className='col-lg-12 col-md-12 justify-content-center text-center align-items-center full-height'>

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


        </div>

    )
};

export default HomeComponent;