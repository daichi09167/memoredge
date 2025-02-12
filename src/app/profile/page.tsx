"use client";  
import React from 'react';
import ProfileForm from "@/components/ui/ProfileForm";
import HomeNavbar from "@/components/ui/HomeHeader";
import { Stack } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";

const ProfilePage = () => {
  return (
    <SessionProvider>  {/* ここで SessionProvider でラップ */}
    <div>
      <Stack>
        <HomeNavbar />
        <ProfileForm />
      </Stack>
    </div>
    </SessionProvider>
  );
};

export default ProfilePage;