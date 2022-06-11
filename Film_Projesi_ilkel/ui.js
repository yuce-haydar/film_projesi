function UI(){

}
UI.prototype.UIfilmEkle=function(newFilm){
    //console.log(newFilm);

    //boyle bir yapi olusturacagiz 
    
    /*
    <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> 
    
    */
    const filmList=document.getElementById("films");

    filmList.innerHTML+=/*literal template kullandik yani direkt html kodu yazabiliyoruz icine* */`
    <tr>
    <td><img src="${newFilm.link}" class="img-fluid img-thumbnail"></td>
    <td>${newFilm.ad}</td>
    <td>${newFilm.yonetmen}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> 
    
    `

}

//inputlari tenmizleme fonksiyonu
UI.prototype.inputTemizle=function(element1,element2,element3){
element1.value="";
element2.value="";
element3.value="";
}

UI.prototype.displayMessage=function (message,type){//mesaj godterme fonksiyomu bunu prototype kaydediyoruz ilkel yontemle

    const cardbody=document.querySelector(".card-body");//iki tane card-body var diye   ->const cardbody=document.querySelectorAll("card-body")[0] seklinde yazabilirz  ama zaten ilkini aliyor bunu yazmamiza gerek yok

    // cardbody.innerHTML=`
    // <div class="alert alert-${type}" role="alert">
    // ${message}
    // </div>
    
    // `

    
    //asagdaki kodlarda yukardaki yapiyi olusturmaya calistik
    const div=document.createElement("Div");
    div.className=`alert alert-${type}`;
    div.textContent=message;


    //cardbody icine cocuk olarak ekledik divimizi
    cardbody.appendChild(div);


    //burda da divimiz gorundukten  1 sn sonra divimizi sildik
    setTimeout(() => {
        div.remove();
    }, 1000);



}

UI.prototype.loadAllFilms=function (films){//tum filmeleri sayfa acilinca yuklemek icin kullnadik
    const filmList=document.getElementById("films");//html sayfasinda nereye yuklenecek onu sactik

  films.forEach(function (film) {//foreach dongusuyle uzerinde dolastik filmlerin ve literal template kullanarak ekran yazdirdik
    filmList.innerHTML+=/*literal template kullandik yani direkt html kodu yazabiliyoruz icine* */`
    <tr>
    <td><img src="${film.link}" class="img-fluid img-thumbnail"></td>
    <td>${film.ad}</td>
    <td>${film.yonetmen}</td>
    <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
    </tr> 
    
    `;
  });

}

UI.prototype.deleteFilmFromUI =function(element){//gelen a elementni element diye aliyoruz ve parentelementlerine ulasip onlari siliyoruz
element.parentElement.parentElement.remove();

}
UI.prototype.clearAllFilmsFromUI=function(){
  const listFilm=document.getElementById("films");
  
  //listFilm.innerHTML=""; boyle de bos birakabiliriz ama while ile yapilan dahha hizli ve sagliklli
  if (confirm("BUTUN Filmleri SILMEK ISTEDIGINIZE EMIN MISINIZ?")===true) {
    while (listFilm.firstElementChild != null) {
        listFilm.removeChild(listFilm.firstElementChild);


    }}
    else{
      
    }


}
