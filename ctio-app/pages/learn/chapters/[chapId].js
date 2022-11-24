import {useRouter} from "next/router"
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

function DetailChapter(){
  const router = useRouter()

  const chapId = Number(router.query.chapId);

  return ( 
    <div>
      <h1>Chapter {chapId} - {chaps[chapId].name}</h1>
      <h1>{chaps[chapId].description}</h1>
    </div>
  )
}

export default DetailChapter;