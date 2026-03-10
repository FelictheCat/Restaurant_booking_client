import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import RestaurantListPage from "./pages/RestaurantListPage";
import RestaurantDetailsPage from "./pages/RestaurantDetailsPage";
import MyBookingsPage from "./pages/MyBookingsPage";
import BookTablePage from "./pages/BookTablePage";
import MyRestaurantsPage from "./pages/MyRestaurantsPage";
import CreateRestaurantPage from "./pages/CreateRestaurantPage";
import ManageBookingsPage from "./pages/ManageBookingsPage";
import ProfilePage from "./pages/ProfilePage";

import Navbar from "./components/NavBar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/restaurants" element={<RestaurantListPage />} />
        <Route
          path="/restaurants/:restaurantId"
          element={<RestaurantDetailsPage />}
        />

        <Route path="/book/:restaurantId" element={<BookTablePage />} />

        <Route path="/my-bookings" element={<MyBookingsPage />} />

        <Route path="/my-restaurants" element={<MyRestaurantsPage />} />
        <Route path="/create-restaurant" element={<CreateRestaurantPage />} />
        <Route
          path="/manage-bookings/:restaurantId"
          element={<ManageBookingsPage />}
        />

        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;
