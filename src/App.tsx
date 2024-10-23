import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import { Routes } from '@/routes';
import { Layout } from '@/components/layout';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="concrete-theme">
      <Layout>
        <Routes />
      </Layout>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;