'use client';

import { useRouter } from 'next/navigation';
import { FC } from 'react';

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
        if (skip + limit < total) {
            router.push(`?skip=${skip + limit}`);
        }
    };

    return (
        <div>
            <div className=" m-5 flex gap-6 w-screen flex justify-center">
                <button
                    className="w-28 h-10 rounded-xl font-bold text-lg shadow-md bg-red-900 text-orange-50"
                    onClick={handlePreviousPage}
                    disabled={skip <= 0}
                >
                    Prev
                </button>
                <button
                    className="w-28 h-10 rounded-xl text-lg font-bold shadow-md bg-red-900 text-orange-50"
                    onClick={handleNextPage}
                    disabled={skip + limit >= total}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginationComponent;
