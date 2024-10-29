import Image from "next/image";
import Button from "./components/ButtonCV";

export default function Home() {
  return (
    <div className="h-full w-full rounded-xl bg-gray-100 p-4 shadow-lg md:p-8">
      <section>
        <h1 className="text-xl text-gray-800 md:text-3xl lg:py-8 lg:text-6xl">
          Junior Frontend Разработчик
        </h1>
      </section>

      <section className="mb-8 flex flex-col items-start md:mb-20 md:flex-row md:items-end">
        <article className="mt-8 flex-1 text-sm text-gray-800 md:text-base lg:text-2xl">
          <p>
            Привет! Меня зовут <span className="italic">Лев</span>.
          </p>
          <p className="mt-2">
            Я — начинающий веб-разработчик, специализирующийся на React и
            Next.js.
          </p>
          <p className="mt-6">
            Сфера IT привлекла меня возможностью думать, искать решения и
            творчески подходить к делу.
          </p>
          <p className="mt-2">
            Особенно вдохновляет создание интерфейсов — возможность воплощать
            идеи в реальность и делиться ими с другими.
          </p>
        </article>

        <aside className="mt-4 flex flex-col items-center justify-center space-y-4 md:ml-8 lg:ml-14">
          <Image
            className="hidden md:block"
            src="/avatar.svg"
            alt="avatar"
            width={180}
            height={180}
          />
          <Button />
        </aside>
      </section>
    </div>
  );
}
