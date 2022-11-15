import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://tutorial.saleor.cloud/graphql/',
  cache: new InMemoryCache()
})
export default function App({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={client}><Component {...pageProps} /></ApolloProvider>
}
