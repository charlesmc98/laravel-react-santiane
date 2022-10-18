<?php

namespace App\Http\Controllers;

use App\Models\Locations;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;

class LocationsController extends Controller
{
    /**
     * Retrieve all locations
     *
     * @return Collection
     */
    public function index(): Collection
    {
        return DB::table('locations')->get();
    }
}
