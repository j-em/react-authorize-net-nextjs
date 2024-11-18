import PaymentForm from "@/components/PaymentForm";
import Image from "next/image";

export default async function Home() {
  const { AUTHORIZENET_LOGINID: loginId, AUTHORIZENET_CLIENTKEY: clientKey } =
    process.env;

  return (
    <div>
      <PaymentForm apiLoginId={loginId} clientKey={clientKey} />
    </div>
  );
}
