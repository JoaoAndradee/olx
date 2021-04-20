import styled from 'styled-components';

export const PageArea = styled.div `

    display: flex; 
    margin-top: 20px;

    .leftside {
        width: 30%;
        margin-right: 15px;

        ul {
            list-style: none;
            font-size: 14px;

            li {
                padding: 10px;
                border-radius: 5px;

                &:hover {
                    background-color: pink;
                    color: #f3eef5;
                }

                a {
                    color: #000;
                    text-decoration: none;

                    &.active {
                        font-weight: bold;
                    }
                }
            }
        }
    }

    .rightside {
        flex: 1;
    }
`;