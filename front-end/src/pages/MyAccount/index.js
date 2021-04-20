import React from 'react';
import {Link} from 'react-router-dom';
import {PageArea} from './styled';
import { PageContainer } from '../../components/MainComponents';

const MyAccount = () => {
    return (
        <PageContainer>
            <PageArea>
                <div className="leftside">
                    <ul>
                        <li>
                            <Link to="meu-cadastro">Meus dados</Link>
                        </li>
                        <li>
                            <Link to="meu-cadastro">Alterar Cadastro</Link>
                        </li>
                        <li>
                            <Link to="meu-cadastro">Meus anúncios</Link>
                        </li>
                    </ul>
                </div>
                <div className="rightside">
                    ...
                </div>
            </PageArea>
        </PageContainer>
    );
}

export default MyAccount;