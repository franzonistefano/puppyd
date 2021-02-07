import ForgotContainer from "../containers/ForgotContainer";
import Home from "../containers/Home";
import HomeContainer from "../containers/HomeContainer";
import NotFoundContainer from "../containers/NotFoundContainer";
import RegisterContainer from "../containers/RegisterContainer";
import GetterContainer from "../containers/GetterContainer";

export const RouteList =
    [
        {
            "path": "/",
            "component": HomeContainer,
            "_private": false,
            "redirectTo": "",
            "children": [],
            "exact": true
        },
        {
            "path": "/register",
            "component": RegisterContainer,
            "_private": false,
            "redirectTo": "",
            "children": [],
            "exact": true
        },
        {
            "path": "/getter",
            "component": GetterContainer,
            "_private": false,
            "redirectTo": "",
            "children": [],
            "exact": true
        },
        //questa pagina deve rimanere sempre per ultimissima!
        {
            "path": "",
            "component": NotFoundContainer,
            "_private": false,
            "redirectTo": "",
            "children": [],
            "exact": true
        }
    ]