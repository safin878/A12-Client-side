import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import useAgree from "../../../Hooks/useAgree/useAgree";
import useAuth from "../../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import { MonthContext } from "../../../Provider/MonthProvider";

const CheckOutFrom = () => {
  const [Error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);
  const [originalPrice, setOriginalPrice] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const stripe = useStripe();
  const elements = useElements();
  const { User } = useAuth();
  const [cart] = useAgree();
  const axiosSecure = useAxiosSecure();
  const { month } = useContext(MonthContext);

  const PayPrice = cart?.length > 0 ? parseInt(cart[0]?.Rent) : 0;
  console.log("Month", month);

  useEffect(() => {
    if (PayPrice > 0) {
      setOriginalPrice(PayPrice);
      const discountedPrice = PayPrice - (PayPrice * discountPercentage) / 100;
      setFinalPrice(discountedPrice);
      axiosSecure
        .post(
          "/create-intent",
          { price: discountedPrice },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) => {
          console.error(
            "Error creating payment intent:",
            error.response?.data || error.message
          );
        });
    } else {
      console.error("Invalid PayPrice:", PayPrice);
    }
  }, [axiosSecure, PayPrice, discountPercentage]);

  const handleCouponApply = async () => {
    try {
      const res = await axiosSecure.post("/validate-coupon", { couponCode });
      if (res.data.valid) {
        setDiscountPercentage(res.data.discountPercentage);
        setError("");
      } else {
        setDiscountPercentage(0);
        setError("Invalid coupon code");
      }
    } catch (error) {
      console.error(
        "Error validating coupon code:",
        error.response?.data || error.message
      );
    }
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: card,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: User?.email || "anonymous",
            name: User?.name || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("confirm Error");
    } else {
      if (paymentIntent.status === "succeeded") {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Payment Successful",
          showConfirmButton: false,
          timer: 1500,
        });
      }

      const payment = {
        email: User?.email,
        price: finalPrice,
        date: new Date(),
        cartId: cart[0]._id,
        transactionId: paymentIntent.id,
        month: month,
      };

      await axiosSecure.post("/payments", payment).then((res) => {
        console.log("Payment Success", res.data);
        if (res.data.insertedId) {
          setCouponCode("");
          setDiscountPercentage(0);
          setOriginalPrice(0);
          setFinalPrice(0);
          setClientSecret("");
          elements.getElement(CardElement).clear();
        }
      });
    }
  };

  return (
    <div>
      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="Enter coupon code"
        className="mb-4"
      />
      <button
        className="mx-2 btn text-white my-2 hover:bg-[#bb813e] bg-[#cf893a]"
        onClick={handleCouponApply}
      >
        Apply Coupon
      </button>
      {discountPercentage > 0 && (
        <div className="mb-3">
          <p>Original Price: ${originalPrice.toFixed(2)}</p>
          <p>Discount Percentage: {discountPercentage}% Off</p>
          <p>Discounted Price: ${finalPrice.toFixed(2)}</p>
        </div>
      )}
      <form onSubmit={handelSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn text-white my-2 hover:bg-[#bb813e] bg-[#cf893a]"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      <p className="text-red-500">{Error}</p>
    </div>
  );
};

export default CheckOutFrom;
