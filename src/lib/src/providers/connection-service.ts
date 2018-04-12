import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network';

@Injectable()
export class ConnectionService {
    isConnected: boolean = false;

    constructor(private network: Network) {
        this.network.onConnect().subscribe(() => this.onConnect());
        this.network.onDisconnect().subscribe(() => this.onDisconnect());
        this.isConnected = this.getType() != 'none';
    }

    public getType(): string {
        return this.network.type;
    }

    public isWifi(): boolean  {
        return this.network.type == 'wifi';
    }

    private onConnect() {
        this.isConnected = true;
    }

    private onDisconnect() {
        this.isConnected = false;
    }
}
