import { Inject, Injectable } from '@angular/core';
import { Firestore, getFirestore } from 'firebase/firestore';
import { FirebaseApp, initializeApp } from '@firebase/app';
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private _app!: FirebaseApp;
  private _db!: Firestore;

  constructor(@Inject('firebase-config') config: any) {
    this._app = initializeApp(config); //Inicializa la app
    this._db = getFirestore(this._app); 
  }
}