import clientPromise from "@/lib/mongodb"

export async function POST(request) {
    const body = await request.json()

    const client = await clientPromise;
    const db = clientPromise.db("bittree")
    const collection = db.collection("links")

    //if the handle is already claimed, you cannot create the bittree
    const doc = await collection.findone({handle: body.handle}) 

    if(doc){
      return Response.json({ success: false, error: true, message: 'this bittree already exists!', result: null })
    }
       const result = await collection.insertOne({body})
    
  return Response.json({ success: true, error: false, message: 'your bittree has been generated.', result: result })
}