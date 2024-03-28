import React from "react";

export default function Resume({ inputs }) {
  return (
    <main className="w-full max-w-4xl p-4">
      <section className="flex flex-col items-center max-sm:pb-8">
        <h1 className="text-3xl font-medium">
          {inputs.firstName} {inputs.lastName}
        </h1>
        <div className="flex gap-2 text-xl">
          <h2>{inputs.email}</h2>
          <h2>{inputs.phone}</h2>
        </div>
      </section>
      <section className="flex flex-col pb-3.5 max-sm:pb-8">
        <h1 className="text-2xl font-medium">Education</h1>
        <div className="flex text-lg justify-between">
          <div>
            <h2>{inputs.school}</h2>
            <h3 className="italic">{inputs.degree}</h3>
          </div>
          <div className="flex gap-2 w-auto">
            <h3>{inputs.schoolStartDate}</h3>
            <h3>-</h3>
            <h3>{inputs.schoolEndDate}</h3>
          </div>
        </div>
      </section>
      <section className="flex flex-col max-sm:pb-8">
        <h1 className="text-2xl font-medium">Experience</h1>
        <div className="flex text-lg justify-between">
          <div>
            <h2>{inputs.company}</h2>
            <h3 className="italic">{inputs.position}</h3>
            <h4 className="font-light max-w-xl">{inputs.positionResponsibilities}</h4>
          </div>
          <div className="flex gap-2 ">
            <h3>{inputs.positionStartDate}</h3>
            <h3>-</h3>
            <h3>{inputs.positionEndDate}</h3>
          </div>
        </div>
      </section>
    </main>
  );
}
