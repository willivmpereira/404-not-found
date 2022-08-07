import styled, { keyframes } from 'styled-components'

export const Section = styled.section`
    margin-top: 2.5rem;
        margin-left: 4.5rem;

        @media(max-width: 768px){
            margin-top: 1.25rem;
            margin-left: 1.5rem;
        }
`

export const Container = styled.div`
    .container{
    max-width: 1140px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    @media (max-width: 1200px) {
        max-width: 1140px;
    }

    @media (max-width: 992px) {
        max-width: 960px;
    }

    @media (max-width: 768px) {
        max-width: 720px;
    }

    @media (max-width: 576px) {
        max-width: 540px;
    }

}
`

export const Display = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 7.5rem;

    @media(max-width: 768px){
        grid-template-columns: 1fr;
        gap: 3.75rem;
        margin-top: 6.25rem;
    }
`

export const ContentImage = styled.div`
    img{
        max-width: 100%;
        height: auto;
        animation: upDown 4s infinite linear;

        @keyframes upDown {
            0%{
                transform: translateY(-7px);
            }
            50%{
                transform: translateY(10px);
            }
            100%{
                transform: translateY(-7px);
            }
        }
    }
`

export const ContentText = styled.div`
    h2{
        font-size: 4rem;
        font-weight: 700;
        line-height: 95px;
        color: ${({theme}) => theme.colors.textDark};

        @media(max-width: 768px){
            font-size: 2.5rem;
            line-height: 71px;
        }
    }
    p{
        font-size: 24px;
        font-weight: 400;
        line-height: 36px;
        max-width: 385px;
        color: ${({theme}) => theme.colors.textDark};
        margin-top: 2.25rem;

        @media(max-width: 768px){
            margin-top: 2rem;
            font-size: 18px;
            line-height: 27px;
        }
    }
    button{
        font-family: 'Space Mono', monospace;
        font-size: .875rem;
        line-height: 21px;
        text-transform: uppercase;
        font-weight: 700;
        background-color: ${({theme}) => theme.colors.textDark};
        padding: 1.5rem 2.5rem;
        margin-top: 4rem;
        border: none;
        color: #FFF;
        cursor: pointer;

        @media(max-width: 768px){
            margin-top: 3.75rem;
        }
    }
`