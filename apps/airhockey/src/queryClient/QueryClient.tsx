import React from 'react';

import { QueryClientProvider as TanstackQueryClientProvider, QueryClient } from '@tanstack/react-query'

const QueryClientProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const client = new QueryClient();

  return (
    <TanstackQueryClientProvider client={client}>
      {children}
    </TanstackQueryClientProvider>
  )
}

export default QueryClientProvider;
