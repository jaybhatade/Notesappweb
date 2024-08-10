import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import NavigationBar from "./Components/Navbar";
import NotesApp from "./UI/home";
import AddNotesPage from "./Pages/AddNotesPage"
import ProfilePage from "./Pages/ProfilePage"
import SearchPage from "./Pages/SearchPage"
import CategoryPage from "./Pages/CategoryPage"
import AddBtn from './UI/AddBtn';

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
        { index: true, element: <NotesApp /> },
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