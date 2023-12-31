initMap();

async function initMap() {
    // The `ymaps3.ready` promise will be resolved when all the API components are loaded
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Map creation
    const map = new YMap(
        // Pass the link to the HTMLElement of the container
        document.getElementById('map'),

        // Pass the initialization parameters
        {
            location: {
                // The map center coordinates
                center: [25.229762, 55.289311],

                // Zoom level
                zoom: 10
            }
        }
    );

    // Add a layer to display the schematic map
    map.addChild(new YMapDefaultSchemeLayer());
}