import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebBleRoutesModule } from './web-bluetooth.routes';

import { WebBluetoothComponent }  from './web-bluetooth.component';
import { BatteryLevelComponent } from './battery-level/';
import { HeartMonitorComponent } from './heart-monitor/';
import { LuxometerComponent } from './luxometer/';
import { TemperatureComponent } from './temperature/';

import { UnitPipe, BluetoothCore, BrowserWebBluetooth } from './shared';

import { SharedModule } from '../../shared/';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    WebBleRoutesModule
  ],
  declarations: [
    WebBluetoothComponent,
    BatteryLevelComponent,
    HeartMonitorComponent,
    LuxometerComponent,
    UnitPipe,
    TemperatureComponent
  ],
  providers: [
    BrowserWebBluetooth
  ]
})
export class WebBleModule {

}
