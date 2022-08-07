import styled from 'styled-components'

export const Footer = styled.footer`
    margin-top: 1.5rem;

    @media(max-width: 768px){
        margin-top: 7rem;
    }

    p{
        font-weight: 500;
        font-size: 14px;
        color: #BDBDBD;
        text-align: center;
        margin-bottom: 1.5rem;

        @media(max-width: 768px){
            margin-top: 7rem;
        }

        a{
            color: #BDBDBD;
            font-weight: 700;
        }
    }
`