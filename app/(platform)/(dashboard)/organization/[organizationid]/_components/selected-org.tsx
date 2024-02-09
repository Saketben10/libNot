"use client";

import { useOrganizationList } from "@clerk/nextjs";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export const SelectedOrg = () => {
  const params = useParams();
  const { setActive, isLoaded } = useOrganizationList();

  useEffect(() => {
    if (!isLoaded) {
      // Clerk is not loaded yet, skip setting the active organization
      return;
    }
    if (!setActive) return;

    if (!params.organizationid) {
      console.error("params.organizationId is undefined");
      return;
    }

    setActive({
      organization: params.organizationid as string,
    });
  }, [setActive, isLoaded, params.organizationid]);

  return null;
};

// this helps to redirects user according to the links provided
