import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card" 


interface Cardsprop{
    title:string,
    description:string,
    icon?:React.ReactNode,
    firstsub:string,
    secondsub:string,
    thirdsub:string,
    fourthsub:string,
}
 export default function CardComponent({title,description,icon,firstsub,secondsub,thirdsub,fourthsub}:Cardsprop){
 return (
   
 <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                  <div />
                  {icon}
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• {firstsub}</li>
                  <li>• {secondsub} </li>
                  <li>• {thirdsub}</li>
                  <li>• {fourthsub} </li>
                </ul>
              </CardContent>
            </Card>
           
 )};