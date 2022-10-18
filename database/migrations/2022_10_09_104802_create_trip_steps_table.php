<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up(): void
    {
        Schema::create('steps', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('trip_id');
            $table->unsignedBigInteger('transport_type_id');
            $table->string('transport_number');
            $table->unsignedBigInteger('departure_location_id');
            $table->unsignedBigInteger('arrival_location_id');
            $table->string('seat')->nullable();
            $table->string('gate')->nullable();
            $table->string('baggage_drop')->nullable();
        });

        Schema::table('steps', function (Blueprint $table) {
            $table->foreign('trip_id')
                ->references('id')
                ->on('trips')
                ->onDelete('cascade');

            $table->foreign('transport_type_id')
                ->references('id')
                ->on('transports')
                ->onDelete('cascade');

            $table->foreign('departure_location_id')
                ->references('id')
                ->on('locations')
                ->onDelete('cascade');

            $table->foreign('arrival_location_id')
                ->references('id')
                ->on('locations')
                ->onDelete('cascade');
        });

        Schema::enableForeignKeyConstraints();
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down(): void
    {
        Schema::disableForeignKeyConstraints();
        Schema::table('trips_steps', function (Blueprint $table) {
            $table->dropForeign([
                'trip_id',
                'transport_type_id',
                'departure_location_id',
                'arrival_location_id',
            ]);
        });
        Schema::dropIfExists('steps');
    }
};
