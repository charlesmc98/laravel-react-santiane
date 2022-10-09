<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TransportsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(): void
    {
        DB::table('transports')->insert([
            ['type' => 'Bateau'],
            ['type' => 'Car'],
            ['type' => 'Train'],
            ['type' => 'Avion']
        ]);
    }
}
