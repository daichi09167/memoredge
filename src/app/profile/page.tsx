import React from 'react';
import ProfileForm from "@/components/ui/ProfileForm";
import HomeNavbar from "@/components/ui/HomeHeader";
import { Center, Stack } from "@chakra-ui/react"

const ProfilePage = () => {
  return (
    <div>
      <Stack>
        <HomeNavbar />
        <ProfileForm />
      </Stack>
    </div>
  );
};

export default ProfilePage;