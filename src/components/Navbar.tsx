
"use client";

import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { User } from "next-auth";
import { useSession } from 'next-auth/react';
import Link from "next/link";
import NextLink from "next/link"
import { useRouter } from "next/navigation";
import { Account } from "./AccountSectionNavbar";

const Navbar = () => { 
  const router=useRouter()
  const { data: session } = useSession();
  const user: User = session?.user;
  return (
    <header className="w-full bg-white shadow-md">
      <div className=" mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* <Image
            src="/images/logo.png"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full"
          /> */}
          <span className="text-lg font-semibold text-gray-800">
            Virtual Research Center
          </span>
        </div>

        {/* Navbar Menu */}
        <Menubar className="hidden lg:flex space-x-6">

        {/* Home Page */}
          <MenubarMenu>
            <MenubarTrigger onClick={()=>router.push("/")}>Home</MenubarTrigger>
            <MenubarContent>
              <MenubarItem><NextLink href={"/key-projects"}>Key Projects</NextLink></MenubarItem>
              <MenubarItem><NextLink href={"/featured-publication"}>Featured Publications</NextLink></MenubarItem>
              <MenubarItem ><NextLink href={"/recent-highlights"}>News and Highlights</NextLink></MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* About Us */}
          <MenubarMenu>
            <MenubarTrigger onClick={()=>router.push("/about-us-section")}>About Us</MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={()=>router.push("/about-us-section")}>Introduction to Research Center</MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger onClick={()=>router.push("/teams-section")}>Team</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Project Managers</MenubarItem>
                  <MenubarItem>Researchers</MenubarItem>
                  <MenubarItem>Consultants</MenubarItem>
                  <MenubarItem>Advisers</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>

          
          
          {/* Research */}
          <MenubarMenu>
            <MenubarTrigger onClick={()=>router.push("/researchThemes")}>Research</MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={()=>router.push("/researchThemes")}>Research Themes</MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger onClick={()=>router.push("/emergingApplications")}>Emerging Applications/Use Cases</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem ><Link href={"/emergingApplications#EmergingApplications"} scroll={true}>Completed Projects</Link></MenubarItem>
                  <MenubarItem ><Link href={"/emergingApplications#EmergingApplications"} scroll={true}>Collaborators</Link></MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem onClick={()=>router.push("/upcomingFundingCalls")}>Upcoming Funding Calls</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* Services/Consultancy */}
          <MenubarMenu>
            <MenubarTrigger><Link href={"/proposalWritingTraining"}>Services/Consultancy</Link></MenubarTrigger>
            <MenubarContent>
              <MenubarItem> <Link href={"/proposalWritingTraining"}>Proposal Writing Training</Link></MenubarItem>
              <MenubarItem> <Link href={"/ImpactCaseStudies"}>Impact Case Studies</Link></MenubarItem>
              <MenubarItem> <Link href={"/HighQualityArticles"}>Training to Publish High-Quality Articles</Link></MenubarItem>
              <MenubarItem> <Link href={"/BridgingAndConnectingServices"}>Bridging and Connecting Services</Link></MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          
          {/* Join Us */}
          {/* <MenubarMenu>
            <MenubarTrigger>Join Us</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>As a Collaborator</MenubarItem>
              <MenubarItem>As a Researcher</MenubarItem>
              <MenubarItem>As a Consultant</MenubarItem>
            </MenubarContent>
          </MenubarMenu> */}

          {/* Resources and Publications */}
          <MenubarMenu>
            <MenubarTrigger>Resources and Publications</MenubarTrigger>
            <MenubarContent>
            <MenubarSub>
              <Link href="/publications"><MenubarSubTrigger>Publications</MenubarSubTrigger></Link>
              <MenubarSubContent>
                <Link href="/publications#journals">
                  <MenubarItem>Journals</MenubarItem>
                </Link>
                <Link href="/publications#conferences">
                  <MenubarItem>Conferences</MenubarItem>
                </Link>
                <Link href="/publications#books-chapters">
                  <MenubarItem>Books and Chapters</MenubarItem>
                </Link>
                <Link href="/publications#monographs">
                  <MenubarItem>Monographs</MenubarItem>
                </Link>
              </MenubarSubContent>
            </MenubarSub>
              
              <MenubarSub>
                <MenubarSubTrigger>Resources</MenubarSubTrigger>
                <MenubarSubContent>
                  <Link href="/resources#datasets">
                    <MenubarItem>Datasets</MenubarItem>
                  </Link>
                  <Link href="/resources#tools-software">
                    <MenubarItem>Tools and Software</MenubarItem>
                  </Link>
                  <Link href="/resources#open-access-research">
                    <MenubarItem>Open Access Research</MenubarItem>
                  </Link>
                  <Link href="/resources#collaboration-portals">
                    <MenubarItem>Collaboration Portals</MenubarItem>
                  </Link>
                </MenubarSubContent>
              </MenubarSub>

            </MenubarContent>
          </MenubarMenu>

          {/* Professional Development */}
          <MenubarMenu>
            <MenubarTrigger>Professional Development</MenubarTrigger>
            <MenubarContent>
              <Link href={"/upcomingAndPastEvents"}><MenubarItem>Upcoming and Past Events</MenubarItem></Link>
              <MenubarSub>
              <Link href={"/courses"}><MenubarSubTrigger>Courses/Trainings</MenubarSubTrigger></Link>
                <MenubarSubContent>
                <Link href={"/courses#training"}><MenubarItem>Professional Development Courses</MenubarItem></Link>
                <Link href={"/courses#virtual-research-learning-series"}><MenubarItem>Virtual Research Learning Series</MenubarItem></Link>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>

          {/* Contact Us */}
          <MenubarMenu>
            <Link href={"/contact-us"}><MenubarTrigger>Contact Us</MenubarTrigger></Link>
            <MenubarContent>
            <Link href={"/contact-us#ourOffices"}><MenubarItem>Our Offices</MenubarItem></Link>
            <Link href={"/contact-us#contactForm"}><MenubarItem>Contact Form</MenubarItem></Link>
            <Link href={"contact-us#emailAndPhone"}><MenubarItem>Email and Phone</MenubarItem></Link>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        {/* Sign Up/Sign In Buttons */}
        <div className="flex flex-col lg:flex-row gap-6">
          {session ? (
            <>
              <div className="flex flex-col lg:flex-row gap-3">
                <Link href="/create-conference">
                  <Button variant={'default'}>Create Conference</Button>
                </Link>
                <Link href="/dashboard">
                  <Button className="w-full md:w-auto bg-slate-100 text-black" variant="outline">
                    Dashboard
                  </Button>
                </Link>
                <Account {...user} />
              </div>
            </>
          ) : (
            <div className="flex gap-4 items-center">
              <Link href="/sign-in">
                <Button className="p-2 h-8 rounded-sm" variant="ghost">
                  Login
                </Button>
              </Link>
              <Link href="/sign-up">
                <Button className="p-2 h-8 rounded-sm" variant="default">
                  Sign up
                </Button>
              </Link>
            </div>
          )}
        </div>
        </div>
    </header>
  );
};

export default Navbar;
