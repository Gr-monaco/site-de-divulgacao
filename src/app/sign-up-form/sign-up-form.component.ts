import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserProfile, UserProfileService } from '../user-profile.service';

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  options = ['C#','C++','C',
             'Python','PHP','HTML',
             'Javascript','Ruby','R',
             'Lisp','Java']

  userProfile : UserProfile = {
    name: '',
    email: '',
    telefone: '',
    endereco: '',
    idade: 19,
    preferencia: ''
  }
  
  @Output() emitterFormOpen = new EventEmitter<boolean>();
  @Output() emitterTableOpen = new EventEmitter<boolean>();

  private form_open : boolean = false;
  private table_open : boolean = true;
  
  constructor(private userProfileService: UserProfileService) { }

  functionToCallFormOpen() {
    this.emitterFormOpen.emit(this.form_open);
  }

  functionToCallTableOpen(){
    this.emitterTableOpen.emit(this.table_open);

  }

  updateProfile(event: Event){
    this.userProfileService.updateData(this.userProfile)
  }
  
  getButtonState(): boolean{
    console.log('aaaa');
    if (this.userProfile.idade >=18){
      return false;
    }
    else{
      return true;
    }
  }

  ngOnInit(): void {
  }

}
