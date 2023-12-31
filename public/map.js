let map;

export async function initMap(directionsRenderer) {
const { Map } = await google.maps.importLibrary("maps")
    map = new Map(document.getElementById("map"), {
        center: { lat: 1, lng: 0 },
        zoom: 1,
        mapId: '6dd56c7e460c16d5'
    });
    let infoBoxDiv = document.createElement('div');
    makeInfoBox(infoBoxDiv, map);
    map.controls[google.maps.ControlPosition.TOP_CENTER].push(infoBoxDiv);
    directionsRenderer.setMap(map);
    return map;
}
function makeInfoBox(controlDiv, map) {
    // Set CSS for the control border.
    let controlUI = document.createElement('div');
    controlUI.style.boxShadow = 'rgba(0, 0, 0, 0.298039) 0px 1px 4px -1px';
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '2px';
    controlUI.style.marginBottom = '22px';
    controlUI.style.marginTop = '10px';
    controlUI.style.textAlign = 'center';
    controlDiv.appendChild(controlUI);
  
  }