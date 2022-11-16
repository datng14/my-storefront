import '../styles/globals.css'
import type { AppProps } from 'next/app'
import '../styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { relayStylePagination } from '@apollo/client/utilities'
import { apolloClient } from 'lib/graphql'

export default function App({ Component, pageProps }: AppProps) {
  return <ApolloProvider client={apolloClient}><Component {...pageProps} /></ApolloProvider>
}
