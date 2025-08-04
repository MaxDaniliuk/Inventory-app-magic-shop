import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// Layout
import RootLayout from './layouts/RootLayout';

// Pages
import Homepage from './pages/Homepage';
import Items from './pages/Items';
import Categories from './pages/Categories';
import CategoryPage from './pages/CategoryPage';
import NotFound from './pages/error/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="items" element={<Items />} />
      <Route path="categories/" element={<Categories />} />
      <Route path="categories/:category" element={<CategoryPage />} />
      <Route path="*" element={<NotFound />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
