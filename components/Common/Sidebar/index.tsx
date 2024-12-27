"use client";

import Typography from "@mui/material/Typography";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useResponsive } from "@/hooks";
import { useRole } from "@/hooks";
import { useLogout } from "@/store/hooks/auth";

import FlexBox from "../FlexBox";

import {
  adminNavLinks,
  consumerNavLinks,
  dataContributorNavLinks,
  navConfig,
  verifierNavLinks,
} from "./nav-config";

interface NavLinkProps {
  path: string;
  icon: string;
  label: string;
}

interface NavConfig {
  [key: string]: {
    links: NavLinkProps[];
    settingsLink?: string;
  };
}

export default function Sidebar({ open }: { open?: boolean }) {
  const pathName = usePathname();
  const logout = useLogout();
  const isMobileView = useResponsive();
  const role = useRole();
  const roleConfig = (navConfig as NavConfig)[role];
  const { links, settingsLink } = roleConfig || { links: [], settingsLink: "" };

  const SidebarContent = () => {
    return (
      <FlexBox className="z-50 hidden md:block w-[85px] lg:w-[300px] fixed h-full min-h-screen bg-sidebar bg-gray150 border-e border-e-slate-200 overflow-y-auto">
        <FlexBox className="flex-col w-full h-full justify-between">
          <FlexBox className="flex-col">
            <img
              draggable="false"
              src="/assets/img/dashboard/sidebar/logo.png"
              alt=""
              className="m-8 mb-[34%] hidden lg:block"
            />
            <img
              draggable="false"
              src="/assets/img/dashboard/sidebar/logo-mobile.png"
              alt=""
              className="m-4 mb-[34%] block lg:hidden"
            />
            {links.map(({ label, path, icon }, i) => (
              <Link
                key={i}
                href={path}
                className={`${path == pathName && "border-e-4 border-e-blue400"} hover:bg-slate-300 group transition-all duration-300 ease-in-out`}
              >
                <FlexBox className="flex-col lg:flex-row gap-1 lg:gap-4 items-center py-2 lg:py-4 px-0 lg:px-8">
                  <img draggable="false" src={icon} alt="" className="w-6" />
                  <Typography
                    className={`${path == pathName ? "text-blue150 font-aeonik-bold" : "text-neutral-700"} mx-1 lg:mx-0 text-center text-xs lg:text-base pt-1`}
                  >
                    {label}
                  </Typography>
                </FlexBox>
              </Link>
            ))}

            {role === "admin" && (
              <>
                <Typography className="bg-white text-neutral-700 text-center text-sm lg:text-base font-aeonik-bold py-1">
                  Consumer
                </Typography>
                {consumerNavLinks.map(({ label, path, icon }, i) => (
                  <Link
                    key={i}
                    href={path}
                    className={`${path == pathName && "border-e-4 border-e-blue400"} hover:bg-slate-300 group transition-all duration-300 ease-in-out`}
                  >
                    <FlexBox className="flex-col lg:flex-row gap-1 lg:gap-4 items-center py-2 lg:py-4 px-0 lg:px-8">
                      <img
                        draggable="false"
                        src={icon}
                        alt=""
                        className="w-6"
                      />
                      <Typography
                        className={`${path == pathName ? "text-blue150 font-aeonik-bold" : "text-neutral-700"} mx-1 lg:mx-0 text-center text-xs lg:text-base pt-1`}
                      >
                        {label}
                      </Typography>
                    </FlexBox>
                  </Link>
                ))}
                <Typography className="bg-white text-neutral-700 text-center text-sm lg:text-base font-aeonik-bold py-1 mt-6">
                  Data Contributor
                </Typography>
                {dataContributorNavLinks.map(({ label, path, icon }, i) => (
                  <Link
                    key={i}
                    href={path}
                    className={`${path == pathName && "border-e-4 border-e-blue400"} hover:bg-slate-300 group transition-all duration-300 ease-in-out`}
                  >
                    <FlexBox className="flex-col lg:flex-row gap-1 lg:gap-4 items-center py-2 lg:py-4 px-0 lg:px-8">
                      <img
                        draggable="false"
                        src={icon}
                        alt=""
                        className="w-6"
                      />
                      <Typography
                        className={`${path == pathName ? "text-blue150 font-aeonik-bold" : "text-neutral-700"} mx-1 lg:mx-0 text-center text-xs lg:text-base pt-1`}
                      >
                        {label}
                      </Typography>
                    </FlexBox>
                  </Link>
                ))}
                <Typography className="bg-white text-neutral-700 text-center text-sm lg:text-base font-aeonik-bold py-1 mt-6">
                  Verifier
                </Typography>
                {verifierNavLinks.map(({ label, path, icon }, i) => (
                  <Link
                    key={i}
                    href={path}
                    className={`${path == pathName && "border-e-4 border-e-blue400"} hover:bg-slate-300 group transition-all duration-300 ease-in-out`}
                  >
                    <FlexBox className="flex-col lg:flex-row gap-1 lg:gap-4 items-center py-2 lg:py-4 px-0 lg:px-8">
                      <img
                        draggable="false"
                        src={icon}
                        alt=""
                        className="w-6"
                      />
                      <Typography
                        className={`${path == pathName ? "text-blue150 font-aeonik-bold" : "text-neutral-700"} mx-1 lg:mx-0 text-center text-xs lg:text-base pt-1`}
                      >
                        {label}
                      </Typography>
                    </FlexBox>
                  </Link>
                ))}
              </>
            )}
          </FlexBox>

          <FlexBox className="flex-col items-start text-white">
            {/* <Link
              href={settingsLink}
              className={`${pathName === settingsLink && "border-e-4 border-e-blue400"} hover:bg-slate-300 transition-all duration-300 ease-in-out w-full`}
            >
              <FlexBox className="flex-col lg:flex-row gap-2 lg:gap-4 items-center py-2 lg:py-4 px-0 lg:px-10">
                <img
                  draggable="false"
                  src="/assets/img/dashboard/sidebar/settings.png"
                  alt=""
                  className="w-6"
                />
                <Typography
                  className={`${pathName === settingsLink ? "text-blue150 font-aeonik-bold" : "text-neutral-700"} text-center text-xs lg:text-base pt-1`}
                >
                  Settings
                </Typography>
              </FlexBox>
            </Link> */}

            <FlexBox
              className={`${pathName === settingsLink && "border-e-4 border-e-blue400"} hover:bg-slate-300 cursor-pointer transition-all duration-300 ease-in-out w-full mb-2`}
              onClick={logout}
            >
              <FlexBox className="flex-col lg:flex-row gap-2 lg:gap-4 items-center py-2 lg:py-4 px-0 lg:px-10 w-full">
                <img
                  draggable="false"
                  src="/assets/img/dashboard/sidebar/logout.png"
                  alt=""
                  className="w-6"
                />
                <Typography
                  className={`${pathName === settingsLink ? "text-blue150 font-aeonik-bold" : "text-neutral-700"} text-center text-xs lg:text-base pt-1`}
                >
                  Log out
                </Typography>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    );
  };

  const MobildSidebarContent = () => {
    return (
      <FlexBox className="z-20 w-[270px] bg-sidebar bg-gray150 fixed min-h-screen h-full overflow-scroll scrollbar-hidden overflow-x-hidden">
        <FlexBox className="flex-col w-full h-full justify-between">
          <FlexBox className="flex-col">
            <Link href="/">
              <img
                draggable="false"
                src="/assets/img/dashboard/sidebar/logo.png"
                alt=""
                className="w-48 m-6 mb-[25%]"
              />
            </Link>
            {links.map(({ label, path, icon }, i) => (
              <Link
                key={i}
                href={path}
                className={`${path === pathName && "border-e-4 border-e-blue400"} hover:bg-slate-300 group transition-all duration-300 ease-in-out`}
              >
                <FlexBox className="gap-4 items-center py-4 px-6">
                  <img draggable="false" src={icon} alt="" className="w-6" />
                  <Typography
                    className={`${path === pathName ? "text-blue150 font-aeonik-bold" : "text-neutral-700"} mx-0 text-center text-base pt-1`}
                  >
                    {label}
                  </Typography>
                </FlexBox>
              </Link>
            ))}

            {role === "admin" && (
              <>
                <Typography className="bg-white text-neutral-700 text-center text-base font-aeonik-bold py-1">
                  Consumer
                </Typography>
                {consumerNavLinks.map(({ label, path, icon }, i) => (
                  <Link
                    key={i}
                    href={path}
                    className={`${path === pathName && "border-e-4 border-e-blue400"} hover:bg-slate-300 group transition-all duration-300 ease-in-out`}
                  >
                    <FlexBox className="gap-4 items-center py-4 px-6">
                      <img
                        draggable="false"
                        src={icon}
                        alt=""
                        className="w-6"
                      />
                      <Typography
                        className={`${path === pathName ? "text-blue150 font-aeonik-bold" : "text-neutral-700"} mx-0 text-center text-base pt-1`}
                      >
                        {label}
                      </Typography>
                    </FlexBox>
                  </Link>
                ))}

                <Typography className="bg-white text-neutral-700 text-center text-base font-aeonik-bold py-1 mt-6">
                  Data Contributor
                </Typography>
                {dataContributorNavLinks.map(({ label, path, icon }, i) => (
                  <Link
                    key={i}
                    href={path}
                    className={`${path === pathName && "border-e-4 border-e-blue400"} hover:bg-slate-300 group transition-all duration-300 ease-in-out`}
                  >
                    <FlexBox className="gap-4 items-center py-4 px-6">
                      <img
                        draggable="false"
                        src={icon}
                        alt=""
                        className="w-6"
                      />
                      <Typography
                        className={`${path === pathName ? "text-blue150 font-aeonik-bold" : "text-neutral-700"} mx-0 text-center text-base pt-1`}
                      >
                        {label}
                      </Typography>
                    </FlexBox>
                  </Link>
                ))}

                <Typography className="bg-white text-neutral-700 text-center text-base font-aeonik-bold py-1 mt-6">
                  Verifier
                </Typography>
                {verifierNavLinks.map(({ label, path, icon }, i) => (
                  <Link
                    key={i}
                    href={path}
                    className={`${path === pathName && "border-e-4 border-e-blue400"} hover:bg-slate-300 group transition-all duration-300 ease-in-out`}
                  >
                    <FlexBox className="gap-4 items-center py-4 px-6">
                      <img
                        draggable="false"
                        src={icon}
                        alt=""
                        className="w-6"
                      />
                      <Typography
                        className={`${path === pathName ? "text-blue150 font-aeonik-bold" : "text-neutral-700"} mx-0 text-center text-base pt-1`}
                      >
                        {label}
                      </Typography>
                    </FlexBox>
                  </Link>
                ))}
              </>
            )}
          </FlexBox>

          <FlexBox className="flex-col items-start text-white mt-[20%]">
            {/* <Link
              href={settingsLink}
              className={`${pathName === settingsLink && "border-e-4 border-e-blue400"} hover:bg-slate-300 transition-all duration-300 ease-in-out w-full`}
            >
              <FlexBox className="gap-4 items-center py-4 px-6">
                <img
                  draggable="false"
                  src="/assets/img/dashboard/sidebar/settings.png"
                  alt=""
                  className="w-6"
                />
                <Typography
                  className={`${pathName === settingsLink ? "text-blue150 font-aeonik-bold" : "text-neutral-700"} text-center text-base pt-1`}
                >
                  Settings
                </Typography>
              </FlexBox>
            </Link> */}

            <FlexBox
              className={`${pathName.includes("settings") && "border-e-4 border-e-blue400"} hover:bg-slate-300 cursor-pointer transition-all duration-300 ease-in-out w-full mb-2`}
              onClick={logout}
            >
              <FlexBox className="gap-4 items-center py-4 px-6 w-full">
                <img
                  draggable="false"
                  src="/assets/img/dashboard/sidebar/logout.png"
                  alt=""
                  className="w-6"
                />
                <Typography
                  className={`${pathName.includes("settings") ? "text-blue150 font-aeonik-bold" : "text-neutral-700"} text-center text-base pt-1`}
                >
                  Log out
                </Typography>
              </FlexBox>
            </FlexBox>
          </FlexBox>
        </FlexBox>
      </FlexBox>
    );
  };

  return (
    <>
      <SidebarContent />
      {isMobileView && open && <MobildSidebarContent />}
    </>
  );
}
