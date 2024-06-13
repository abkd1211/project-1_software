import Image from "next/image";

export default function AuthLayout({ children }: {
    readonly children: React.ReactNode;
}){
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-red-400 via-indigo-500 to-blue-600">
                      
            {children}
        </div>
    )
}