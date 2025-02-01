import React from "react";
import LogoutForm from "@/components/ui/logoutForm";
import HomeNavbar from "@/components/ui/HomeHeader";
import { Center, Stack } from "@chakra-ui/react";

const LogoutPage: React.FC = () => {
    return (
        <div>
        <Stack>
            <HomeNavbar />
            <Center>
            <LogoutForm />
            </Center>
        </Stack>
        </div>
    );
    };

    export default LogoutPage;

