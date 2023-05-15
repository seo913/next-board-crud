import { connectDB } from "@/util/database";

export default async function handler(req,res){
    const db = (await connectDB).db('forum');
    let result = await db.collection('post').find().toArray();
    let date = new Date()
    if(req.method == 'GET'){
        return res.status(200).json(result); // DB에 있는 post컬렉션의 모든데이터 가져오기
        return res.status(200).json(date); // 시간불러오기
    }  
    
}