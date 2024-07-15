import Link from 'next/link';

export default function Home() {
  const locations = ['fulham', 'west-brompton', 'chelsea']; // Add all your locations here

  return (
    <div className="bg-white">
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 pb-40">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Emergency Locksmith Services
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          We offer a wide range of professional locksmith services in various locations. Click on a location to view our services.
        </p>
        <ul className="mt-10">
          {locations.map((location, index) => (
            <li key={index} className="mt-4">
              {/* Remove the nested <a> tag */}
              <Link href={`/${location}`} className="text-xl font-semibold text-blue-600 hover:underline">
                Emergency Locksmith Services in {location.charAt(0).toUpperCase() + location.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
