import { useEffect, useState } from 'react';

import * as anchor from '@project-serum/anchor';
import DatafarmIDL from '../_common/Datafarm.json';

import { useWallet } from '@solana/wallet-adapter-react';

const appNetwork = process.env.APP_NETWORK ? process.env.APP_NETWORK : 'https://api.devnet.solana.com';

export const useStreamTimelock = () => {
    const wallet = useWallet();

    const [provider, setProvider] = useState(null);
    const [dataProgram, setDataProgram] = useState(null);
    const [pool, setPool] = useState(null);

    useEffect(() => {
        (async () => {
            if (!wallet) return;
            if (!wallet.connected) return;

            const connection = new anchor.web3.Connection(appNetwork);
            const _provider = new anchor.Provider(connection, wallet, anchor.Provider.defaultOptions());
            anchor.setProvider(_provider);
            setProvider(_provider);

            const _dataProgram = new anchor.Program(DatafarmIDL, DatafarmIDL.metadata.address, _provider);
            setDataProgram(_dataProgram);

            const _pool = await _dataProgram.state.fetch();
            setPool(_pool);
        })();
    }, [wallet]);

    return {
        provider,
        pool,
        dataProgram
    };
};
