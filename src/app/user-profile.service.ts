import { Injectable } from '@angular/core';

export interface UserProfile {
  name: string
  email: string
  telefone: string
  endereco: string
  idade: string
  preferencia: string
}

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  nome: string = 'Teste';
  email:string = 'email';
  telefone: string = '2345meia78';
  endereco: string = 'endereco';
  idade: string = '321'
  preferencia: string ='C#'

  constructor() { }

  updateData(userProfile: UserProfile){
    this.nome = userProfile.name;
    this.email = userProfile.email;
    this.telefone = userProfile.telefone;
    this.endereco = userProfile.endereco;
    this.idade = userProfile.idade;
    this.preferencia = userProfile.preferencia;
  }
}
