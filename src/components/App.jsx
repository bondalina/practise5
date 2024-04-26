import "./App.css";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PaymentsPage from "../pages/PaymentsPage";
import NotFoundPage from "../pages/NotFoundPage";
import PaymentsDetailsPage from "../pages/PaymentsDetailsPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/payments/:paymentId" element={<PaymentsDetailsPage />}>
          <Route path="bank" element={<div>Bank!!!</div>} />
          <Route path="reciept" element={<div>Reciept!!!</div>} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
