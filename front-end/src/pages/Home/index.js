import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PageArea, SearchArea } from './styled';
import { PageContainer } from '../../components/MainComponents'
import useApi from '../../helpers/OlxAPI';
import AdItem from '../../components/partials/AdItem';

const Page = () => {
    const api = useApi();

    const [stateList, setStateList] = useState([]);
    const [categories, setCategories] = useState([]);
    const [adList, setAdList] = useState([]);

    useEffect(() => {
        const getStates = async () => {
            const slist = await api.getStates();
            setStateList(slist);
        }
        getStates();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    }, []);

    useEffect(() => {
        const getRecentAds = async () => {
            const json = await api.getAds({
                sort: 'desc',
                limit: 8
            });
            setAdList(json.ads);
        }
        getRecentAds();
    }, [] );

   
    return(
        <>
            <SearchArea>
                <PageContainer>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="O que você procura ?" />
                            <select name="state">
                                {stateList.map((i, k) => 
                                    <option key={k} value={i.name}>{i.name}</option>
                                )}
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className="categoryList">
                        {categories.map((i, k) => 
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem">
                                <img src={i.img} alt="" />
                                <span>{ i.name } </span>
                            </Link>    
                        )}
                    </div>
                </PageContainer>
            </SearchArea>
            <PageContainer>
                <PageArea>
                    <h2>Anúncios Recentes</h2>
                    <div className="list">
                        {adList.map(( i, k ) => 
                            <AdItem key={k} data={i} />
                        )}
                    </div>
                    <Link to="/ads" className="seeAllLink">Ver todos</Link>

                    <hr />

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id iaculis diam. Maecenas sit amet orci at neque condimentum mollis quis in quam. Morbi in ipsum eu sem varius pulvinar at eu velit. Quisque semper lacus ac orci convallis, eu sodales leo venenatis. Vestibulum feugiat condimentum neque, vitae ultricies purus lacinia nec. Duis orci ante, ornare sit amet velit congue, pulvinar euismod eros.
                </PageArea>
            </PageContainer>
        </>
    );
}

export default Page;