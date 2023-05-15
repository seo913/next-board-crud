'use client';

import Link from 'next/link';

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((v, i) => {
        return (
          <div className='list-item' key={i}>
            <Link href={`/detail/${result[i]._id}`}>
              <h4>{result[i].title}</h4>
            </Link>
            <Link className='mr-2' href={`/edit/${result[i]._id}`}>
              수정하기
            </Link>
            <span
              onClick={(e) => {
                fetch('api/test?name=kim')
                // fetch('/api/post/delete', {
                //   method: 'POST',
                //   body: result[i]._id.toString()
                // }).then(()=>{
                //     e.target.parentElement.style.opacity = 0;
                //     setTimeout(()=>{
                //       e.target.parentElement.style.display = 'none';
                //     }, 1000);
                //   })


                // .then((r)=>{ // 여기서부턴 특정코드 에러가 발생할때 오류를 알려줄수있는 함수
                //   if(r.status == 200) {
                //     return r.json()
                //   } else {
                //     //서버가 에러코드전송시 실행할코드
                //   }
                // })
                // .then((result)=>{ 
                //   //성공시 실행할코드
                // }).catch((error)=>{
                //   //인터넷문제 등으로 실패시 실행할코드 네트워크에러
                //   console.log(error);
                // })


              }}>
              삭제하기
            </span>

            <p>1월 1일</p>
          </div>
        );
      })}
    </div>
  );
}
