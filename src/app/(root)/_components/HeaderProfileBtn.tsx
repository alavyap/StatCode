"use client";
// import LoginButton from "@/components/LoginButton";
import { SignedOut, UserButton } from "@clerk/nextjs";
import { LogIn, User } from "lucide-react";

function HeaderProfileBtn() {
  return (
    <>
      <UserButton>
        <UserButton.MenuItems>
          <UserButton.Link
            label="Profile"
            labelIcon={<User className="size-4" />}
            href="/profile"
          />
        </UserButton.MenuItems>
      </UserButton>

      <SignedOut>
        {/* <LoginButton /> */}
        <LogIn />
      </SignedOut>
    </>
  );
}
export default HeaderProfileBtn;
