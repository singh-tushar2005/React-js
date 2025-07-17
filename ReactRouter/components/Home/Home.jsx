import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-screen">

      {/* 🔶 Hero Section - Full width banner with background */}
      <section
        className="w-full bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/2161763581/photo/devsecops-software-development-cycle-programming-for-finance-accounting-sale-marketing.jpg?s=2048x2048&w=is&k=20&c=2PtrTBoOaK6Jp_cx4OPJtr6PVQzpi0F3h0se0P5Ho3g=')",
        }}
      >
        <div className="bg-black/60 w-full h-full">
          <div className="max-w-7xl mx-auto px-6 py-28 flex flex-col items-center text-center sm:items-end sm:text-right">
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              Download Now
              <span className="block text-orange-400 mt-2">Lorem Ipsum</span>
            </h1>

            <Link
              to="/"
              className="mt-6 inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              <span className="ml-2">Download Now</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 🔷 Image Section */}
      <section className="w-full py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <img
            className="mx-auto w-48 sm:w-96 rounded-md shadow-md"
            src="https://media.istockphoto.com/id/2161763581/photo/devsecops-software-development-cycle-programming-for-finance-accounting-sale-marketing.jpg?s=2048x2048&w=is&k=20&c=2PtrTBoOaK6Jp_cx4OPJtr6PVQzpi0F3h0se0P5Ho3g="
            alt="Showcase"
          />
        </div>
      </section>

      {/* 🔸 Text Section */}
      <section className="w-full py-10 bg-white">
        <h2 className="text-center text-3xl sm:text-5xl font-semibold text-gray-800">
          Lorem Ipsum Yojo
        </h2>
      </section>
    </div>
  );
}
