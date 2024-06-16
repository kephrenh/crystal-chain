import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getUser } from "../api/todosApi";
import Address from "../components/Address";
import Company from "../components/Company";
import Contact from "../components/Contact";
import Name from "../components/Name";
import Todos from "../components/Todos";

const UserPage = () => {
  const { id } = useParams();

  const userQuery = useQuery({
    queryKey: ["users", id],
    enabled: id != undefined,
    queryFn: () => getUser(id),
  });

  const {
    data: user,
    isLoading: isLoadingUser,
    isError: isErrorUser,
    error: errorUser,
  } = userQuery;

  let content;
  if (isLoadingUser) {
    content = <span>Loading...</span>;
  } else if (isErrorUser) {
    content = <span>Error: {errorUser.message}</span>;
  } else {
    content = (
      <section className="flex flex-col gap-4 mt-6 px-10 pb-10">
        <section className="flex flex-col gap-4">
          <h2>Personal Information</h2>
          <Name
            name={user.name}
            username={user.username}
          />
          <div className="flex flex-col gap-4">
            <Contact
              email={user.email}
              phone={user.phone}
              website={user.website}
            />
            <Address
              suite={user.address.suite}
              street={user.address.street}
              city={user.address.city}
              zipcode={user.address.zipcode}
              lat={user.address.geo.lat}
              lng={user.address.geo.lng}
            />
            <Company
              name={user.company.name}
              catchphrase={user.company.catchPhrase}
              bs={user.company.bs}
            />

            <Todos userId={id} />
          </div>
        </section>
      </section>
    );
  }

  return <>{content}</>;
};
export default UserPage;
