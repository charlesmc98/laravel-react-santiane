import PageLayout from '@/components/PageLayout';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function CreateTrip() {
  const navigate = useNavigate();

  const [locations, setLocations] = useState([]);

  const [name, setName] = useState('')
  const [departureLocation, setDepartureLocation] = useState('')
  const [arrivalLocation, setArrivalLocation] = useState('')

  const fetchLocations = async () => {
    await axios.get(`http://localhost:8000/api/locations`).then(({data}) => {
      setLocations(data)
    })
  }

  useEffect(()=>{
    fetchLocations()
  }, [])

  const createProduct = async (e) => {
    e.preventDefault();

    const formData = new FormData()

    formData.append('name', name)
    formData.append('arrival', arrivalLocation)
    formData.append('departure', departureLocation)

    console.log(formData);

    // await axios.post(
    //   `http://localhost:8000/api/trip`, formData
    // ).then(() => {
    //   navigate('/trip/list')
    // }).catch(({response})=>{
    //   if (response.error) {
    //     console.log(response.error);
    //   }
    // })
  }

  return (
    <>
      <PageLayout title="Créer mon voyage">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Informations principales</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Nommez votre voyage, et appuyer sur continuer
                </p>
              </div>
            </div>
            <div className="mt-5 md:col-span-2 md:mt-0">
              <form action="#" method="POST">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6">
                        <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
                          Nom de votre voyage
                        </label>
                        <input
                          type="text"
                          name="street-address"
                          id="street-address"
                          onChange={(event) => {
                            setName(event.target.value)
                          }}
                          placeholder="Nom de votre voyage"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Ville de départ
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          onChange={(event) => {
                            setDepartureLocation(event.target.value)
                          }}
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option value={null}>Choisissez</option>
                          {locations?.map((data) => (
                            <option key={data.id} value={departureLocation}>
                              {data.city}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Ville d'arrivée
                        </label>
                        <select
                          id="country"
                          name="country"
                          autoComplete="country-name"
                          onChange={(event) => {
                            setArrivalLocation(event.target.value)
                          }}
                          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option value={null}>Choisissez</option>
                          {locations?.map((data) => (
                            <option key={data.id}>
                              {data.city}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="button"
                      onClick={createProduct}
                      className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Continuer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/*<div className="hidden sm:block" aria-hidden="true">*/}
        {/*  <div className="py-5">*/}
        {/*    <div className="border-t border-gray-200" />*/}
        {/*  </div>*/}
        {/*</div>*/}

        {/*<div className="mt-10 sm:mt-0">*/}
        {/*  <div className="md:grid md:grid-cols-3 md:gap-6">*/}
        {/*    <div className="md:col-span-1">*/}
        {/*      <div className="px-4 sm:px-0">*/}
        {/*        <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>*/}
        {/*        <p className="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="mt-5 md:col-span-2 md:mt-0">*/}
        {/*      <form action="#" method="POST">*/}
        {/*        <div className="overflow-hidden shadow sm:rounded-md">*/}
        {/*          <div className="space-y-6 bg-white px-4 py-5 sm:p-6">*/}
        {/*            <fieldset>*/}
        {/*              <legend className="sr-only">By Email</legend>*/}
        {/*              <div className="text-base font-medium text-gray-900" aria-hidden="true">*/}
        {/*                By Email*/}
        {/*              </div>*/}
        {/*              <div className="mt-4 space-y-4">*/}
        {/*                <div className="flex items-start">*/}
        {/*                  <div className="flex h-5 items-center">*/}
        {/*                    <input*/}
        {/*                      id="comments"*/}
        {/*                      name="comments"*/}
        {/*                      type="checkbox"*/}
        {/*                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"*/}
        {/*                    />*/}
        {/*                  </div>*/}
        {/*                  <div className="ml-3 text-sm">*/}
        {/*                    <label htmlFor="comments" className="font-medium text-gray-700">*/}
        {/*                      Comments*/}
        {/*                    </label>*/}
        {/*                    <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*                <div className="flex items-start">*/}
        {/*                  <div className="flex h-5 items-center">*/}
        {/*                    <input*/}
        {/*                      id="candidates"*/}
        {/*                      name="candidates"*/}
        {/*                      type="checkbox"*/}
        {/*                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"*/}
        {/*                    />*/}
        {/*                  </div>*/}
        {/*                  <div className="ml-3 text-sm">*/}
        {/*                    <label htmlFor="candidates" className="font-medium text-gray-700">*/}
        {/*                      Candidates*/}
        {/*                    </label>*/}
        {/*                    <p className="text-gray-500">Get notified when a candidate applies for a job.</p>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*                <div className="flex items-start">*/}
        {/*                  <div className="flex h-5 items-center">*/}
        {/*                    <input*/}
        {/*                      id="offers"*/}
        {/*                      name="offers"*/}
        {/*                      type="checkbox"*/}
        {/*                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"*/}
        {/*                    />*/}
        {/*                  </div>*/}
        {/*                  <div className="ml-3 text-sm">*/}
        {/*                    <label htmlFor="offers" className="font-medium text-gray-700">*/}
        {/*                      Offers*/}
        {/*                    </label>*/}
        {/*                    <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>*/}
        {/*                  </div>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*            </fieldset>*/}
        {/*            <fieldset>*/}
        {/*              <legend className="contents text-base font-medium text-gray-900">Push Notifications</legend>*/}
        {/*              <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>*/}
        {/*              <div className="mt-4 space-y-4">*/}
        {/*                <div className="flex items-center">*/}
        {/*                  <input*/}
        {/*                    id="push-everything"*/}
        {/*                    name="push-notifications"*/}
        {/*                    type="radio"*/}
        {/*                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"*/}
        {/*                  />*/}
        {/*                  <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">*/}
        {/*                    Everything*/}
        {/*                  </label>*/}
        {/*                </div>*/}
        {/*                <div className="flex items-center">*/}
        {/*                  <input*/}
        {/*                    id="push-email"*/}
        {/*                    name="push-notifications"*/}
        {/*                    type="radio"*/}
        {/*                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"*/}
        {/*                  />*/}
        {/*                  <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">*/}
        {/*                    Same as email*/}
        {/*                  </label>*/}
        {/*                </div>*/}
        {/*                <div className="flex items-center">*/}
        {/*                  <input*/}
        {/*                    id="push-nothing"*/}
        {/*                    name="push-notifications"*/}
        {/*                    type="radio"*/}
        {/*                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"*/}
        {/*                  />*/}
        {/*                  <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">*/}
        {/*                    No push notifications*/}
        {/*                  </label>*/}
        {/*                </div>*/}
        {/*              </div>*/}
        {/*            </fieldset>*/}
        {/*          </div>*/}
        {/*          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">*/}
        {/*            <button*/}
        {/*              type="submit"*/}
        {/*              className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"*/}
        {/*            >*/}
        {/*              Save*/}
        {/*            </button>*/}
        {/*          </div>*/}
        {/*        </div>*/}
        {/*      </form>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </PageLayout>
    </>
  )
}
