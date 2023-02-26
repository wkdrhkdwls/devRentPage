import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import useBannerDetail from "../../hooks/Container/Home/Banner/hook";

const Banner = () => {
  const { link, DataUrl } = useBannerDetail();
  // console.log(DataUrl.allFile.edges);
  return (
    <section className="relative w-full flex flex-col items-center">
      <p className="absolute top-80 text-center z-10 font-bold text-7xl text-white break-keep">
        실전 프로젝트를 통해 성장 기회와 프로로써의 경험을 얻을 수 있는 단체
      </p>
      <img
        className="bg-center  bg-cover w-full h-full align-middle  bg-no-repeat"
        src={DataUrl}
        alt=""
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center overflow-auto">
        <span className="break-all mb-8 text-white text-6xl font-bold"></span>
        <button className="bg-white text-black py-4 px-8 rounded-full">
          <Link to={link}>지원하기</Link>
        </button>
      </div>
    </section>
  );
};

export default Banner;
