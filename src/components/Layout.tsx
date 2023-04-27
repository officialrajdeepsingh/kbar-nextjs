import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { KBarAnimator, KBarPortal, KBarPositioner, KBarSearch, KBarProvider,Action } from "kbar";
import { useTheme } from 'next-themes';
import RenderResults from "@/components/RenderResults";
import { FaHome, FaGithub, FaPhoneAlt, FaTwitter, FaBook, FaRegSun, FaSun, FaMoon, FaSearch } from "react-icons/fa";
import React from "react"

export default function Layout({ children }:{children: React.ReactNode}) {

  // toggle theme
  const { setTheme } = useTheme()

  // Define the router 
  const router = useRouter();

  // Create the Action
  const actions:Action[] = [
    {
      id: "homeAction",
      name: "Home",
      shortcut: ["h"],
      keywords: "back",
      section: "Navigation",
      perform: () => router.push("/"),
      icon: <FaHome className="w-6 h-6 mx-3" />,
      subtitle: "Subtitles can help add more context.",
    },
    {
      id: "docsAction",
      name: "Docs",
      shortcut: ["g", "d"],
      keywords: "help",
      section: "Navigation",
      icon: <FaBook className="w-6 h-6 mx-3" />,
      perform: () => router.push("/docs"),
    },
    {
      id: "contactAction",
      name: "Contact",
      shortcut: ["c"],
      keywords: "email hello",
      section: "Navigation",
      icon: <FaPhoneAlt className="w-6 h-6 mx-3" />,
      perform: () => window.open("mailto:timchang@hey.com", "_blank"),
    },
    {
      id: "twitterAction",
      name: "Twitter",
      shortcut: ["g", "t"],
      keywords: "social contact dm",
      section: "Navigation",
      icon: <FaTwitter className="w-6 h-6 mx-3" />,
      perform: () => window.open("https://twitter.com/timcchang", "_blank"),
    },
    {
      id:"githubAction",
      name: "Github",
      shortcut: ["g", "h"],
      keywords: "sourcecode",
      section: "Navigation",
      icon: <FaGithub className="w-6 h-6 mx-3" />,
      perform: () => window.open("https://github.com/timc1/kbar", "_blank"),
    },
    {
      id: "blog",
      name: "Search Blogs",
      shortcut: ["?"],
      keywords: "serach articles",
      section: "blog",
      icon: <FaSearch className="w-6 h-6 mx-3" />
    },
    {
      id: "theme",
      name: "Change theme…",
      keywords: "interface color dark light",
      section: "Preferences",
      icon: <FaRegSun className="w-6 h-6 mx-3" />,
    },
    {
      id: "darkTheme",
      name: "Dark",
      keywords: "dark theme",
      section: "Preferences",
      perform: () => {
        setTheme("dark");
        toast.success(`Now dark theme is apply`, {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        })
      },
      icon: <FaMoon className="w-6 h-6 mx-3" />,
      parent: "theme",
    },
    {
      id: "lightTheme",
      name: "Light",
      keywords: "light theme",
      section: "Preferences",
      perform: () => {
        setTheme("light")
        toast.success(`Now light theme is apply`, {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        })
      },
      icon: <FaSun className="w-6 h-6 mx-3" />,
      parent: "theme",
    },

  ];

  /* This code is creating a layout component that wraps around the main content of a Next.js
  application. The layout component is using the KBar library to provide a search bar and a
  set of actions that can be performed by the user. */

  
  return (
  <KBarProvider options={{ enableHistory: true }} actions={actions}>

    {children}

    <KBarPortal>
      <KBarPositioner>
        <KBarAnimator className="max-w-3xlLspInfo w-3/6 bg-white border-r-8 overflow-hidden shadow-white ">
          <KBarSearch className="py-4 px-5 text-xs w-full outline-none border-none bg-white text-black " />
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  </KBarProvider>
  )
}
