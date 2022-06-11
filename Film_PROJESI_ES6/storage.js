// function Storage(){

// }
class Storage {
  static addFilmstorage  (newFilm){//new film diye parametre aliyor
        let films = this.getFilmFromStorage() //tanimladigimiz degikene getFilmFromStrogeden donen diziyi atadik
        films.push(newFilm);// 
        /*
            [
                local storaggede tuttugumuz dizinin icinde obje var    
    
            {baslik:"karayip korsanlari",yonetmen:"haydar ali",link:"ushhduasdhuas"}
    
            ]
        
        */
        localStorage.setItem("films",JSON.stringify(films));// local storagge alacagimiz diziyi stringe cevirdik
    
    }
    
    static getFilmFromStorage  (){//local storage film kontrolu fonskiyonu
        let films;  //films adinda degisken tanimladik
        if (localStorage.getItem("films")===null){//ls te varmi baktik yoksa dizi olusturduk
            films=[];
    
    
        }else{//varsa da ls ten cektik local so
            films=JSON.parse(localStorage.getItem("films"));//diziye  donusturuyoruz cunku localstorage sadece string kabul ediyor  
    
        }
        return films;
    
    
    }
    
   static deleteFilmFromStorage (filmTitle){
        let films=this.getFilmFromStorage();
        films.forEach(function (film,index) {
          if (film.ad===filmTitle){
            films.splice(index,1);//splice silme metodu 
      
          }
          localStorage.setItem("films",JSON.stringify(films));
        });
      }
    
   static clearAllFilmsFromStorage(){
        localStorage.removeItem("films");
    }
    



}
