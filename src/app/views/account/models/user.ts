export class UserResult {
    
    userId: string;
    username?: string;
    nom?: string;
    prenom?: string;
    cin?: string;
    phoneNumber?: string;
    adresse?: string;
    sexe?: string;
    userType?: string;


    constructor(id: string, username:string, nom: string = '', prenom: string = '', email: string = '') {
        this.userId = id;
        this.username = username;
        this.nom = nom;
        this.prenom = prenom;
        this.cin = this.cin;
    }
}