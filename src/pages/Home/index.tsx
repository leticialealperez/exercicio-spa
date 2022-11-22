import React from 'react';
import { Banner, TitleBanner } from '../../components/Banner';
import { WrapperIcons, DivIcons, Icon, Title, TextDescription } from '../../components/SectionIcons';
import { HiComputerDesktop } from "react-icons/hi2";
import { FaHotjar, FaJava } from "react-icons/fa";

function Home() {
    return (
        <React.Fragment>
            <Banner size={60}>
                <TitleBanner>Minha primeira página com React</TitleBanner>
            </Banner>

            <WrapperIcons>
                <DivIcons>
                    <Icon>
                        <HiComputerDesktop/>
                    </Icon>
                    <Title>Somente para desktop</Title>
                    <TextDescription>Vamos aprender como utilizar um framework</TextDescription>
                </DivIcons>
                <DivIcons>
                    <Icon>
                        <FaHotjar />
                    </Icon>
                    <Title>Somente para desktop</Title>
                    <TextDescription>Vamos aprender como utilizar um framework</TextDescription>
                </DivIcons>
                <DivIcons>
                    <Icon>
                        <FaJava />
                    </Icon>
                    <Title>Somente para desktop</Title>
                    <TextDescription>Vamos aprender como utilizar um framework</TextDescription>
                </DivIcons>
            </WrapperIcons>

            <Banner size={40}>
                <TitleBanner>Contato</TitleBanner>
            </Banner>
        
        </React.Fragment>
        
    )
}

export default Home;