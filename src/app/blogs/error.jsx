'use client'

const CustomError = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-red-500">
            <h1 className="mb-4 text-6xl font-bold text-white">404</h1>
            <p className="mb-8 text-2xl font-semibold text-white">
                Oops! Something went wrong.
            </p>
            <a
                href="/"
                className="px-6 py-3 text-lg font-medium text-red-500 transition duration-300 ease-in-out bg-white rounded-full hover:bg-gray-100"
            >
                Go Back Home
            </a>
        </div>
    );
};

export default CustomError;
