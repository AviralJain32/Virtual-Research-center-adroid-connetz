// import {
//     Menubar,
//     MenubarCheckboxItem,
//     MenubarContent,
//     MenubarItem,
//     MenubarMenu,
//     MenubarRadioGroup,
//     MenubarRadioItem,
//     MenubarSeparator,
//     MenubarShortcut,
//     MenubarSub,
//     MenubarSubContent,
//     MenubarSubTrigger,
//     MenubarTrigger,
//   } from "@/components/ui/menubar"
  

// const Navbar = () => {
//   return (
//     <header>
//        <Menubar>
//       <MenubarMenu>
//         <MenubarTrigger>File</MenubarTrigger>
//         <MenubarContent>
//           <MenubarItem>
//             New Tab <MenubarShortcut>⌘T</MenubarShortcut>
//           </MenubarItem>
//           <MenubarItem>
//             New Window <MenubarShortcut>⌘N</MenubarShortcut>
//           </MenubarItem>
//           <MenubarItem disabled>New Incognito Window</MenubarItem>
//           <MenubarSeparator />
//           <MenubarSub>
//             <MenubarSubTrigger>Share</MenubarSubTrigger>
//             <MenubarSubContent>
//               <MenubarItem>Email link</MenubarItem>
//               <MenubarItem>Messages</MenubarItem>
//               <MenubarItem>Notes</MenubarItem>
//             </MenubarSubContent>
//           </MenubarSub>
//           <MenubarSeparator />
//           <MenubarItem>
//             Print... <MenubarShortcut>⌘P</MenubarShortcut>
//           </MenubarItem>
//         </MenubarContent>
//       </MenubarMenu>
//       <MenubarMenu>
//         <MenubarTrigger>Edit</MenubarTrigger>
//         <MenubarContent>
//           <MenubarItem>
//             Undo <MenubarShortcut>⌘Z</MenubarShortcut>
//           </MenubarItem>
//           <MenubarItem>
//             Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
//           </MenubarItem>
//           <MenubarSeparator />
//           <MenubarSub>
//             <MenubarSubTrigger>Find</MenubarSubTrigger>
//             <MenubarSubContent>
//               <MenubarItem>Search the web</MenubarItem>
//               <MenubarSeparator />
//               <MenubarItem>Find...</MenubarItem>
//               <MenubarItem>Find Next</MenubarItem>
//               <MenubarItem>Find Previous</MenubarItem>
//             </MenubarSubContent>
//           </MenubarSub>
//           <MenubarSeparator />
//           <MenubarItem>Cut</MenubarItem>
//           <MenubarItem>Copy</MenubarItem>
//           <MenubarItem>Paste</MenubarItem>
//         </MenubarContent>
//       </MenubarMenu>
//       <MenubarMenu>
//         <MenubarTrigger>View</MenubarTrigger>
//         <MenubarContent>
//           <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>
//           <MenubarCheckboxItem checked>
//             Always Show Full URLs
//           </MenubarCheckboxItem>
//           <MenubarSeparator />
//           <MenubarItem inset>
//             Reload <MenubarShortcut>⌘R</MenubarShortcut>
//           </MenubarItem>
//           <MenubarItem disabled inset>
//             Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>
//           </MenubarItem>
//           <MenubarSeparator />
//           <MenubarItem inset>Toggle Fullscreen</MenubarItem>
//           <MenubarSeparator />
//           <MenubarItem inset>Hide Sidebar</MenubarItem>
//         </MenubarContent>
//       </MenubarMenu>
//       <MenubarMenu>
//         <MenubarTrigger>Profiles</MenubarTrigger>
//         <MenubarContent>
//           <MenubarRadioGroup value="benoit">
//             <MenubarRadioItem value="andy">Andy</MenubarRadioItem>
//             <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>
//             <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>
//           </MenubarRadioGroup>
//           <MenubarSeparator />
//           <MenubarItem inset>Edit...</MenubarItem>
//           <MenubarSeparator />
//           <MenubarItem inset>Add Profile...</MenubarItem>
//         </MenubarContent>
//       </MenubarMenu>
//     </Menubar>
//     </header>
//   )
// }

// export default Navbar



"use client";

import Image from "next/image";
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

const Navbar = () => {
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
            <MenubarTrigger>Home</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Key Projects</MenubarItem>
              <MenubarItem>Featured Publications</MenubarItem>
              <MenubarItem>News and Highlights</MenubarItem>
            </MenubarContent>
          </MenubarMenu>

          {/* About Us */}
          <MenubarMenu>
            <MenubarTrigger>About Us</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Introduction to Research Center</MenubarItem>
              <MenubarSub>
                <MenubarSubTrigger>Team</MenubarSubTrigger>
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