import { Network } from '@ionic-native/network';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectionService } from './providers/connection-service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: []
})
export class ConnectionServiceModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ConnectionServiceModule,
      providers: [ConnectionService, Network]
    };
  }
}
