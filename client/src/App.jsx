import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// Layout
import RootLayout from './layouts/RootLayout';

// Page
import Homepage from './pages/Homepage';
import Items from './pages/Items';
import Categories from './pages/Categories';
import CategoryPage from './pages/CategoryPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Homepage />} />
      <Route path="items" element={<Items />} />
      <Route path="categories/" element={<Categories />} />
      <Route path="categories/:category" element={<CategoryPage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
