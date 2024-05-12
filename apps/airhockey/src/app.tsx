import { CssBaseline } from '@mui/material';

import Router from './Router';
import {QueryClientProvider} from './queryClient';

export function App() {
  return (
    <QueryClientProvider>
      <CssBaseline />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
