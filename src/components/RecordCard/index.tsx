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
          <CardTitle className="text-md lg:text-lg">
            {productName ?? ""}
          </CardTitle>
          <CardDescription className="text-sm lg:text-md">
            Country : {country ?? ""}
          </CardDescription>
        </CardHeader>
      </Card>
    </>
  );
};

export default RecordCard;
