import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThirdwebProvider, ChainId } from '@thirdweb-dev/react'; 

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const desiredChainId = ChainId.Polygon;

  return (
    <ThirdwebProvider desiredChainId={desiredChainId}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThirdwebProvider>

  )
}
