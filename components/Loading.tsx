export default function Loading() {
    return (
        <div className="w-full h-full flex flex-col justify-center items-center bg-white">
            <div className="flex flex-col items-center space-y-4">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
            </div>
        </div>
    );
}
