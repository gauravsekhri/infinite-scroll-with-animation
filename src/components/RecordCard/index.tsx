import { IProduct } from "@/utils/Interfaces";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const RecordCard = ({ productId, productName, country }: IProduct) => {
  return (
    <>
      <Card key={productId}>
        <CardHeader>
          <CardTitle className="text-lg">{productName ?? ""}</CardTitle>
          <CardDescription>Country : {country ?? ""}</CardDescription>
        </CardHeader>
      </Card>
    </>
  );
};

export default RecordCard;
