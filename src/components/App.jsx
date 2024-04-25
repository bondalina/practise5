import "./App.css";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PaymentsPage from "../pages/PaymentsPage";
import NotFoundPage from "../pages/NotFoundPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
