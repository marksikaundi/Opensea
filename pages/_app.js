import '../styles/globals.css'
import { ThirdwebWeb3Provider } from '@3rdweb/hooks'

const supportChainIds = [4]
const connectors = {
  injected: {},
}

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportChainIds={supportChainIds}
      connectors={connectors}
      >
    </ThirdwebWeb3Provider>
  )
}

export default MyApp
