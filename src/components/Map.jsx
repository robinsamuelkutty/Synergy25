import React from "react";

const MapPinIcon = ({ className }) => (
  <svg
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
      clipRule="evenodd"
    />
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z" />
  </svg>
);

const EnvelopeIcon = ({ className }) => (
  <svg
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M2.038 5.61A2.01 2.01 0 0 0 2 6v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6c0-.12-.01-.238-.03-.352l-.866.65-7.89 6.032a2 2 0 0 1-2.429 0L2.884 6.288l-.846-.677Z" />
    <path d="M20.677 4.117A1.996 1.996 0 0 0 20 4H4c-.225 0-.44.037-.642.105l.758.607L12 10.742 19.9 4.7l.777-.583Z" />
  </svg>
);

const ClockIcon = ({ className }) => (
  <svg
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
      clipRule="evenodd"
    />
  </svg>
);

const GlobeAltIcon = ({ className }) => (
  <svg
    className={className}
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      fillRule="evenodd"
      d="M8.64 4.737A7.97 7.97 0 0 1 12 4a7.997 7.997 0 0 1 6.933 4.006h-.738c-.65 0-1.177.25-1.177.9 0 .33 0 2.04-2.026 2.008-1.972 0-1.972-1.732-1.972-2.008 0-1.429-.787-1.65-1.752-1.923-.374-.105-.774-.218-1.166-.411-1.004-.497-1.347-1.183-1.461-1.835ZM6 4a10.06 10.06 0 0 0-2.812 3.27A9.956 9.956 0 0 0 2 12c0 5.289 4.106 9.619 9.304 9.976l.054.004a10.12 10.12 0 0 0 1.155.007h.002a10.024 10.024 0 0 0 1.5-.19 9.925 9.925 0 0 0 2.259-.754 10.041 10.041 0 0 0 4.987-5.263A9.917 9.917 0 0 0 22 12a10.025 10.025 0 0 0-.315-2.5A10.001 10.001 0 0 0 12 2a9.964 9.964 0 0 0-6 2Zm13.372 11.113a2.575 2.575 0 0 0-.75-.112h-.217A3.405 3.405 0 0 0 15 18.405v1.014a8.027 8.027 0 0 0 4.372-4.307ZM12.114 20H12A8 8 0 0 1 5.1 7.95c.95.541 1.421 1.537 1.835 2.415.209.441.403.853.637 1.162.54.712 1.063 1.019 1.591 1.328.52.305 1.047.613 1.6 1.316 1.44 1.825 1.419 4.366 1.35 5.828Z"
      clipRule="evenodd"
    />
  </svg>
);

const MapComponent = ({ locationData }) => {
  if (!locationData) {
    return (
      <div
        className="bg-red-900 border border-red-700 text-red-300 px-4 py-3 rounded relative text-center my-8 shadow-lg"
        role="alert"
      >
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline"> Location data not available.</span>
      </div>
    );
  }

  const { name, tagline, mapEmbedUrl, address, contact, otherInfo } =
    locationData;

  const renderOtherInfoItem = (item, index) => {
    let IconComponent;
    switch (item.icon) {
      case "ClockIcon":
        IconComponent = ClockIcon;
        break;
      case "GlobeAltIcon":
        IconComponent = GlobeAltIcon;
        break;
      default:
        IconComponent = null;
    }

    return (
      <div key={index} className="flex items-start space-x-3">
        {IconComponent && (
          <IconComponent className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
        )}
        <div>
          <p className="font-semibold text-gray-200">{item.label}:</p>
          {item.link ? (
            <a
              href={
                item.value.startsWith("http")
                  ? item.value
                  : `https://${item.value}`
              }
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-100 hover:underline break-all transition-colors duration-300"
            >
              {item.value}
            </a>
          ) : (
            <p className="text-gray-400 break-words">{item.value}</p>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      id="contact"
      className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 font-mono text-white antialiased"
      
    >
      <div className="max-w-6xl mx-auto bg-gray-800 rounded-2xl shadow-purple-500/50 shadow-2xl overflow-hidden md:flex border border-purple-700" data-aos="fade-up"
      data-aos-delay="100">
        {/* Map Section */}
        <div className="w-full md:w-1/2">
          {mapEmbedUrl ? (
            <div className="aspect-video md:aspect-auto md:h-full">
              <iframe
                src={mapEmbedUrl}
                className="w-full h-full object-cover border-0 filter grayscale hover:grayscale-0 transition-all duration-500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${name || "Location"} Map`}
              ></iframe>
            </div>
          ) : (
            <div className="w-full aspect-video md:aspect-auto md:h-full bg-gray-900 flex items-center justify-center">
              <p className="text-gray-500 text-lg animate-pulse">Initializing Map...</p>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-purple-400 mb-2">
            {name || "Tech Fest Nexus"}
          </h1>
          <p className="text-purple-300 mb-6 text-md sm:text-lg italic">
            {tagline || "Innovate. Create. Elevate."}
          </p>

          {address && (
            <div className="mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-100 mb-3 flex items-center">
                <MapPinIcon className="w-6 h-6 mr-3 text-purple-500 flex-shrink-0" />
                Access Point
              </h2>
              <address className="text-sm sm:text-base text-gray-300 not-italic space-y-1">
                <p>{address.street}</p>
                <p>
                  {address.city}, {address.state} {address.zip}
                </p>
                <p>{address.country}</p>
              </address>
            </div>
          )}

          {contact && (
            <div className="mb-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-100 mb-3">
                Connect With Us
              </h2>
              <div className="space-y-3 text-sm sm:text-base">
                {contact.phone && (
                  <div className="flex items-center">
                    <PhoneIcon className="w-5 h-5 mr-3 text-purple-400 flex-shrink-0" />
                    <a
                      href={`tel:${contact.phone}`}
                      className="text-gray-300 hover:text-purple-300 transition-colors duration-300"
                    >
                      {contact.phone}
                    </a>
                  </div>
                )}
                {contact.email && (
                  <div className="flex items-center">
                    <EnvelopeIcon className="w-5 h-5 mr-3 text-purple-400 flex-shrink-0" />
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-gray-300 hover:text-purple-300 break-all transition-colors duration-300"
                    >
                      {contact.email}
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}

          {otherInfo && otherInfo.length > 0 && (
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-100 mb-3">
                Further Intel
              </h2>
              <div className="space-y-4 text-sm sm:text-base">
                {otherInfo.map(renderOtherInfoItem)}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MapComponent;