"use client";
import ClientError from "@/components/client_error";
import Header from "@/components/header";
import ServerError from "@/components/server_error";

export default function Home() {
  return (
    <div>
      <Header renderCenter={() => <div>메인 페이지</div>} />

      <div className="p-4">
        <ClientError />
      </div>

      <div className="p-4">
        <ServerError />
      </div>
    </div>
  );
}
