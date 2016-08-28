export interface BluetoothRemoteGATTDescriptor {

}

export interface BluetoothServiceUUID {

}

export interface BluetoothCharacteristicUUID {

}

export interface BluetoothCharacteristicProperties {

}

export interface BluetoothDescriptorUUID {

}

export interface BluetoothRemoteGATTDescriptor {

}

export interface BluetoothDescriptorUUID {

}

export interface RequestDeviceOptions {
  filters: Array<any>;
  optionalServices?: Array<any>;
}


export interface BluetoothRemoteGATTServer {
  connected: boolean;
  device: BluetoothDevice;
  connect(): Promise<BluetoothRemoteGATTServer>;
  disconnect();
  getPrimaryService(service: BluetoothServiceUUID): Promise<BluetoothRemoteGATTService>;
  getPrimaryServices(service?: BluetoothServiceUUID): Promise<Array<BluetoothRemoteGATTService>>;
}

interface BluetoothGATTService {
  uuid: string;
  isPrimary: boolean;
  device: BluetoothDevice;
  getCharacteristic(characteristic: BluetoothCharacteristicUUID): Promise<BluetoothGATTCharacteristic>;
  getCharacteristics(characteristic?: BluetoothCharacteristicUUID): Promise<Array<BluetoothGATTCharacteristic>>;
  getIncludedService(service: BluetoothServiceUUID): Promise<BluetoothGATTService>;
  getIncludedServices(service?: BluetoothServiceUUID): Promise<Array<BluetoothGATTService>>;
}

export interface BluetoothRemoteGATTService extends BluetoothGATTService {}


interface ArrayBuffer {}

export interface DataView {
  buffer: ArrayBuffer;
  byteLength: number;
  byteOffset: number;

  getInt8(byteOffset: number): number;
  getUint8(byteOffset: number): number;
  getInt16(byteOffset: number): number;
  getUint16(byteOffset: number): number;
  getInt32(byteOffset: number): number;
  getUint32(byteOffset: number): number;
  getFloat32(byteOffset: number): number;
  getFloat64(byteOffset: number): number;

  setInt8(byteOffset: number, value: number, littlEndian?: boolean): void;
  setUint8(byteOffset: number, value: number, littlEndian?: boolean): void;
  setInt16(byteOffset: number, value: number, littlEndian?: boolean): void;
  setUint16(byteOffset: number, value: number, littlEndian?: boolean): void;
  setInt32(byteOffset: number, value: number, littlEndian?: boolean): void;
  setUint32(byteOffset: number, value: number, littlEndian?: boolean): void;
  setFloat32(byteOffset: number, value: number, littlEndian?: boolean): void;
  setFloat64(byteOffset: number, value: number, littlEndian?: boolean): void;
}

export interface BluetoothRemoteGATTCharacteristic {
  service: BluetoothRemoteGATTService;
  uuid: string;
  properties: BluetoothCharacteristicProperties;
  value: DataView;
  oncharacteristicvaluechanged: (event: Event) => void;
  readValue(): Promise<DataView>;
  writeValue(value: ArrayBuffer): Promise<void>;
  startNotifications(): Promise<void>;
  stopNotifications(): Promise<void>;
  getDescriptor(descriptor: BluetoothDescriptorUUID): Promise<BluetoothRemoteGATTDescriptor>;
  getDescriptors(descriptor?: BluetoothDescriptorUUID): Promise<Array<BluetoothRemoteGATTDescriptor>>;
}

export interface BluetoothGATTCharacteristic extends BluetoothRemoteGATTCharacteristic {}

export interface BluetoothDevice {
  gatt: BluetoothRemoteGATTServer;
  id: string;
  name: string;
  ongattserverdisconnected: (event: Event) => void;
  uuids: number[]
}