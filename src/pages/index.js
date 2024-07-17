import { ALL_SERVICES, LOCATION } from "@/constants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 pb-40">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Emergency Locksmith Services
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We offer a wide range of professional locksmith services in various
          locations. Click on a location to view our services.
        </p>
        <ul className="mt-10">
          {ALL_SERVICES.map((service, index) => (
            <li key={index} className="mt-4">
              <Link
                href={`/${LOCATION}/${service
                  .replace(/ /g, "-")
                  .toLowerCase()}`}
                className="text-xl font-semibold text-blue-600 hover:underline"
              >
                {service} in {LOCATION}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
