"use client";
import React from "react";
import LogoutForm from "@/components/ui/logoutForm";
import HomeNavbar from "@/components/ui/HomeHeader";
import { Center, Stack } from "@chakra-ui/react";
import { SessionProvider } from "next-auth/react";

const LogoutPage: React.FC = () => {
    return (
        <SessionProvider>
        <div>
        <Stack gap={100}>
            <HomeNavbar />
            <Center>
            <LogoutForm />
            </Center>
        </Stack>
        </div>
        </SessionProvider>
    );
    };

    export default LogoutPage;

