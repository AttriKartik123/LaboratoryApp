import { MapPin } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";

interface Contactprop {
    icon : React.ReactNode ,
    title: string ,
    content: string ,
}
export default function Contactcard({icon , title ,content}: Contactprop) {
  return (
    <Card>
      <CardHeader>
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">
        {content}
        </p>
      </CardContent>
    </Card>
  );
}
