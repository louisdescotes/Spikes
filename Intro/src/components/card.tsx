interface Props {
    pp: string;
    name: string;
    user:string;
    message:string;
}

export default function Card({ pp, name, user, message} : Props) {
  return (
    <article className="flex flex-col gap-2.5 py-4 px-6 border min-w-72 max-w-72 min-h-40 rounded-xl bg-card">
      <div className="flex items-center gap-2">
        <img className="size-8" src={`/profile-picture/${pp}.webp`} alt="profil de l'utilisateur" />
        <div className="flex flex-1 flex-col">
            <p className="font-medium text-sm">{name}</p>
            <p className="text-[10px] text-muted">{user}</p>
        </div>
      </div>
      <p className="text-sm text-card-foreground">{message}</p>
    </article>
  )
}
