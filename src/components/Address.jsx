const Address = ({ street, suite, city, zipcode, lat, lng }) => {
  return (
    <section>
      <h3 className="mb-1 underline">Address</h3>
      <div className="grid grid-cols-1 gap-1">
        <p>
          <span className="font-bold">Street: </span>
          {street}
        </p>
        <p>
          <span className="font-bold">Suite: </span>
          {suite}
        </p>
        <p>
          <span className="font-bold">City: </span>
          {city}
        </p>
        <p>
          <span className="font-bold">ZipCode: </span>
          {zipcode}
        </p>
        <p>
          <span className="font-bold">Latitude: </span>
          {lat}
        </p>
        <p>
          <span className="font-bold">Longitude: </span>
          {lng}
        </p>
      </div>
    </section>
  );
};
export default Address;
