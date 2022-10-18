import PageLayout from '@/components/PageLayout';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import Loader from "@/components/Loader";

export default function EditTrip() {
  const { id } = useParams()
  const [trip, setTrip] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    fetchTrip()
  }, [])

  const fetchTrip = async () => {
    await axios.get(`http://localhost:8000/api/trip/${id}`).then(({data}) => {
      setTrip(data)
      setLoading(false)
    })
  }

  console.log(trip)

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <>
      <PageLayout title={trip.data.name}>
        {trip.data?.steps.map((step, index) => (
          <div className="overflow-hidden bg-white shadow sm:rounded-lg mt-3" key={index}>
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Etape n°{ index + 1 }</h3>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Ville de départ</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{ step.departure }</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Ville d'arrivée</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{ step.arrival }</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Moyen de transport</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{ step.transport }</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Numéro de transport</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{ step.transport_number }</dd>
                </div>
              </dl>
            </div>
          </div>
        ))}
      </PageLayout>
    </>
  )
}
