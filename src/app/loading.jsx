const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
            <div className="w-24 h-24 mb-4 ease-linear border-8 border-t-8 border-white rounded-full loader"></div>
            <p className="text-3xl font-bold tracking-wider text-white animate-bounce">
                HELLO, I Am Loading...
            </p>
        </div>
    );
};

export default Loading;
