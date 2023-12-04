const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="min-h-[100vh] dark:bg-[#1F1F1F]">
            {children}
        </div>
    )
}

export default PublicLayout