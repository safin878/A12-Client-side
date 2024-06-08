import SectionTitle from "../../../Componenents/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutFrom from "./CheckOutFrom";

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);

const Payment = () => {
  return (
    <div>
      <SectionTitle Heading={"Pay"}> </SectionTitle>

      <div>
        <Elements stripe={stripePromise}>
          <CheckOutFrom></CheckOutFrom>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
