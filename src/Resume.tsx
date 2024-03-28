import React from "react";

export default function Resume() {
  return (
    <main className="p-4">
      <section className="flex flex-col items-center">
        <h1 className="text-3xl font-medium">Rafael Cestti</h1>
        <div className="flex gap-2 text-xl">
          <h2>rafaelcestti@gmail.com</h2>
          <h2>786-361-6567</h2>
        </div>
      </section>
      <section className="flex flex-col pb-3.5">
        <h1 className="text-2xl font-medium">Education</h1>
        <div className="flex text-lg justify-between">
          <div>
            <h2>Florida International University</h2>
            <h3 className="italic">Bachelor of Business Administration in Finance</h3>
          </div>
          <div className="flex gap-2">
            <h3>August 2020</h3>
            <h3>-</h3>
            <h3>June 2024</h3>
          </div>
        </div>
      </section>
      <section className="flex flex-col">
        <h1 className="text-2xl font-medium">Experience</h1>
        <div className="flex text-lg justify-between">
          <div>
            <h2>FTMO</h2>
            <h3 className="italic">Proprietary Trader</h3>
          </div>
          <div className="flex gap-2">
            <h3>January 2023</h3>
            <h3>-</h3>
            <h3>June 2023</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
