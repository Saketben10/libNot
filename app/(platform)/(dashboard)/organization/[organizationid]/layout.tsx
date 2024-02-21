import { auth } from "@clerk/nextjs";
import { startCase } from "lodash";
import { SelectedOrg } from "./_components/selected-org";



export async function  generateMetaData(){

  const {orgSlug} = auth()

  return {
    title : startCase(orgSlug || "organization")
  }

}

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* selects org according to params provided */}
      <SelectedOrg />
      {children}
    </>
  );
};

export default OrganizationIdLayout;
