
import { InputText } from 'primereact/inputtext';
import { Menubar } from 'primereact/menubar';
import React, { createRef, Fragment, useRef } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import Logo from '../../../assets/img/logo.png'
import './HeaderComponent.scss'


const HeaderComponent = (props: any) => {
    const { history } = props

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

    const start: any = <NavLink to='/' ><img alt="logo" src={Logo} height="60" className="p-mr-4 ml-4" /></NavLink>;
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

        // <div id='top-header' className="container-fluid row">
        //     <div className='col-12 p-menubar p-component'>
        //         {/* LOGO */}
        //         <div className="p-menubar-start">
        //             <Link to='/' >
        //                 <img alt="logo"
        //                     src={Logo}
        //                     className="logo p-mr-2" />
        //             </Link>
        //         </div>

        //         {/* MENU LIST ROOT */}
        //         <ul className="p-menubar-root-list" role="menubar">

        //             {/* CHOOSE LANG */}
        //             <li role="none" className="p-menuitem p-lang">

        //             </li>

        //             {/* DA SCOMMENTARE QUANDO NECESSARIO */}
        //             {/* LINK TO GOOGLE NEWS */}
        //             {/* <li role="none" className="p-menuitem">
        //                 <a href="https://www.google.com" role="menuitem" className="p-menuitem-link" target="_blank" aria-haspopup="false">
        //                     <span className="p-menuitem-icon">
        //                         <FaGoogle />
        //                     </span>
        //                 </a>
        //             </li> */}

        //             {/* DRAFT DROPDOWN */}
        //             <li role="none" className="p-menuitem p-menuitem-badge">
        //                 <span className="p-menuitem-link">
        //                     <span className="p-menuitem-text">
        //                         <span className="p-tag p-tag-rounded">Bozza {props.currentYear}</span>
        //                     </span>
        //                 </span>
        //             </li>

        //             {/* NOTIFICATION BELL */}
        //             <li role="none" className="p-menuitem">


        //             </li>


        //         </ul>

        //     </div>
        // </div >

    )

}

export default withRouter(HeaderComponent);