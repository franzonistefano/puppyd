
import { Menubar } from 'primereact/menubar';
import Logo from '../../assets/img/logo.png'

const HeaderComponent = (props: any) => {

    const start: any = <img alt="logo" src={Logo} height="60" className="p-mr-4" />;
    //const end = //<InputText placeholder="Search" type="text" />;

    return (

        // <Menubar start={start} className="header"/>
        <div id='Login' className="background-primary">

            <div className="container-fluid header">
                <div className='row full-height justify-content-center align-items-center'>

                    <img alt="logo" src={Logo} height="60" className="m-2" />

                </div>
            </div>

        </div>

    )

}

export default HeaderComponent;