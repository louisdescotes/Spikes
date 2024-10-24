import { Star, StarHalf } from "lucide-react"
export default function Stars() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center">
      <Star fill="#FFC41F" strokeWidth={0}/>
      <Star fill="#FFC41F" strokeWidth={0}/>
      <Star fill="#FFC41F" strokeWidth={0}/>
      <Star fill="#FFC41F" strokeWidth={0}/>
      <StarHalf fill="#FFC41F" strokeWidth={0}/>
      </div>
      <p>4.6 / 5.0 <span>(556)</span></p>
    </div>
  )
}
