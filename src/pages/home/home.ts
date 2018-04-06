import { Component } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource, GeolocationPosition } from '@capacitor/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
image: SafeResourceUrl;

  constructor(private domSanitizer: DomSanitizer) {

  }

  async takePhoto() {
    const { Camera } = Plugins;

    const result = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      source: CameraSource.Camera,
      resultType: CameraResultType.Base64  
    });

    this.image = this.domSanitizer.bypassSecurityTrustResourceUrl(
      result && result.base64Data,
    );

  }
}
