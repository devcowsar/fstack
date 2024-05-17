import Image from "next/image";
import React from "react";
import star from "/public/star-e407ebd5.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="shadow-lg w-full sticky bg-black/40 top-0 z-10">
      <div className="grid grid-cols-12 lg:flex justify-between items-center py-4 lg:px-14 px-7">
        <div className="text-3xl col-span-3 left-8 cursor-pointer lg:hidden">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 16 16"
            className="text-primary"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            data-darkreader-inline-stroke=""
            data-darkreader-inline-fill=""
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14 5H2V3h12v2zm0 4H2V7h12v2zM2 13h12v-2H2v2z"
            ></path>
          </svg>
        </div>
        <div>
          <Link
            className="col-span-6 lg:col-span-3 flex justify-center lg:justify-start"
            href="/"
          >
            <div className="flex gap-5  items-center">
              <Image
                priority={false}
                className="h-16"
                src={star}
                width={80}
                height={20}
                alt="Picture of the author"
              />
              <p className="lg:text-2xl text-lg text-white">S T R A D A L A</p>
            </div>
          </Link>
        </div>
        <div className="col-span-3 flex items-center justify-end">
          <Link className="relative mr-2 text-white lg:hidden" href={"/cart"}>
            <small className="absolute top-[-10px] right-[-10px] bg-primary text-white rounded-full text-xs p-1 pl-[5px] w-5 h-5 flex justify-center items-center">
              0
            </small>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 1024 1024"
              className="text-2xl font-medium"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              data-darkreader-inline-stroke=""
              data-darkreader-inline-fill=""
            >
              <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
            </svg>
          </Link>
          <div className="md:hidden">
            <Link href="/login">
              <button className="bg-primary text-white">Log In</button>
            </Link>
          </div>
        </div>
        <ul className="w-full text-center lg:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-0 lg:w-auto transition-all duration-500 ease-in top-[-490px] false">
          <div className="lg:flex lg:items-center space-y-7 lg:space-y-0 lg:space-x-5">
            <li className="text-xl lg:my-0 my-7">
              <Link
                className="hover:text-primary uppercase text-white font-bold duration-500"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="text-xl lg:my-0 my-7">
              <Link
                className="hover:text-primary uppercase text-white font-bold duration-500"
                href="/menu"
              >
                Menu
              </Link>
            </li>
            <li className="text-xl lg:my-0 my-7">
              <Link
                className="hover:text-primary uppercase text-white font-bold duration-500"
                href="/our-shop"
              >
                Shop
              </Link>
            </li>
            <li className="text-xl lg:my-0 my-7">
              <Link
                className="hover:text-primary uppercase text-white font-bold duration-500"
                href="/blogs"
              >
                Blog
              </Link>
            </li>
            <Link className="relative hidden lg:block" href="/cart">
              <small className="absolute top-[-10px] right-[-10px] bg-primary text-white rounded-full text-xs p-1 pl-[5px] w-5 h-5 flex justify-center items-center">
                0
              </small>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 1024 1024"
                className="text-2xl font-medium text-white"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                data-darkreader-inline-stroke=""
                data-darkreader-inline-fill=""
              >
                <path d="M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"></path>
              </svg>
            </Link>
            <div>
              <Link href="/login">
                <svg
                  className="h-9 lg:h-10 p-2 text-white"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="user"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                    data-darkreader-inline-fill=""
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
