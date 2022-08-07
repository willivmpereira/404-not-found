import styled from 'styled-components'

export const Header = styled.header`
    margin-top: 2.5rem;
    margin-left: 4.5rem;

    @media(max-width: 768px){
        margin-top: 1.25rem;
        margin-left: 1.5rem;
    }

    h4{
        font-family: 'Inconsolata', monospace;
        font-weight: 700;
        font-size: 24px;
        letter-spacing: -0.08em;
        font-size: 1.5rem;
        line-height: 25px;
        text-transform: uppercase;
        color: $title-dark;
    }
`