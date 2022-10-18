<?php

namespace App\Http\Controllers;

use App\Http\Resources\TripResources;
use App\Models\Steps;
use App\Models\Trip;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class TripController extends Controller
{
    /**
     * Retrieve all travels already registered
     *
     * @return Collection
     */
    public function index(): Collection
    {
        return DB::table('trips')->get();
    }

    /**
     * Show create form
     *
     * @return void
     */
    public function create(): void
    {

    }

    public function store(Request $request)
    {
        echo json_encode($request);
    }

    /**
     * Show edit form
     *
     * @param Trip $trip
     * @return JsonResponse
     */
    public function edit(Trip $trip): JsonResponse
    {

    }

    /**
     * Display the specified resource.
     *
     * @param Trip $trip
     * @return TripResources
     */
    public function show(Trip $trip): TripResources
    {
        return new TripResources($trip);
    }

    /**
     * Update specified resource
     *
     * @param Request $request
     * @param Trip $trips
     * @param Steps $steps
     * @return void
     */
    public function update(Request $request, Trip $trips, Steps $steps): void
    {

    }

    /**
     * Delete specified resource
     *
     * @param Trip $trips
     * @return void
     */
    public function destroy(Trip $trips): void
    {

    }
}
