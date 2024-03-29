import FlexContainer from '@/components/FlexContainer/FlexContainer';
import ModelPanel from '@/components/ModelPanel/ModelPanel';
import { Model } from '@/constants/types';

export default function Models() {
    const models: Model[] = [
        {
            name: 'Self-portrait',
            desc: 'A high-poly sculpt of myself as a Greco-Roman bust, with cartoonish stylization.',
            image_url: '/bust_transparent.png',
            vertices: 1335832,
        },
        {
            name: 'Low-poly Ship',
            desc: 'A low-poly pirate ship with UN decor, designed as a game asset for the 2024 Climate Game Jam.',
            image_url: '/ship.png',
            vertices: 7282,
        },
        {
            name: 'Sponge with the Suds',
            desc: 'A rendition of Spongebob when he came down with the suds.',
            image_url: '/sponge.png',
            vertices: 11053,
        },
        {
            name: 'Captain Kori',
            desc: 'A rigged, low-poly, pirate character made for the 2024 Climate Change Game Jam.',
            image_url: '/captain-kori.png',
            vertices: 1321,
        },
        {
            name: 'Elf Knight',
            desc: 'A low-poly, elven knight rigged for animation.',
            image_url: '/elf-knight.png',
            vertices: 787,
        },
        {
            name: 'Nomad',
            desc: 'A lone, tunic-equpped wanderer, made in PS1-era style.',
            image_url: 'nomad.png',
            vertices: 674,
        },
    ];
    return (
        <FlexContainer>
            {models.map((model: Model) => (
                <ModelPanel model={model} key={model.name}></ModelPanel>
            ))}
        </FlexContainer>
    );
}
