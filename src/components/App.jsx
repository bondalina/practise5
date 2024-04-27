import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";
// import HomePage from "../pages/HomePage";
// import PaymentsPage from "../pages/PaymentsPage";
// import NotFoundPage from "../pages/NotFoundPage";
// import PaymentsDetailsPage from "../pages/PaymentsDetailsPage";
import "./App.css";
// import BankInfo from "./BankInfo";

const HomePage = lazy(() => import("../pages/HomePage"));
const PaymentsPage = lazy(() => import("../pages/PaymentsPage"));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const PaymentsDetailsPage = lazy(() => import("../pages/PaymentsDetailsPage"));
const BankInfo = lazy(() => import("./BankInfo"));
const PaymentReciept = lazy(() => import("./PaymentReciept"));

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/payments" element={<PaymentsPage />} />
        <Route path="/payments/:paymentId" element={<PaymentsDetailsPage />}>
          <Route path="bank" element={<BankInfo />} />
          <Route path="reciept" element={<PaymentReciept />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;

// або fallback={null}
