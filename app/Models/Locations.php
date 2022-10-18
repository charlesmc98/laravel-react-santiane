<?php

namespace App\Models;

use http\Client\Request;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Locations extends Model
{
    use HasFactory;

    /**
     * Table that should be associated with
     *
     * @var string
     */
    protected $table = 'locations';

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
    protected $fillable = ['city'];
}
