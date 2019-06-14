import FormInscription from './components/FormInscription'
import FormForgottenPass from './components/FormForgottenPass'
import LoginPage from "./components/LoginPage";
import Navbar from "./components/Navbar";


const routes = [
    { path: '/inscription', component: FormInscription },
    { path: '/forgetPass', component: FormForgottenPass },
    { path: '/login', component: LoginPage},
    { path: '/dashboard', component: Navbar}
];


export default routes;