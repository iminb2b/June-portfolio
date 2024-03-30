import HomePageHero from "@/components/HomePage/HomePageHero";
import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import HomePageMyServices from "@/components/HomePage/HomePageMyServices";
import Link from "next/link";
import routeLinks from "@/routeLinks";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const link = css`
  font-size: 2rem;
  font-weight: bold;
  background-color: ${colors.yellow};
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
  gap: 1rem;
`;
const icon = css`
  font-size: 2.5rem;
`;
const HomePage: NextPage = () => {
  return (
    <PageContainer dark={false}>
      <PageMeta title="June - Duyen Nguyen" description={"Nhung Nguyen"} />
      <Header dark={false} />
      <HomePageHero />
      <HomePageMyServices />

      <Link href={routeLinks.projects()} css={link}>
        See How I untied the knots <ArrowForwardIcon css={icon} />
      </Link>

      <Footer />
    </PageContainer>
  );
};

export default HomePage;
