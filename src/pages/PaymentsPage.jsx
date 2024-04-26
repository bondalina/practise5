import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getPayments } from "../components/payments-api.js";
import PaymentList from "../components/PaymentList/PaymentList.jsx";
import OwnerFilter from "../components/OwnerFilter.jsx";

const PaymentsPage = () => {
  const [payments, setPayments] = useState([]);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const ownerParam = searchParams.get("owner") ?? "";
  // console.log(searchParams);

  const changeOwnerFilter = (newFilter) => {
    searchParams.set("owner", newFilter);
    // Для зміни параметрів запиту (http://localhost:5173/payments?owner=hjhhjjk) :
    // searchParams.set("b", 20);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    async function fetchPayments() {
      try {
        setIsLoading(true);
        const data = await getPayments();
        setPayments(data);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchPayments();
  }, []);

  const filteredPayments = useMemo(() => {
    return payments.filter((payment) =>
      payment.cardOwner.toLowerCase().includes(ownerParam.toLowerCase())
    );
  }, [ownerParam, payments]);

  return (
    <div>
      <p>
        <b>PaymentsPage</b>
      </p>
      <OwnerFilter value={ownerParam} onFilter={changeOwnerFilter} />
      {error && <b>Oops! Please reload page!</b>}
      {loading && <b>Loading payments...</b>}
      {payments.length > 0 && <PaymentList payments={filteredPayments} />}
    </div>
  );
};

export default PaymentsPage;
