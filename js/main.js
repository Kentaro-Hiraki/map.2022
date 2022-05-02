
window.onload = function(){
    const map = createMap();
}



function createMap() {
    return new ol.Map({
        layers: [
            new ol.layer.Tile({
              source: new ol.source.OSM()
            }),
            // vectorLayer
        ],
        target: 'map',
        view: new ol.View({
          projection: 'EPSG:4326',
          center: [139.7528, 35.685175],
          zoom: 12
        })
    });
} 
