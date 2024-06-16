const Company = ({ name, catchphrase, bs }) => {
  return (
    <section>
      <h3 className="mb-1 underline">Company</h3>
      <div className="flex flex-col gap-1">
        <p>
          <span className="font-bold">Company Name:</span> {name}
        </p>
        <p>
          <span className="font-bold">Catch Phrase:</span> {catchphrase}
        </p>
        <p>
          <span className="font-bold">bs:</span> {bs}
        </p>
      </div>
    </section>
  );
};
export default Company;
