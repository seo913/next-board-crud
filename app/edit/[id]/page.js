// import { connectDB } from "@/util/database";
// import { ObjectId } from "mongodb";

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

// export default async function Edit(props){
//     const db = (await connectDB).db('forum');
//     let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id) })

//     // await db.collection('post').updateOne({ _id : new ObjectId(props.params.id) },
//     // {$set:{title:props.params.title, content:props.params.content} });
//     return (
//         <div>
//             <h4>수정페이지</h4>
//             <form action="/api/post/update" method="POST">
//                 <input type="text" className="border border-black" name="title" value={result.title}/>
//                 <br/>
//                 <input type="text" className="border border-black" name="content" value={result.content}/>
//                 <br/>
//                 <input type="text" className="hidden" name="_id" value={result._id}/>
//                 <button type="submit">버튼</button> 
//             </form>
//         </div>
//     )

export default async function Edit(props){
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').findOne({ _id : new ObjectId(props.params.id) })
    return(
        <div>
            <h4>수정하기</h4>
            <form action="/api/post/update" method="POST">
                <input type="text" className="border border-black" placeholder="글제목" name="title"
                defaultValue={result.title}/>
                <br/>
                <input type="text" className="border border-black" placeholder="내용" name="content"
                defaultValue={result.content}/>
                <input type="text" className="border border-black hidden" placeholder="내용" name="_id"
                defaultValue={result._id}/>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}