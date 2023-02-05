import React from 'react'
import { useAddress, 
    useNetworkMismatch, 
    useNetwork,
    ConnectWallet,
    ChainId
 } 
    from "@thirdweb-dev/react"

type Props = {}

export default function SignInButton({}: Props) {
    const address = useAddress(); // Detect Connected address
    const isOnWrongNetwork = useNetworkMismatch(); // Detect is user in on the wrong network
    const [, switchNetwork] = useNetwork(); // Function to switch the network


    // 1. User need to connect wallet
    if(!address) {
        return(
            <ConnectWallet />
        )
    }

    // 2. User needs to switch network to Polygon
    if(isOnWrongNetwork) {
        return(
            <button onClick={() => switchNetwork?.(ChainId.Polygon)}>
                Switch Network
            </button>
        )
    }


    // 3. Sign in with Lens

    

    // 4. Show user their profile
  
}