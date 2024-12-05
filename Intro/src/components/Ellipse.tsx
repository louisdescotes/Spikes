interface Props {
    top: boolean;
}

export default function Ellipse({ top} : Props) {
  return (
    <div className={`${top ? "-top-80" : "-bottom-0"} ${top ? "" : "translate-y-80"} fixed mx-auto h-96 w-full rounded-[1437px] bg-[rgba(112,89,242,0.4)] blur-[187px]`} />
  )
}
