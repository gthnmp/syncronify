import Link from "next/link";
import { TbLogin } from 'react-icons/tb';
import { BsArrowLeft } from 'react-icons/bs';
import { User } from "@supabase/supabase-js";

interface MainProps {
  user: User | null;
}

export default function Main({ user }: MainProps) {
  const menuItems = [
    { label: "Discussion", border: true },
    { label: "Task", border: true },
    { label: "Done List", border: true },
    { label: "Overview", border: true }
  ];

  const title = "Sleepy Crews"
  const tags = ["Website", "Design", "Database"];
  const formattedTags = tags.map((tag) => tag.charAt(0).toUpperCase() + tag.slice(1));
  const renderedTags = formattedTags.join(" / ");

  return (
    <article className="w-full text-white grid grid-cols-1 auto-rows-[auto_1fr] rounded-lg bg-neutral-900 font-sans">
      <header className="w-full h-52 grid grid-rows-2 grid-cols-2 border-b-1 px-10 pt-10 gap-y-10 border-neutral-700">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl">{title}</h1>
          <h2 className="text-sm opacity-50">{renderedTags}</h2>
        </div>
        <div className="relative row-start-2 col-span-2">
          <ul className="absolute bottom-0 flex gap-5">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`py-5 border-b-2 border-neutral-400 ${
                  item.border ? "" : "border-0"
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </header>
      <main className="animate-in flex flex-col h-full justify-center items-center gap-14 opacity-0 max-w-4xl px-3 text-foreground ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="sr-only">Syncronify</h1>
          <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center my-12">
            Hey There, You Must Be<br/>{' '}
            <strong>{user?.email}</strong>
          </p>
          <div className='flex gap-5 items-center justify-between'>
            <Link href ="/" className="bg-foreground py-3 px-6 rounded-lg font-mono text-sm text-background flex items-center gap-2">
              <BsArrowLeft/>
              Back To Dashboard
            </Link>
          </div>
        </div>
      </main>
    </article>
  );
}
