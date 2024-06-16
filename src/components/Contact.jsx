const Contact = ({ email, phone, website }) => {
  return (
    <section>
      <h3 className="mb-1 underline">Contact</h3>
      <div className="flex flex-col gap-1">
        <p>
          <span className="font-bold">Email: </span>
          {email}
        </p>
        <p>
          <span className="font-bold">Phone: </span>
          {phone}
        </p>
        <p>
          <span className="font-bold">Website: </span>
          {website}
        </p>
      </div>
    </section>
  );
};
export default Contact;
