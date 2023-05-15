export default function Write(){
    
    return(
        <div>
            <h4>글작성</h4>
            <form action="/api/post/page" method="POST">
                <input type="text" className="border border-black" placeholder="글제목" name="title"></input>
                <br/>
                <input type="text" className="border border-black" placeholder="내용" name="content"></input>
                <button type="submit">버튼</button>
            </form>
        </div>
    )
}