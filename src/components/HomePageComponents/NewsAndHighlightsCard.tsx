import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { NewsAndHighlightsCardDataType } from "@/types/HomePageTypes";
import Image from "next/image";

export function NewsAndHighlightsCard({
  name,
  description,
  image,
  readMinutes,
  Type,
}: NewsAndHighlightsCardDataType) {
  return (
    <Card className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <Image src={image} alt={name} width={600} height={400} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle className="text-xl font-bold text-gray-800">{name}</CardTitle>
        <CardDescription className="text-sm text-gray-500">{Type}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between mt-4">
        <p className="text-sm text-gray-500">{readMinutes} min read</p>
        <Button variant="secondary" className="text-sm">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
}
