export default function SuccessPage() {
  return (
    <div className="h-screen w-screen sm:w-fit px-5 py-20 flex flex-col justify-start sm:justify-center">
      <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
        Erledigt.
      </h1>

      <p className="mt-2 text-md text-gray-500">
        Die Bestellung wurde erfolgreich abgeschickt.
      </p>
    </div>
  );
}
