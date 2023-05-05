"use client";

import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";

interface Props {
  currentUser?: SafeUser | null;
}

const Navbar = ({ currentUser }: Props) => {
  return (
    <nav className="fixed z-10 w-full bg-white shadow-sm">
      <div className="py-4 border-b">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo />
            <SearchBar />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
      <Categories />
    </nav>
  );
};
export default Navbar;
