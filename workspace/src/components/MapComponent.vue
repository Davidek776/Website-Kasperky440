<template>
  <GMapMap
      :center="center"
      :zoom="10"
      style="width: 100%; height: 400px"
		:disableDefaultUI="true"
  >
	<GMapMarker
			:key="index"
			v-for="(m, index) in markers"
			:position="m.position"
			:clickable="true"
			:draggable="true"
			@click="center=m.position"
	/>
  </GMapMap>
</template>
<script>
export default {
  name: 'MapComponent',
  data() {
    return {
      center: {lat: 49.141505, lng: 13.559278},
      markers: [
        {
          position: {
            lat: 49.141505, lng: 13.559278
          },
        }
        , // Along list of clusters
      ]
    }
  }
}
</script>
