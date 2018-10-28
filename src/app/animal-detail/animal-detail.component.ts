import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { tap, startWith } from 'rxjs/operators';
import { TransferState, makeStateKey } from '@angular/platform-browser';

import { AngularFirestore } from '@angular/fire/firestore';

import { GetanimalsService } from '../getanimals.service';
import { SeoService } from '../seo.service';


const ANIMAL_KEY = makeStateKey<any>('animal');



@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {
  animal$: Observable<any>;

 

  constructor(private afs: AngularFirestore,
              public _seoService: SeoService,
              private route: ActivatedRoute,
              private state: TransferState,
              public _getAnimalesService: GetanimalsService) { }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('name').toLowerCase();
    this.animal$ = this.ssrFirestoreDoc(`animals/${id}`);
  }





  ssrFirestoreDoc(path: string) {
    const exists = this.state.get(ANIMAL_KEY, {} as any);
      return this.afs.doc<any>(path).valueChanges().pipe(
        tap(animal => {
          this.state.set(ANIMAL_KEY, animal)
          this._seoService.generateTags({
            title: animal.name,
            description: animal.bio,
            image: animal.imgURL
          });
        }),
        startWith(exists)
    )
  }










  //================================================
  //tecnica AngularFire sin TransferState
  //================================================
/*   ngOnInit() {
    const id = this.route.snapshot.paramMap.get('name').toLowerCase();
    console.log('id: ', id);
    
    this.animal$ = this.afs.doc<any>(`animals/${id}`)
    .valueChanges()
    .pipe(
        tap(animal => {      
          
          this._seoService.generateTags({
            title: animal.name,
            description: animal.bio,
            image: animal.imgURL
        })
      })
    )

  } */





  //=======================================
  //tecnica tonsanzjimz
  //=======================================
  /* ngOnInit() {
    this.route.params
            .subscribe(parametros => {
              this._getAnimalesService.cargarAnimal(parametros['name'].toLowerCase())
              .subscribe((resp)=>{
                  this.animal = resp;

                  this._seoService.generateTags({
                    title: resp.name,
                    description: resp.bio,
                    image: resp.imgURL
                  });


              });
            });
  } */

}
