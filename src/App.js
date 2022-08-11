import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { CartWithShipping, CartWithoutShipping } from './pages';
import theme from './style/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CartWithShipping />} />
        <Route path="without-shipping" element={<CartWithoutShipping />} />

        <Route path="*" element={<p>Page not Found</p>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
);

export default App;
