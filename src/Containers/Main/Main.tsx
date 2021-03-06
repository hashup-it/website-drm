import { chakra, Link } from '@chakra-ui/react';
import { EXPANSION_MODE } from '../../Hooks/expansionMode.enum';
import { Header } from './Components/Header/Header';
import { ExpansionProps, useExpansion } from '../../Hooks/useExpansion';
import { WalletIcon } from '../../Components/Icons/WalletIcon';
import { useBlockchainProvider } from '../../Providers/Blockchain/BlockchainProvider';

const GameXplorerBtn: React.FunctionComponent<{}> = () => (
    <Link href="https://gamexplorer.io" alignSelf="end" target="_blank">
        <Header cursor="pointer" borderBottomLeftRadius="10px">
            <chakra.strong>GameXplorer</chakra.strong>
        </Header>
    </Link>
)

const options: any = {
    // @ts-ignore
    [EXPANSION_MODE.DISCONNECTED]: () => {
        const { login } = useBlockchainProvider();
        return (
            <Header onClick={login} cursor="pointer" borderBottomLeftRadius="10px">
                <chakra.strong>Connect</chakra.strong>
                <WalletIcon />
            </Header>
        );
    },
    [EXPANSION_MODE.COLLAPSE]: () => <GameXplorerBtn />,
    [EXPANSION_MODE.PARTIAL_EXPAND]: () => <GameXplorerBtn />,
    [EXPANSION_MODE.EXPAND]: (_: ExpansionProps) => <GameXplorerBtn />

    // [EXPANSION_MODE.COLLAPSE]: (props: ExpansionProps) => (
    //     <Header onClick={props.onPartialExpand} cursor="pointer" borderBottomLeftRadius="10px" />
    // ),
    // [EXPANSION_MODE.PARTIAL_EXPAND]: (props: ExpansionProps) => (
    //     <>
    //         <Header w="100%">
    //             <HashupCard />
    //             <AccountCard onCollapse={props.onCollapse} />
    //         </Header>
    //         <Navigation {...props} />
    //     </>
    // ),
    // [EXPANSION_MODE.EXPAND]: (expansionProps: ExpansionProps) => (
    //     <>
    //         <VStack spacing="0" mb=".5rem" bg="#21242B">
    //             <Header w="100%">
    //                 <HashupCard />
    //                 <AccountCard onCollapse={expansionProps.onCollapse} />
    //             </Header>
    //             <Body />
    //             <Footer />
    //         </VStack>
    //
    //         <AdditionalPanel />
    //         <Navigation {...expansionProps} />
    //     </>
    // ),
}

export const Main = () => {
    const expansionProps = useExpansion();
    const { expansionMode } = expansionProps;

    return options[expansionMode](expansionProps);
};
