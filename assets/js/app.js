;(function($, window) {

	var $map, circles = [];

	$(document).ready(function() {

		$map = $('.map');
		radius = 15;
		zoom = 15;
		center = new google.maps.LatLng(40, -86)

		map = new google.maps.Map($map).get(0), {
				center: new google.maps.LatLng(40, -86),
				disableDefaultUI: true,
				mapTypeId: google.maps.mapTypeId.ROADMAP,
				zoom: 13

			

		});


		var tilesLoadsEvent = google.maps.event.addListener(map, 'tilesloaded', function() {

			bounds = map.getBounds();

			var centerCircle = new google.maps.Circle({
				map: map,
				center: center,
				fillcolor: 'red',
				radius: radius * 1609.344
				draggable: true,
				editable: true

			});

			google.maps.event.addListener(centerCircle, 'click', function() {
				if(centerCircle.getEditable()) {
					centerCircle.setEditable(false);
					centerCircle.setEditable(false);
				}
				else {
					centerCircle.setEditable(true);
					centerCircle.setDraggable(true);

				}

				map.setCenter(center);
				map.setZoom(zoom);
			});

		var rectangleBounds = new google.maps.LatLngBounds(
			new google.maps.LatLng(41, -87),
			center

		);

		var rectangle = new google.maps.Rectangle({
			bounds: rectangleBounds,
			map: map,
			editable: true,
			draggable: true

		});


		bounds.union(rectangleBounds);
		bounds.union(centerCircle.getBounds());

		map.fitBounds(bounds);

		circle.push(centerCircle);

		google.maps.event.removeListener(tilesLoadsEvent);
		
	});
	
}(jQuery, this));