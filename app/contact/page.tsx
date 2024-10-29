"use client";
import Link from "next/link";
import { contacts } from "./contactList";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="flex flex-col space-y-6 md:space-y-10 lg:mx-20 lg:justify-between">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className="flex flex-col justify-center rounded-3xl border-2 border-gray-200 px-5 py-3 shadow-xl transition-all duration-500 hover:scale-95 hover:border-purple-500 md:px-10 md:py-6"
        >
          <Link href={contact.link} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center space-x-8">
              <Image
                src={contact.icon}
                alt={contact.name}
                width={60}
                height={60}
                className="hidden md:block"
              />
              <div className="text-base md:text-xl lg:text-2xl">
                {contact.name}
              </div>
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}
