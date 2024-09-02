import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-lg sm:text-center">
          <h2 className="text-xl font-bold text-primary sm:text-4xl">
            Features
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-6">
          <div className="flex justify-center flex-col gap-2 items-center p-4 ">
            <Image alt="chat" src={"/chat.svg"} height={64} width={64} />

            <h2 className="mt-4 text-xl font-semibold text-center">
              Group project team chat
            </h2>
          </div>
          <div className="flex justify-center flex-col gap-2 items-center p-4 ">
            <Image alt="file" src={"/share.svg"} height={64} width={64} />

            <h2 className="mt-4 text-xl font-semibold text-center">File sharing</h2>
          </div>
          <div className="flex justify-center flex-col gap-2 items-center p-4 ">
            <Image
              alt="notification"
              src={"/bell.svg"}
              height={64}
              width={64}
            />

            <h2 className="mt-4 text-xl font-semibold text-center">
              Real time notification
            </h2>
          </div>
          <div className="flex justify-center flex-col gap-2 items-center p-4 ">
            <Image alt="issues" src={"/issues.svg"} height={64} width={64} />

            <h2 className="mt-4 text-xl font-semibold text-center">
              Create and track issues
            </h2>
          </div>
          <div className="flex justify-center flex-col gap-2 items-center p-4 ">
            <Image alt="history" src={"/history.svg"} height={64} width={64} />

            <h2 className="mt-4 text-xl font-semibold text-center">
              Collaboration history
            </h2>
          </div>
          <div className="flex justify-center flex-col gap-2 items-center p-4 ">
            <Image alt="time" src={"/time.svg"} height={64} width={64} />

            <h2 className="mt-4 text-xl font-semibold text-center">Time tracking</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
