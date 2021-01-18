
import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';
import React, { createRef, Fragment, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/img/logo.png'


const HeaderComponent = (props: any) => {
    
    const items = [
        {
            label: 'Home',
            url: '/'
        },
        {
            label: 'Getter',
            url: '/getter'
        },
        {
            label: 'Register',
            url: '/register'
        }
    ];

    const start: any = <img alt="logo" src={Logo} height="60" className="p-mr-4 ml-4" />;
    //const end = //<InputText placeholder="Search" type="text" />;

    //const start:any = <img alt={Logo} src="showcase/images/logo.png" onError={(e:any) => e.target.src='https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} height="40" className="p-mr-2"></img>;
    //const end:any = <InputText placeholder="Search" type="text" />;

    return (

        // <Menubar start={start} className="header"/>
        // <div id='Login' className="background-primary">

        //     <div className="container-fluid header">
        //         <div className='row full-height justify-content-center align-items-center'>

        //             <img alt="logo" src={Logo} height="60" className="m-2" />

        //         </div>
        //     </div>

        // </div>

        <div className="header">
            <div className="card">
                <Menubar model={items} start={start} />
            </div>
        </div>

    )

}

export default HeaderComponent;