'use client'

import { useRouter } from "next/navigation"

export default function DetailLink(){
    let router = useRouter();
    //back 뒤로가기 forward 앞으로가기 refresh새로고침
    return(
        <button onClick={()=>{ router.push('/')}}>버튼</button>
    )
}