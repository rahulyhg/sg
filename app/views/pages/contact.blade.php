@extends('layouts.website')

@section('content')
<div class="container">
    <div class="main row">
        <h1 class="page-header">Contact</h1>

        <div class="row">
            <div class="col-md-6">
                <h4 class="sub-head">
                    You can drop in to our office at any time, for repairs, fixing, consultation or just for a chat,
                    from Mondays - Saturdays 8am - 5pm.
                </h4>

                <p>
                    1 Victoria Ariobike Street (Along Admiralty Way), by Ebeano Supermarket, Lekki Phase 1, Lagos.
                </p>
            </div>

            <div class="col-md-6">
                <h5 class="sub-head">For pickups, drop-offs &amp; general enquiries, call us on</h5>

                <h4 class="sub-head">0815 092 GEEK (4335)</h4>
                <h4 class="sub-head">0815 097 GEEK (5335)</h4>
                <h4 class="sub-head">0815 096 GEEK (4335)</h4>
                <h4 class="sub-head">0815 066 GEEK (4335)</h4>
            </div>
        </div>

        <div class="row">
            <div class="map-canvas" id="map_canvas"></div>
        </div>
    </div>
</div>
@stop