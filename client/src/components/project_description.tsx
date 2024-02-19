"use client";

const ProjectDescription = () => {
  return (
    <div className="flex items-center h-full flex-col">
      <div className="w-120">
        <div className="text-5xl mb-10 mt-10">miniproject_sentry</div>
        <div className="text-2xl my-2">1. 프로젝트 설명</div>
        <div className="text-xl my-2">
          1.1.{" "}
          <a className="text-blue" href="https://sentry.io/welcome/">
            {" "}
            sentry
          </a>
          를 이용해 client/server error를 tracking 하는 프로젝트입니다.
        </div>
        <div className="text-xl my-2">1.2. client 에러</div>

        <img src="client_error.png" width={400} />
        <div className="text-xl my-2">1.3. server 에러</div>
        <img src="server_error.png" width={400} />
      </div>
    </div>
  );
};

export default ProjectDescription;
