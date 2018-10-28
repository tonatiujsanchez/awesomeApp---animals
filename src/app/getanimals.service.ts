import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class GetanimalsService {
  animales:Animal[]=[];
  constructor(private db: AngularFirestore) { 
    this.cargarAnimales();
  }


  cargarAnimales(){
    this.db.collection('animals').valueChanges()
    .subscribe( ( data:Animal[] ) => {
        
        data.forEach(element => {
            this.animales.unshift(element);
        });

        console.log(this.animales);
                
    });
    
}

cargarAnimal(name:string) {
    return this.db.collection('animals').doc(name).valueChanges();
}


}

interface Animal{
    name: string;
    bio:string;
    imgURL:string;
}

