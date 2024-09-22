import axios from "axios";
import { IProduct } from "./Interfaces";

export const fetchRecords = async ({
  pageParam,
}: {
  pageParam: number;
}): Promise<IProduct[]> => {
  return new Promise(async (res) => {
    // const loadCount: number = 10;

    let apiResp = await axios.get(
      import.meta.env.VITE_BACKEND_BASE_URL +
        "/api/products/records?page=" +
        pageParam
    );

    if (apiResp?.data?.success) {
      res(apiResp?.data?.data);
    } else {
      res([]);
    }
  });
};
