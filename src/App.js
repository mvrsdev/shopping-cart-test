import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ShoppingCart } from './pages';
import theme from './style/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<ShoppingCart />} />

        <Route path="*" element={<Navigate to="/cart?type=standard" />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
