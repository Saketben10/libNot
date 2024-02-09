import { SelectedOrg } from "./_components/selected-org";

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
