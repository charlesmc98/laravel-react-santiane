import PageLayout from '@/components/PageLayout';

export default function ViewedTravels() {
  return (
    <>
      <PageLayout title="Voyages consultés">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
          <div className="flex justify-center">
            <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
              <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">Card title</h5>
              <p className="text-gray-700 text-base mb-4">
                Vous pouvez afficher les détails du voyage en cliquand ci-dessous
              </p>
              <button type="button"
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                Voir
              </button>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  )
}
