import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import HeroImage from "../HeroImage";

const HeroBanner = () => {
  const Title = () => {
    return (
      <>
        <Box maxW={500}>
          <Heading fontSize="36px">
            All in One Anxiety Test, <br></br>Kenali Jenis Kecemasanmu.
          </Heading>
          <Box maxW={400}>
            <p>
              Tes tingkat dan jenis kecemasanmu bersama kami untuk melakukan
              pencegahan dan mendapatkan bantuan professional sedini mungkin.
            </p>
          </Box>
        </Box>
      </>
    );
  };
  return (
    <>
      <Title />
      <Box pl={120}>
        <HeroImage />
      </Box>
    </>
  );
};

export default HeroBanner;