import { Dispatch, SetStateAction } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";

type TPaginationProps = {
  currentPage: number;
  totalPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  centerRange?: number;
  bothSideRange?: number;
};

const GeneratePaginate = ({
  currentPage,
  totalPage,
  setCurrentPage,
}: TPaginationProps) => {
  const generatePaginationItem = (
    type: "prev" | "next" | "ellipse" | "number",
    value?: number
  ) => {
    if (type === "prev") {
      return (
        <PaginationItem
          key={value}
          className={`cursor-pointer ${
            currentPage === 1 && "opacity-50 cursor-auto"
          }`}
          onClick={() => {
            if (currentPage !== 1) {
              setCurrentPage(currentPage - 1);
            }
          }}
        >
          <PaginationPrevious />
        </PaginationItem>
      );
    } else if (type === "next") {
      return (
        <PaginationItem
          key={value}
          className={`cursor-pointer ${
            currentPage === totalPage && "opacity-50 cursor-auto"
          }`}
          onClick={() => {
            if (currentPage !== totalPage) {
              setCurrentPage(currentPage + 1);
            }
          }}
        >
          <PaginationNext />
        </PaginationItem>
      );
    } else if (type === "ellipse") {
      return (
        <PaginationItem className="cursor-pointer" key={value}>
          <PaginationEllipsis />
        </PaginationItem>
      );
    } else if (type === "number") {
      return (
        <PaginationItem
          key={value}
          onClick={() => setCurrentPage(value!)}
          className={`cursor-pointer`}
        >
          <PaginationLink
            isActive={currentPage === value}
            className={` border-2 rounded-lg ${
              currentPage === value && " border-common-600/50"
            }`}
          >
            {value}
          </PaginationLink>
        </PaginationItem>
      );
    }
  };
  const generatePaginate = (
    centerRange: number = 1,
    bothSideRange: number = 1
  ) => {
    const paginationItems = [];
    paginationItems.push(generatePaginationItem("prev", 0));
    for (let i = 1; i <= totalPage; i++) {
      if (
        i === 1 ||
        i === totalPage ||
        (i >= currentPage - centerRange && i <= currentPage + centerRange) ||
        i <= bothSideRange ||
        totalPage - i < bothSideRange
      ) {
        paginationItems.push(generatePaginationItem("number", i));
      } else if (
        i === currentPage - centerRange - 1 ||
        i === currentPage + centerRange + 1
      ) {
        paginationItems.push(generatePaginationItem("ellipse", i));
      }
    }
    paginationItems.push(generatePaginationItem("next", totalPage + 1));
    return paginationItems;
  };

  return (
    <Pagination>
      <PaginationContent>{generatePaginate()}</PaginationContent>
    </Pagination>
  );
};

export default GeneratePaginate;
