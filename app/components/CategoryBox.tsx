"use client";

import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface Props {
  label: string;
  icon: IconType;
  selected?: boolean;
}

const CategoryBox = ({ label, icon: Icon, selected }: Props) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = queryString.parse(params.toString());
    }

    const updatedQuery: any = { ...currentQuery, category: label };

    if (params?.get("category") === label) {
      delete updatedQuery.category;
    }

    const url = queryString.stringifyUrl(
      { url: "/", query: updatedQuery },
      { skipNull: true }
    );

    router.push(url);
  }, [params, label, router]);

  return (
    <div
      onClick={handleClick}
      className={`${
        selected
          ? "border-b-neutral-800 text-neutral-800"
          : "border-transparent text-neutral-500"
      } flex flex-col items-center justify-center gap-2 p-3 transition border-b-2 cursor-pointer hover:text-neutral-800`}
    >
      <Icon size={26} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};
export default CategoryBox;
