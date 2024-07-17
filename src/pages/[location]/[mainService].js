import { ALL_SERVICES, LOCATION } from "@/constants";
import { capitalizeFirstLetter } from "@/utils";

import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/solid";

export default function KeywordPage({
  mainService,
  location,
  contactNumber,
  paragraphs,
}) {
  return (
    <div className="bg-white">
      <div className="bg-white h-screen w-screen overflow-hidden">
        <div className="relative h-full w-full">
          <div className="mx-auto max-w-7xl h-full w-full">
            <img
              className="block sm:hidden aspect-[3/2] object-cover lg:aspect-auto lg:w-full"
              src="/locksmith-tools.jpg"
              alt="Locksmith Tools"
            />
            <div className="relative z-1 pt-14 lg:w-full lg:max-w-2xl h-full">
              <svg
                className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="0,0 90,0 50,100 0,100" />
              </svg>

              <div className="relative px-6 py-2 sm:py-40 lg:px-8 lg:py-56 lg:pr-0 sm:h-full flex flex-col justify-center">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  <div className="mb-10 flex">
                    <div className="relative rounded px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                      <MapPinIcon className="h-4 w-4 inline-block mr-1 mb-0.5" />
                      {capitalizeFirstLetter(mainService)}
                    </div>
                  </div>
                  <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Your {mainService} in {capitalizeFirstLetter(location)}
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Need a 24/7 emergency locksmith in {mainService}? Our
                    experts offer fast, reliable, and affordable service for
                    lockouts and security emergencies. Call us anytime for
                    immediate assistance!
                  </p>
                  <div className="mt-10 items-center gap-x-6">
                    <a
                      href="#"
                      className="hidden sm:block rounded bg-gray-900 px-5 py-5 font-semibold text-md text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                    >
                      <PhoneIcon className="h-6 w-6 inline-block mr-2" />
                      Call {contactNumber}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-full">
            <img
              className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
              src="/locksmith-tools.jpg"
              alt="Locksmith Tools"
            />
          </div>
          <div className="fixed bottom-0 left-0 right-0 flex justify-center items-center py-4 bg-white-900 sm:hidden">
            <button className="w-full px-4 mx-4 py-4 text-white bg-gray-900 rounded hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600">
              <PhoneIcon className="h-5 w-5 inline-block mr-2" />
              Call {contactNumber}
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8 pb-40">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We offer a wide range of professional locksmith services in{" "}
            {mainService}. From emergency lockouts and 24-hour assistance to
            comprehensive lock installation, repair, and key cutting, our
            experienced team is dedicated to providing fast, reliable, and
            high-quality solutions. Trust us to secure your home, business, or
            vehicle with our expert locksmith services.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {paragraphs.map((block, index) => (
            <div key={index}>
              <dt className="font-semibold text-gray-900">{block.heading}</dt>
              <dd className="mt-1 text-gray-600">{block.paragraph}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const locations = [LOCATION];

  const paths = locations.flatMap((location) =>
    ALL_SERVICES.flatMap((service) => {
      return {
        params: {
          location: location,
          mainService: service.replace(/ /g, "-").toLowerCase(),
        },
      };
    })
  );

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { location, mainService } = params;
  const contactNumber = "(+44) 7412665432";

  const services = [
    {
      location: location,
      mainService: mainService,
      services: ALL_SERVICES,
    },
  ];

  const paragraphs = services.map((serviceGroup) =>
    serviceGroup.services.map((service) => ({
      heading: `${service} in ${capitalizeFirstLetter(serviceGroup.location)}`,
      paragraph: `Our ${service.toLowerCase()} in ${
        serviceGroup.location
      } provides the best service in ${
        serviceGroup.location
      }. We offer fast response times in ${serviceGroup.location}. 
      Call us to get ${service.toLowerCase()} in ${
        serviceGroup.location
      } right away.`,
    }))
  );

  return {
    props: {
      mainService: mainService.replace(/-/g, " "),
      location: location,
      contactNumber,
      paragraphs: paragraphs[0] || [], // Ensure paragraphs is always an array
    },
  };
}
