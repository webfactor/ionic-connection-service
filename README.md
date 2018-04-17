# IonicConnectionService

Can check if device is connected and show the type of connection

## Installation

- Install via npm  
`npm i @webfactor/ionic-connection-service`

- Add `ConnectionServiceModule.forRoot()` to your ionic module imports.

- Install peerDependencies 
`ionic cordova plugin add cordova-plugin-network-information` /
`npm install --save @ionic-native/network`
 
## Properties
```typescript
isConnected: boolean
```
Show if device is connected with any network (Wifi, 3g, 2g etc.)

## Methods


```typescript
public getType(): string  
```
Return string of the type of the connection.

```typescript
public isWifi() boolean
```
Return boolean if wifi-connection is on.
