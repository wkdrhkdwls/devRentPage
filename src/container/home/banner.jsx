import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import useBannerDetail from "../../hooks/Container/Home/Banner/hook";

const Banner = ({ title }) => {
  const link = useBannerDetail();
  return (
    <div>
      <Link to={link}>
        <span>Recruit</span>
      </Link>
    </div>
  );
};

export default Banner;
