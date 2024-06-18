import { Component, inject } from '@angular/core';
import { CardService } from '../services/card.service';
import { foodCard } from '../foodCard';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {


  // პირველ რიგში ვწერთ სერვისებში გატანილი async functiom-მა საიდან აიღოს აიდი

  // აქ ვქმნით ცვლადს რომელიც არის foodcard ტიპის ან undefined
  detailCard: foodCard | undefined


  route: ActivatedRoute = inject(ActivatedRoute)



  // აქ ვწერთ კოდს რომელიც უზრუნველყოფს გარეთ გატანილი კომპონრნტის card service-ში ჩაწერილი ასინქრონული ფუნქციის details კომპონენტში შესრულებას ანუ რასაც აქ გავაკეთებთ ჩაიწერება details-ში

  constructor(private detailsCard: CardService) {


    // აქ ვწვდებით აიდის 
    const myId = Number(this.route.snapshot.params['id'])

 
    // შემდეგ აიდის გადავცემთ ფუნქციას
    this.detailsCard.getFoodsId(myId).then(cardDes => {
      //გამოტანილ ობიექტს ვუტოლებთ ჩვენ დასაბეჭდ ობიექტს
      this.detailCard = cardDes
    })


  }

}
