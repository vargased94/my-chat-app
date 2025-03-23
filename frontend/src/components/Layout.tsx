import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex flex-col w-full">
        <header className="flex items-center justify-between p-4 border-b">
          <h1 className="text-2xl font-bold text-gray-800">Chat App</h1>
          <div className="flex items-center space-x-2">
            <a
              href={import.meta.env.VITE_REPO_URL || "github.com"}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-gray-500 hover:text-gray-700",
                "border border-gray-300 rounded-md p-2"
              )}
            >
              <FaGithub className="w-4 h-4" />
            </a>
          </div>
        </header>
        <main className="flex-1 px-2 py-4 md:px-4 md:py-4">{children}</main>
      </div>
    </div>
  );
}
