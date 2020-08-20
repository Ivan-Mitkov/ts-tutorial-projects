// import { User } from "./User";
// import { Company } from "./Company";
interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
}
export class CustomMap {
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: { lat: 1, lng: 1 },
    });
  }
  private googleMap: google.maps.Map;

  addMarker(mappable: Mappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: { lat: mappable.location.lat, lng: mappable.location.lng },
    });
  }
}