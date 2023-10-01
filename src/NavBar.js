import React from 'react';
import { Box, Button, Flex, Image, Link, Spacer} from '@chakra-ui/react';
import Facebook from "./assets/social-media-icons/logo-de-facebook32.png";
import Twitter from "./assets/social-media-icons/logo-twitter-x32.png";
import Email from "./assets/social-media-icons/logo-instagramx32.png";

const NavBar = ({ accounts, setAccounts }) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <Flex justify="space-evenly" align="center" padding="30px">
            <Flex justify="space-between" align="center" padding="30px">
                <Link href="https://www.facebook.com">
                    <Image src={Facebook} boxSize="42px" margin="0 15px" />
                </Link>
            </Flex>
            <Flex justify="space-between" align="center" padding="30px">
                <Link href="https://www.twitter.com">
                    <Image src={Twitter} boxSize="42px" margin="0 15px" />
                </Link>
            </Flex>
            <Flex justify="space-between" align="center" padding="30px">
                <Link href="https://www.gmail.com">
                    <Image src={Email} boxSize="42px" margin="0 15px" />
                </Link>
            </Flex>


            {/* Right Side - Social Media Icons */}
            <Flex 
                justify="space-around" 
                align="center" 
                width="40%"
                padding="30px"
            >
                <Box margin="0 15px">Sobre</Box>
                <Spacer />
                <Box margin="0 15px">Dapp</Box>
                <Spacer />
                <Box margin="0 15px">Mind</Box>
                <Spacer />

                {isConnected ? (
                    <Box margin="0 15px">Connectado</Box>
                ) : (
                    <Button
                        backgroundColor="#45fe91"
                        borderRadius="5px"
                        boxShadow="0px 2px 2px 1px #0F0F0F"
                        color="white"
                        cursor="pointer"
                        fontFamily="inherit"
                        padding="15px"
                        margin="0 15px"
                        onClick={connectAccount}
                    >
                        Connectar
                    </Button>
                )}
            </Flex>
        </Flex>
    )
}

export default NavBar;