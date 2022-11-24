import Link from "next/link";

let chaps = [
  {
    id: 1,
    name: "Investment",
    description: "Bla bla bla......."

  },
  {
    id: 2,
    name: "Savings",
    description: "Bla bla bla......."

  },
  {
    id: 3,
    name: "Insurance",
    description: "Bla bla bla......."

  }
]


function Chapters(){


  return (
    <div>
      <h1>Chapters</h1>
  
  <ul>
    {chaps.map(chap=>(
      <li> <Link href={"/learn/chapters/"+chap.id}>Chapter {chap.id}</Link></li>
    ))}
    
  </ul>
    </div>
  
  )
  
}

export default Chapters;