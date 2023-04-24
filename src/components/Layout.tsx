import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { KBarAnimator, KBarPortal, KBarPositioner, KBarSearch, KBarProvider, useRegisterActions, createAction, useMatches, ActionImpl } from "kbar";
import { useTheme } from 'next-themes';
import RenderResults from "@/components/RenderResults";
import { FaHome, FaGithub, FaPhoneAlt, FaTwitter, FaBook, FaRegSun, FaSun, FaMoon, FaSearch } from "react-icons/fa";

const searchStyle = {
  padding: "12px 16px",
  fontSize: "16px",
  width: "100%",
  boxSizing: "border-box" as React.CSSProperties["boxSizing"],
  outline: "none",
  border: "none",
  background: "var(--background)",
  color: "var(--foreground)",
};

const animatorStyle = {
  maxWidth: "724px",
  width: "100%",
  background: "var(--background)",
  color: "var(--foreground)",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "var(--shadow)",
};



export default function Layout({ children }) {

  const { theme, setTheme } = useTheme()

  const router = useRouter();

  const actions = [
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
    createAction({
      name: "Github",
      shortcut: ["g", "h"],
      keywords: "sourcecode",
      section: "Navigation",
      icon: <FaGithub className="w-6 h-6 mx-3" />,
      perform: () => window.open("https://github.com/timc1/kbar", "_blank"),
    }),
    {
      id: "blog",
      name: "Search Blogs",
      shortcut: ["?"],
      keywords: "serach articles",
      section: "blog",
      icon: <FaSearch className="w-6 h-6 mx-3" />
    },

    {
      id: "Post One",
      name: "5 Reasons Why You Shouldn't Learn Photography On Your Own.",
      keywords: "Mollit aute nostrud voluptate amet irure consectetur commodo cupidatat elit. Non ut dolor nulla dolor duis. Anim eiusmod fugiat eiusmod ut nulla nulla labore.",
      shortcut: [],
      perform: () => router.push("/blog-my-title"),
      parent: "blog",
    },
    {
      id: "Post Two",
      name: "7 Useful Tips From Python Experts In Programming.",
      keywords: "Eiusmod quis esse aliqua sit nostrud aliquip sunt minim irure laboris reprehenderit irure ex",
      shortcut: [],
      perform: () => router.push("/blog-my-title"),
      parent: "blog",
    },
    {
      id: "Post  Three",
      name: "7 Ways To Use Computer Science To Your Advantage.",
      shortcut: [],
      perform: () => router.push("/blog-my-title"),
      keywords: "Incididunt magna do magna cupidatat ullamco laboris amet. Tempor aute ipsum culpa esse ipsum veniam excepteur duis mollit irure cillum.",
      parent: "blog",
    },
    {
      id: "Post Four",
      name: "10 Things You Most Likely Didn't Know About Health.",
      shortcut: [],
      keywords: "Culpa laboris aliquip ea consectetur mollit ea ipsum sint qui culpa laboris dolor adipisicing proident. Et officia consequat do nulla tempor cupidatat  elit.",
      perform: () => router.push("/blog-my-title"),
      parent: "blog",

    },
    {
      id: "Post Five",
      name: "15 Common Misconceptions About Health",
      keywords: "Sunt et ad ipsum consectetur culpa officia enim non magna irure consectetur qui ex.",
      shortcut: [],
      perform: () => router.push("/blog-my-title"),
      parent: "blog",

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

  return (<KBarProvider options={{ enableHistory: true }} actions={actions}>

    {children}

    <KBarPortal>
      <KBarPositioner>
        <KBarAnimator style={animatorStyle}>
          <KBarSearch style={searchStyle} />
          <RenderResults />
        </KBarAnimator>
      </KBarPositioner>
    </KBarPortal>
  </KBarProvider>)
}
