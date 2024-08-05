/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xJ5qXlAtEEo
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@shadcn/ui"
import Link from "react-router-dom"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from "@shadcn/ui"
import { Input } from "@shadcn/ui"
import { Card, CardContent } from "@shadcn/ui"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="flex items-center justify-between px-4 py-3 border-b bg-background">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <MenuIcon className="w-6 h-6" />
            <span className="sr-only">Toggle Navigation</span>
          </Button>
          <Link href="#" className="text-lg font-semibold" prefetch={false}>
            Notes
          </Link>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <img
                src="/placeholder.svg"
                width={32}
                height={32}
                alt="Profile"
                className="rounded-full"
                style={{ aspectRatio: "32/32", objectFit: "cover" }}
              />
              <span className="sr-only">Profile</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <UserIcon className="w-4 h-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <SettingsIcon className="w-4 h-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <LogOutIcon className="w-4 h-4" />
                <span>Logout</span>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <div className="flex-1 px-4 py-6">
        <div className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search notes..." className="pl-8 w-full rounded-lg bg-muted" />
        </div>
        <section className="mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Notes</h2>
            <Link href="#" className="text-sm text-primary" prefetch={false}>
              View all
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <Card>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">React Hooks</div>
                  <div className="text-xs text-muted-foreground">2 days ago</div>
                </div>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  Learn how to use React Hooks to build powerful and reusable components.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Java Streams</div>
                  <div className="text-xs text-muted-foreground">5 days ago</div>
                </div>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  Explore the power of Java Streams to write concise and efficient code.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium">Tailwind CSS</div>
                  <div className="text-xs text-muted-foreground">1 week ago</div>
                </div>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">Lorem ipsum</p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="mt-8">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Note Categories</h2>
            <Link href="#" className="text-sm text-primary" prefetch={false}>
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-4">
            <Link href="#" className="bg-muted rounded-lg px-4 py-3 flex items-center justify-between" prefetch={false}>
              <div className="text-sm font-medium">React</div>
              <ChevronRightIcon className="w-4 h-4 text-muted-foreground" />
            </Link>
            <Link href="#" className="bg-muted rounded-lg px-4 py-3 flex items-center justify-between" prefetch={false}>
              <div className="text-sm font-medium">Java</div>
              <ChevronRightIcon className="w-4 h-4 text-muted-foreground" />
            </Link>
            <Link href="#" className="bg-muted rounded-lg px-4 py-3 flex items-center justify-between" prefetch={false}>
              <div className="text-sm font-medium">Tailwind CSS</div>
              <ChevronRightIcon className="w-4 h-4 text-muted-foreground" />
            </Link>
            <Link href="#" className="bg-muted rounded-lg px-4 py-3 flex items-center justify-between" prefetch={false}>
              <div className="text-sm font-medium">JavaScript</div>
              <ChevronRightIcon className="w-4 h-4 text-muted-foreground" />
            </Link>
          </div>
        </section>
      </div>
      <nav className="flex items-center justify-between px-4 py-3 border-t bg-background">
        <Link
          href="#"
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          <HomeIcon className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          <SearchIcon className="w-6 h-6" />
          <span className="text-xs">Search</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          <PlusIcon className="w-6 h-6" />
          <span className="text-xs">Add</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          <LayoutGridIcon className="w-6 h-6" />
          <span className="text-xs">Categories</span>
        </Link>
        <Link
          href="#"
          className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground"
          prefetch={false}
        >
          <UserIcon className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </Link>
      </nav>
    </div>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LayoutGridIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  )
}


function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function SettingsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}