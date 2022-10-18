<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Trip extends Model
{
    use HasFactory;
    /**
     * Table that should be associated with
     *
     * @var string
     */
    protected $table = 'trips';

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
    protected $fillable = ['name'];

    /**
     * Retrieve associated trip steps
     *
     * @return HasMany
     */
    public function steps(): HasMany
    {
        return $this->hasMany(Steps::class);
    }
}
