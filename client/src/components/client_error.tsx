import { toast } from "react-toastify";
import TextButton from "./text_button";
import * as Sentry from "@sentry/nextjs";

const ClientError = () => {
  return (
    <>
      <TextButton
        text="client 에러발생"
        disabled={false}
        onClick={() => {
          //   Sentry;
          try {
            throw new Error("Sentry Client Error");
          } catch (e) {
            Sentry.captureException(e);
            toast.error("Client Error 가 발생했습니다.");
          }
        }}
      />
    </>
  );
};

export default ClientError;
