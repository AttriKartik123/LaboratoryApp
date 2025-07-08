import { Button } from "@/components/ui/button";
import HomePage from "./Home/page"
export default function Home() {
  return (
     <main className="flex min-h-screen items-center justify-center">
      <Button variant="default">Hello Shadcn</Button>
      <HomePage/>
    </main>
  );
}
