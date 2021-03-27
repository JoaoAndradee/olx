import Cokkies from 'js-cookie';

export const isLogged = () => {
    let token = Cokkies.get('token');
    return (token) ? true : false;
}