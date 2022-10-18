<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Steps extends Model
{
    use HasFactory;

    /**
     * Table that should be associated with
     *
     * @var string
     */
    protected $table = 'trip_steps';

    /**
     * Primary key that should be associated with
     *
     * @var string
     */
    protected $primaryKey = 'id';

    /**
     * Indicates if the IDs are auto-incrementing.
     *
     * @var bool
     */
    public $incrementing = true;

    /**
     * The attributes that are mass assignable
     *
     * @var string[]
     */
    protected $fillable = [
        'trip_id',
        'transport_type_id',
        'transport_number',
        'departure_location_id',
        'arrival_location_id',
        'seat',
        'gate',
        'baggage_drop'
    ];

    /**
     * Retrieve associated trip
     *
     * @return BelongsTo
     */
    public function trip(): BelongsTo
    {
        return $this->belongsTo(Trip::class, 'trip_id');
    }

    /**
     * Retrieve associated location
     *
     * @return BelongsTo
     */
    public function departureLocation(): BelongsTo
    {
        return $this->belongsTo(Locations::class, 'departure_location_id');
    }

    /**
     * Retrieve associated location
     *
     * @return BelongsTo
     */
    public function arrivalLocation(): BelongsTo
    {
        return $this->belongsTo(Locations::class, 'arrival_location_id');
    }
}
