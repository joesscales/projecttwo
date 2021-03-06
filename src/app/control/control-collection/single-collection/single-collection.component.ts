import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/fb.service';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-single-collection',
  templateUrl: './single-collection.component.html',
  styleUrls: ['./single-collection.component.scss'],
})
export class SingleCollectionComponent implements OnInit {
 
  config: SwiperOptions = {
    slidesPerView: 3.5,
    spaceBetween: 20,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
  };

  collection: any;
  caps: any;
  collectionRef: any;

  constructor(
    private router:Router,
    private route: ActivatedRoute,
    private fb: FirebaseService
  ) { }


  editCap(capNameHyp: any) {
    this.router.navigateByUrl('control/edit-cap/' + this.collectionRef + '/' + capNameHyp)
  }

  addCap() {
    this.router.navigateByUrl('control/create-cap/' + this.collectionRef)
  }

  backTo() {
    this.router.navigateByUrl('control/collections');
  }

  editCollection() {
    this.router.navigateByUrl('control/edit-collection/' + this.collectionRef);

  }

  getCollectionCaps(){
   this.fb.getCollectionCaps(this.collectionRef).then(data => {
    this.caps = data
   });
  }

  getCollection() {
    this.fb.getSingleCollection(this.collectionRef).then(data => {
      this.collection = data
    });
  }

  ngOnInit() {
    this.collectionRef = this.route.snapshot.paramMap.get('collectionRef');

    if (this.collectionRef) {
        this.getCollectionCaps();
        this.getCollection();
    }
  }

}
