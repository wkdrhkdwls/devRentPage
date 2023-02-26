import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import useBannerDetail from "../../hooks/Container/Home/Banner/hook";

const Banner = () => {
  const { link, DataUrl } = useBannerDetail();
  // console.log(DataUrl.allFile.edges);
  return (
    <div className="relative w-full my-auto">
      <div>
        <img
          className="bg-center  bg-cover w-full h-full align-middle  bg-no-repeat"
          src={DataUrl.allFile.edges[0].node.publicURL}
          alt={DataUrl.allFile.edges[0].node.name}
        />
      </div>
      <div className="flex-col absolute top-full w-full ">
        <div>
          <span className="text-4xl">DevRent</span>
        </div>
        <div className=" flex justify-center items-center">
          <Link to={link}>
            <button className=" border-2 h-32 w-96">Recruit</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
