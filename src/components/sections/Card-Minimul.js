import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51IHE4RDIJLlGeREQhcKJYzKVjc7hDp1JIZRNqwWqqmwolt7rpIuVYA7fx32KZB2QjbcZs7DEMrsRgiepuXObU01g00SAUCbJp4"
);

const App = () => {
  return (
    <Elements stripe={stripePromise}>
      <MyCheckoutForm />
    </Elements>
  );
};
