const userDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    console.log("User ID:", id);
    return (
        <div>
            <h1>
                User Details for user #{id}
            </h1>
        </div>
    )
}

export default userDetails
