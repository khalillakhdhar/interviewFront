import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
// crud operations pour utilisateur avec url de base: http://localhost:8080/utilisateur
// integration avec spring boot et angular 
// injection du http client dans le constructeur
url="http://localhost:8080/utilisateur";
constructor(private http: HttpClient) { }
// recuperer tous les utilisateurs
getUtilisateurs(){
  return this.http.get(this.url);
}
// recuperer un utilisateur par id
getUtilisateur(id){
  return this.http.get(this.url+"/"+id);
}
// ajouter un utilisateur
addUtilisateur(utilisateur){
  return this.http.post(this.url,utilisateur);
}
//supprimer un utilisateur
deleteUtilisateur(id){
  return this.http.delete(this.url+"/"+id);
}

//assign user to profile

assignProfil(id,profile){
  return this.http.put(this.url+"/"+id,profile);
}

}
