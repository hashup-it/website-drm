import { ethers } from 'ethers';

export const BlockchainWeb3InitialState = {
    isWeb3: false,
    isLogged: null,
    loading: true,
    isMetaMask: false,
    account: ethers.constants.AddressZero,
    gameBalance: 0,
    hashBalance: 0,
    chainId: 0,
    networkName: 'unknown',
    eth_balance: ethers.utils.parseEther('0'),
    signer: null,
    provider: null,
};

export const BlockchainWeb3Reducer = (state: any, action: any) => {
    switch (action.type) {
        case 'clear':
            return {
                ...state,
                isLogged: false,
                account: BlockchainWeb3InitialState.account,
                hashBalance: BlockchainWeb3InitialState.hashBalance,
                gameBalance: BlockchainWeb3InitialState.gameBalance,
            };
        case 'SET_isWeb3':
            return { ...state, isWeb3: action.isWeb3 };
        case 'SET_isMetaMask':
            return { ...state, isMetaMask: action.isMetaMask };
        case 'SET_isLogged':
            return { ...state, isLogged: action.isLogged };
        case 'SET_account':
            return { ...state, account: action.account };
        case 'SET_provider':
            return { ...state, provider: action.provider };
        case 'SET_signer':
            return { ...state, signer: action.signer };
        case 'SET_isLoading':
            return { ...state, loading: action.loading };
        case 'SET_gameBalance':
            return { ...state, gameBalance: action.gameBalance };
        case 'SET_hashBalance':
            return { ...state, hashBalance: action.hashBalance };
        case 'SET_chainId':
            return { ...state, chainId: action.chainId };
        case 'SET_networkName':
            return { ...state, networkName: action.networkName };
        default:
            throw new Error(`Unhandled action ${action.type} in web3Reducer`);
    }
};
