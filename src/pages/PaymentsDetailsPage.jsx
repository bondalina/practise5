import { Link, useParams, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import PaymentInfo from "../components/PaymentInfo";
import { getPaymentById } from "../components/payments-api";

export default function PaymentsDetailsPage() {
  const { paymentId } = useParams();
  const [payment, setPayment] = useState(null);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  // console.log(location);
  const backLinkURLRef = useRef(location.state ?? "/payments");
  // console.log(backLinkURLRef);

  useEffect(() => {
    async function fetchPayment() {
      try {
        setIsLoading(true);
        const data = await getPaymentById(paymentId);
        setPayment(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPayment();
  }, [paymentId]);
  return (
    <div>
      <p>
        <b>PaymentDetailsPage</b>
      </p>
      <div>
        <Link to={backLinkURLRef.current}>Go back</Link>
      </div>

      {error && <b>Oops! Please reload page!</b>}
      {loading && <b>Page is loading...</b>}
      {payment && <PaymentInfo payment={payment} />}

      <ul>
        <li>
          <Link to="bank">Bank</Link>
        </li>
        <li>
          <Link to="reciept">Reciept</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
}
