export default function ErrorPage() {
  return (
    <div className="h-screen w-screen sm:w-fit px-5 py-20 flex flex-col justify-start sm:justify-center">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
        Hoppla.
      </h1>

      <p className="mt-2 text-md text-gray-500">
        Irgendetwas ist schief gelaufen. Versuche es später erneut.
      </p>
    </div>
  );
}
