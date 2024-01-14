export function Badge({content}: {content: string | React.ReactNode}) {
  return <span className="inline-flex items-center rounded-md bg-gray-300 px-2 py-1 text-slate-950 ring-1 ring-inset ring-slate-600">{content}</span>
}
