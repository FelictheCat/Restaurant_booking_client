import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Sidebar from "./components/Sidebar";

import ProtectedRoute from "./components/ProtectedRoute";
import OwnerRoute from "./components/OwnerRoute";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RestaurantListPage from "./pages/RestaurantListPage";
import RestaurantDetailsPage from "./pages/RestaurantDetailsPage";

import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";

import BookTablePage from "./pages/BookTablePage";
import MyBookingsPage from "./pages/MyBookingsPage";

import CreateRestaurantPage from "./pages/CreateRestaurantPage";
import MyRestaurantsPage from "./pages/MyRestaurantsPage";
import EditRestaurantPage from "./pages/EditRestaurantPage";
import ManageBookingsPage from "./pages/ManageBookingsPage";
import EditProfilePage from "./pages/EditProfilePage";
import ProfilePage from "./pages/ProfilePage";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />

      <div className="app-layout">
        <Sidebar />

        <main className="page-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />

            <Route path="/restaurants" element={<RestaurantListPage />} />
            <Route
              path="/restaurants/:restaurantId"
              element={<RestaurantDetailsPage />}
            />

            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/book/:restaurantId"
              element={
                <ProtectedRoute>
                  <BookTablePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/my-bookings"
              element={
                <ProtectedRoute>
                  <MyBookingsPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <ProfilePage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/create-restaurant"
              element={
                <OwnerRoute>
                  <CreateRestaurantPage />
                </OwnerRoute>
              }
            />

            <Route
              path="/my-restaurants"
              element={
                <OwnerRoute>
                  <MyRestaurantsPage />
                </OwnerRoute>
              }
            />

            <Route
              path="/manage-bookings"
              element={
                <OwnerRoute>
                  <ManageBookingsPage />
                </OwnerRoute>
              }
            />

            <Route
              path="/edit-restaurant/:restaurantId"
              element={
                <OwnerRoute>
                  <EditRestaurantPage />
                </OwnerRoute>
              }
            />

            <Route
              path="/edit-profile"
              element={
                <ProtectedRoute>
                  <EditProfilePage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
