import React from "react";

export default function Inputs({ inputs, handler }) {
  return (
    <main className="w-full max-w-xl p-4 pl-10 max-sm:pl-4">
      <h1 className="text-lg font-medium pb-3">General Information</h1>
      <div className="flex flex-col gap-3 pb-6">
        <label className="flex justify-between">
          First name:
          <input
            className="border border-black"
            type="text"
            onChange={(e) => handler(e, "firstName")}
            value={inputs.firstName}></input>
        </label>
        <label className="flex justify-between">
          Last name:
          <input
            className="border border-black"
            type="text"
            onChange={(e) => handler(e, "lastName")}
            value={inputs.lastName}></input>
        </label>
        <label className="flex justify-between">
          Email:
          <input
            className="border border-black"
            type="email"
            onChange={(e) => handler(e, "email")}
            value={inputs.email}></input>
        </label>
        <label className="flex justify-between">
          Phone number:
          <input
            className="border border-black"
            type="tel"
            onChange={(e) => handler(e, "phone")}
            value={inputs.phone}></input>
        </label>
      </div>
      <h1 className="text-lg font-medium pb-3">Education</h1>
      <div className="flex flex-col gap-3 pb-6">
        <label className="flex justify-between">
          School name:
          <input
            className="border border-black"
            type="text"
            onChange={(e) => handler(e, "school")}
            value={inputs.school}></input>
        </label>
        <label className="flex justify-between">
          Degree title:
          <textarea
            className="border border-black"
            onChange={(e) => handler(e, "degree")}
            value={inputs.degree}></textarea>
        </label>
        <label className="flex justify-between">
          Start date:{" "}
          <input
            className="border border-black"
            type="date"
            onChange={(e) => handler(e, "schoolStartDate")}
            value={inputs.schoolStartDate}></input>
        </label>
        <label className="flex justify-between">
          End date:{" "}
          <input
            className="border border-black"
            type="date"
            onChange={(e) => handler(e, "schoolEndDate")}
            value={inputs.schoolEndDate}></input>
        </label>
      </div>
      <h1 className="text-lg font-medium pb-3">Work experience</h1>
      <div className="flex flex-col gap-3 pb-6">
        <label className="flex justify-between">
          Company name:{" "}
          <input
            className="border border-black"
            type="text"
            onChange={(e) => handler(e, "company")}
            value={inputs.company}></input>
        </label>
        <label className="flex justify-between">
          Position title:{" "}
          <input
            className="border border-black"
            type="text"
            onChange={(e) => handler(e, "position")}
            value={inputs.position}></input>
        </label>
        <label className="flex justify-between">
          Main responsibilities:{" "}
          <textarea
            className="border border-black"
            onChange={(e) => handler(e, "positionResponsibilities")}
            value={inputs.positionResponsibilities}></textarea>
        </label>
        <label className="flex justify-between">
          Start date:{" "}
          <input
            className="border border-black"
            type="date"
            onChange={(e) => handler(e, "positionStartDate")}
            value={inputs.positionStartDate}></input>
        </label>
        <label className="flex justify-between">
          End date:{" "}
          <input
            className="border border-black"
            type="date"
            onChange={(e) => handler(e, "positionEndDate")}
            value={inputs.positionEndDate}></input>
        </label>
      </div>
    </main>
  );
}
