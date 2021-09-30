import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserProfile, UserProfileService } from '../user-profile.service';

@Component({
  selector: 'sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.css']
})
export class SignUpFormComponent implements OnInit {

  userProfile : UserProfile = {
    name: '',
    email: '',
    telefone: '',
    endereco: '',
    idade: '',
    preferencia: ''
  }
  
  @Output() emitterFormOpen = new EventEmitter<boolean>();
  @Output() emitterTableOpen = new EventEmitter<boolean>();

  private form_open : boolean = false;
  private tabela : boolean = true;
  
  constructor(private userProfileService: UserProfileService) { }

  functionToCallFormOpen() {
    this.emitterFormOpen.emit(this.form_open);
  }

  functionToCallTableOpen(){
    this.emitterTableOpen.emit(this.form_open);

  }

  updateProfile(event: Event){
    this.userProfileService.updateData(this.userProfile)
  }

  ngOnInit(): void {
  }

}
