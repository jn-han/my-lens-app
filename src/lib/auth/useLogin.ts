
// 0. Make sure the user has a connected wallet


import { useAuthenticateMutation } from "@/src/graphql/generated";
import { useMutation } from "@tanstack/react-query";
import { useAddress, useSDK } from "@thirdweb-dev/react";
import generateChallenge from "./generateChallenge";

    // 1. Write the actual async function
export default function useLogin() {
    


    const address = useAddress();
    const sdk = useSDK();
    const { mutateAsync: sendSignedMessage } = useAuthenticateMutation()

    async function login() {
        if (!address) return;

        // 1. Generate challenge which comes from the Lens API
        const { challenge } = await generateChallenge(address);

        // 2. Sign the challenge with the user's wallet
        const signature = sdk?.wallet.sign(challenge.text);
        
        // 3. Send the signed challenge to the Lens API
        const { authenticate } = await sendSignedMessage(
            {
                request: {
                    address,
                    signature,
                }
            }
        )

        console.log("authenticated: " + authenticate)
        
    // 4. Receive an access token from the Lens API if we succeed
    // 5. Store the access toek inside local storage so we can use it

    }


    // 2. Return the useMutation hook wrapping the async function

    return useMutation(login)

}