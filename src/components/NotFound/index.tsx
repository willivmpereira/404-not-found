import * as S from './styled'
import Image from 'next/image'

import Scarecrow from '../../assets/scarecrow.png'

export const NotFound = () => {
    return (
        <S.Section>
            <S.Container>
                <S.Display>
                    <S.ContentImage>
                        <img 
                            src={Scarecrow} 
                            alt="Imagem Café" 
                            
                        />
                    </S.ContentImage>
                    <S.ContentText>
                        <h2>I have bad news for you</h2>
                        <p>The page you are looking for might be removed or is temporarily unavailable</p>
                        <button>Back to homepage</button>
                    </S.ContentText>
                </S.Display>
            </S.Container>
        </S.Section>
    )
}