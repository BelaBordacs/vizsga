<?php

namespace App\Http\Controllers;

use App\Models\Kategoria;
use App\Models\Teszt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TesztController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Teszt::all());
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Teszt $teszt)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Teszt $teszt)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Teszt $teszt)
    {
        //
    }

    public function tesztekByKat(String $id) {
        Kategoria::find($id);
        $data = DB::select("
            SELECT *
            FROM teszts t
            INNER JOIN kategorias k on k.id = t.kategoriaId
            WHERE kategoriaId = $id
        ");
        return response()->json($data);
    }
}
