import connectDB from "@/lib/connectDB"



export const POST = async (request) => {
    try {
        const db = await connectDB();
        const userCollection = db.collection('users');
        const newUser = await request.json();
        // Validation (optional, but recommended)
        if (!newUser.name || !newUser.email || !newUser.password) {
            return new Response(
                JSON.stringify({ message: "Missing required fields" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }
        const res = await userCollection.insertOne(newUser);
        return new Response(
            JSON.stringify({ message: "New user added successfully", data: res }),
            { status: 201, headers: { "Content-Type": "application/json" } }
        )
    } catch (error) {
        console.error("Error during sign-up:", error);  // Log error details
        return new Response(
          JSON.stringify({ message: "Something went wrong", error: error.message }),
          { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }

}