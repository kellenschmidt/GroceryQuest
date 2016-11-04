import { Injectable } from '@angular/core';

@Injectable()
export class BroadcastService {

    subscriptions: any;

    constructor() {
        this.subscriptions = {};
    }

    broadcast(eventName, args: any) {
        var subscribers = this.subscriptions[eventName]
        if (subscribers) {
            for (var i = subscribers.length; i--;) {
                subscribers[i](args);
            }
        }
    }

    subscribe(eventName, callBack) {
        if (!this.subscriptions[eventName]) {
            this.subscriptions[eventName] = [];
        }
        this.subscriptions[eventName].push(callBack);
    }
}