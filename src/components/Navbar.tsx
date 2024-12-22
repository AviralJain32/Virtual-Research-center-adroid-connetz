
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
import NextLink from "next/link"
import { useRouter } from "next/navigation";

const Navbar = () => { 
  const router=useRouter()
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
            <MenubarTrigger>Research</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Research Themes</MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>Emerging Applications/Use Cases</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Completed Projects</MenubarItem>
                  <MenubarItem>Collaborators</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarItem>Upcoming Funding Calls</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* Services/Consultancy */}
          <MenubarMenu>
            <MenubarTrigger>Services/Consultancy</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Proposal Writing Training</MenubarItem>
              <MenubarItem>Impact Case Studies</MenubarItem>
              <MenubarItem>Training to Publish High-Quality Articles</MenubarItem>
              <MenubarItem>Bridging and Connecting Services</MenubarItem>
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
                <MenubarSubTrigger>Publications</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Journals</MenubarItem>
                  <MenubarItem>Conferences</MenubarItem>
                  <MenubarItem>Books and Chapters</MenubarItem>
                  <MenubarItem>Monographs</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSub>
                <MenubarSubTrigger>Resources</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Datasets</MenubarItem>
                  <MenubarItem>Tools and Software</MenubarItem>
                  <MenubarItem>Open Access Research</MenubarItem>
                  <MenubarItem>Collaboration Portals</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>

          {/* Professional Development */}
          <MenubarMenu>
            <MenubarTrigger>Professional Development</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Upcoming and Past Events</MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>Courses/Trainings</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Professional Development Courses</MenubarItem>
                  <MenubarItem>Virtual Research Learning Series</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
            </MenubarContent>
          </MenubarMenu>

          {/* Contact Us */}
          <MenubarMenu>
            <MenubarTrigger>Contact Us</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Our Offices</MenubarItem>
              <MenubarItem>Contact Form</MenubarItem>
              <MenubarItem>Email and Phone</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        {/* Sign Up/Sign In Buttons */}
        <div className="flex space-x-4">
          <Button variant="secondary">Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
