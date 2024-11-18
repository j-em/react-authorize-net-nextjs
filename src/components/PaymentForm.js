"use client";

import { useState } from "react";
import { FormContainer, FormComponent } from "react-authorize-net";

const PaymentForm = ({ clientKey, apiLoginId }) => {
  const [isPaid, setIsPaid] = useState(false);
  const [errors, setErrors] = useState([]);

  const onSuccessHandler = () => {
    setIsPaid(true);
    setErrors([]);
  };

  const onErrorHandler = (response) => {
    const errors = response.messages.message.map((err) => err.text);
    setErrors(errors);
    setIsPaid(false);
  };

  if (errors.length > 0) {
    return (
      <div>
        <h2>Payment Failed</h2>
        <div>
          {errors.map((error, index) => (
            <p key={index} className="text-red-500">
              {error}
            </p>
          ))}
        </div>
        <button
          onClick={() => setErrors([])}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (isPaid) {
    return (
      <div>
        <h2>Payment Received</h2>
        <p>
          Thank you for your payment. Your transaction has been completed
          successfully.
        </p>
      </div>
    );
  }

  return (
    <div>
      <FormContainer
        environment="sandbox"
        onError={onErrorHandler}
        onSuccess={onSuccessHandler}
        amount={23}
        component={FormComponent}
        clientKey={clientKey}
        apiLoginId={apiLoginId}
      />
    </div>
  );
};

export default PaymentForm;
