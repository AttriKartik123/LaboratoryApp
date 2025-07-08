import { Button } from "../components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card"

export default function Home() {
  return<>
  <Button className="bg-red-500 font-bold border-2">click me</Button>
  <Card>
  <CardHeader>
    <CardTitle>Products</CardTitle>
    <CardDescription>Welcome to the brand new jeep cherokee</CardDescription>
    <CardAction>Buy now </CardAction>
  </CardHeader>
  <CardContent>
    <p>Card Content</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
  </>
}