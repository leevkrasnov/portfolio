import Button from './components/homePage/Button';

export default function Home() {
  return (
    <div className="h-[500px] shadow-lg bg-gray-100 p-10 rounded-xl">
      <h1 className="text-6xl text-gray-800">Junior Frontend Разработчик</h1>
      <div className="text-2xl mt-8 text-gray-700">
        <h2 className="text-4xl text-gray-800">Привет!</h2>
        <p className="mt-4">
          Меня зовут <span className="italic">Лев</span>.
        </p>
        <p className="mt-2">
          Я — начинающий веб-разработчик, специализирующийся на React и Next.js.
        </p>
        <p className="mt-2">
          Сфера IT привлекла меня возможностью думать, искать решения и
          творчески подходить к делу.
        </p>
        <p className="mt-2 mb-8">
          Особенно вдохновляет создание интерфейсов — возможность воплощать идеи
          в реальность и делиться ими с другими.
        </p>
        <Button />
      </div>
    </div>
  );
}
