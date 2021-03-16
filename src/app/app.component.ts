import { Component } from '@angular/core';
import { EmailServiceService } from './service/email-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name: string = "";
  public email: string="";
  public appointment_date!: Date;
  public move_forward: boolean= false;
  public interview_transcription: string="";
  public actionResult= "";

  public sendEmail(){
    if(this.move_forward){
      const email = {
        name : this.name,
        email : this.email,
        appointment_date : this.appointment_date,
        interview_transcription : this.interview_transcription,
        move_forward : this.move_forward
      };
    console.log(this.name, this.email, this.appointment_date, this.move_forward, this.interview_transcription)
    this.emailService.sendEmail(email).subscribe(
      data =>{
        this.actionResult = data.message;    
      }
    );
  //   this.actionResult = " email sent succesfully"
  // }  else{
  //   this.actionResult = "An error has accoured"
  }

  }
  constructor(private emailService : EmailServiceService){}
}




