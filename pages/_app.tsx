import React from 'react'
import '../src/styles/global.css'

export default function MyApp({ Component, pageProps }: { Component: React.FunctionComponent, pageProps: React.HTMLProps<HTMLDivElement> }) {
  return <Component {...pageProps} />
}
