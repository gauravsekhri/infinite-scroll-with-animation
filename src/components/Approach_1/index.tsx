import { useCallback, useMemo, useRef } from "react";
import PageHeader from "../PageHeader";
import RecordCard from "../RecordCard";
import { fetchRecords } from "@/utils/ApiCalls";
import { useInfiniteQuery } from "@tanstack/react-query";
import BlurFade from "../magicui/blur-fade";
import { useDispatch } from "react-redux";
import { setLoadedCount } from "@/Redux/ProductsRedux/themeActions";

const ApproachOne = () => {
  const dispatch = useDispatch();

  const { data, fetchNextPage, hasNextPage, isFetching, isLoading } =
    useInfiniteQuery({
      queryKey: ["products"],
      queryFn: ({ pageParam }) => {
        dispatch(setLoadedCount(pageParam * 10));
        return fetchRecords({ pageParam });
      },
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages) => {
        console.log(lastPage, allPages);
        return lastPage.length ? allPages.length + 1 : undefined;
      },
    });

  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (node: HTMLDivElement) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [fetchNextPage, hasNextPage, isFetching, isLoading]
  );

  const products = useMemo(() => {
    return data?.pages.reduce((acc, page) => {
      return [...acc, ...page];
    }, []);
  }, [data]);

  return (
    <>
      <PageHeader />
      <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto p-4">
        {products &&
          products?.map((ele, idx) => (
            <div ref={lastElementRef}>
              <BlurFade key={idx} delay={0.25} inView>
                <RecordCard key={idx} {...ele} />
              </BlurFade>
            </div>
          ))}

        {isFetching && (
          <div className="col-span-2 my-8 text-center">Loading data...</div>
        )}
      </div>
    </>
  );
};

export default ApproachOne;
