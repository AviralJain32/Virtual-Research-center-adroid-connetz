import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { publicationCardDataType } from "@/types/HomePageTypes";
import { FileUser } from "lucide-react";


export function PublicationCard({ name, description }: publicationCardDataType) {
  return (
    <Card className="w-full max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* <img src={image} alt={name} className="w-full h-48 object-cover" /> */}
      <FileUser />
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between mt-4">
        <Button variant="secondary" className="text-sm">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}
