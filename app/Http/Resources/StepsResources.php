<?php

namespace App\Http\Resources;

use App\Models\Locations;
use App\Models\Transports;
use Illuminate\Contracts\Support\Arrayable;
use Illuminate\Http\Request;

class StepsResources extends \Illuminate\Http\Resources\Json\JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param Request $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'transport' => Transports::find($this->transport_type_id)->type,
            'transport_number' => $this->transport_number,
            'departure' => Locations::find($this->departure_location_id)->city,
            'arrival' => Locations::find($this->arrival_location_id)->city,
            'seat' => $this->seat,
            'gate' => $this->gate,
            'baggage_drop' => $this->baggage_drop
        ];
    }
}
