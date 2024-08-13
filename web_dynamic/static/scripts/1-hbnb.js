$(document).ready(function () {
	let selectedAmenities = [];

	$('input[type="checkbox"]').change(function () {
		let amenityId = $(this).data('id');
		let amenityName = $(this).data('name');

		if ($(this).is(':checked')) {
			if (!selectedAmenities.includes(amenityId)) {
				selectedAmenities.push(amenityId);
			}
		} else {
			selectedAmenities = selectedAmenities.filter(id => id !== amenityId);
		}
		let amenitiesList = selectedAmenities.map(id => {
			return amenityName;
		});
		$('.amenities h4').text(amenitiesList.join(', '));
	});
});
