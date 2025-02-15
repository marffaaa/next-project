import { useRouter } from "next/router";
import { FC } from "react";


interface PaginationProps {
    total: number;
    limit: number;
    skip: number;
}

const PaginationComponent: FC<PaginationProps> = ({ total, limit, skip }) => {
    const router = useRouter();

    const handlePreviousPage = () => {
        if (skip > 0) {
            router.push(`?skip=${skip - limit}`);
        }
    };

    const handleNextPage = () => {
        if (skip + limit < total)
        {router.push(`?skip=${skip + limit}`);}
    };

    return (
        <div>
            <div >
                <button onClick={handlePreviousPage} disabled={skip <= 0}>
                    Prev
                </button>
                <button  onClick={handleNextPage} disabled={skip + limit >= total}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginationComponent;