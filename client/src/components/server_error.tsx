import Axios from "@/query";
import TextButton from "./text_button";
import { toast } from "react-toastify";

const ServerError = () => {
  return (
    <>
      <TextButton
        text="server 에러발생"
        disabled={false}
        onClick={async () => {
          try {
            const result = await Axios.get("/");
          } catch (error) {
            toast.error("Server Error 가 발생했습니다.");
          }
        }}
      />
    </>
  );
};

export default ServerError;
