export function Badge({text}: {text: string}) {
  return <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-neutral-600 ring-1 ring-inset ring-gray-500/10">{text}</span>
}
