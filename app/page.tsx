import Image from 'next/image';
import Button from './components/homePage/Button';

export default function Home() {
  return (
    <div className="mt-16 h-full w-full shadow-lg bg-gray-100 pb-10 px-10 rounded-xl">
      <div>
        <h1 className="text-6xl text-gray-800 pt-20">
          Junior Frontend Разработчик
        </h1>
      </div>
      <div className="flex mb-20">
        <div className="flex-1 text-2xl mt-8 text-gray-800">
          <p className="mt-4">
            Привет! Меня зовут <span className="italic">Лев</span>.
          </p>
          <p className="mt-2">
            Я — начинающий веб-разработчик, специализирующийся на React и
            Next.js.
          </p>
          <p className="mt-2">
            Сфера IT привлекла меня возможностью думать, искать решения и
            творчески подходить к делу.
          </p>
          <p className="mt-2">
            Особенно вдохновляет создание интерфейсов — возможность воплощать
            идеи в реальность и делиться ими с другими.
          </p>
        </div>
        <div className="flex flex-col items-center justify-end space-y-4 ml-8">
          <Image src="/avatar.svg" alt="avatar" width={180} height={180} />

          <Button />
        </div>
      </div>
    </div>
  );
}
