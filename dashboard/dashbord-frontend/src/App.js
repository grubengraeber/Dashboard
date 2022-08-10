import './App.css';
import BudgetSite from './Components/BudgetSite';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App"> 
          <BudgetSite/>
      </div>
    </QueryClientProvider>
  );
}

export default App;
