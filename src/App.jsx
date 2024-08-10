import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import NavigationBar from "./Components/Navbar";
import HomePage from "./Pages/HomePage"
import AddNotesPage from "./Pages/AddNotesPage"
import ProfilePage from "./Pages/ProfilePage"
import SearchPage from "./Pages/SearchPage"
import CategoryPage from "./Pages/CategoryPage"


// Define the MainLayout component
const MainLayout = () => {
  return (
    <div>
      <NavigationBar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "add", element: <AddNotesPage /> },
        { path: "search", element: <SearchPage /> },
        { path: "categories", element: <CategoryPage/> },
        { path: "profile", element: <ProfilePage /> },
      ],
    },
  ]);
  

  return (
    <RouterProvider router={router} />
  );
}

export default App;