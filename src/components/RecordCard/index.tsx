import { IProduct } from "@/utils/Interfaces";
import {
  Card,
  CardDescription,
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
