const form=document.getElementById("film-form");//form elementimizi sectik
//input elementlerini secelim
const baslikElement=document.querySelector("#title");
const yonetmenElement=document.querySelector("#director");
const linkelement=document.querySelector("#url");
const cardbody=document.querySelectorAll(".card-body")[1];
const clearAllFilms=document.getElementById("clear-films");


// kodlarimizi es6 biciminde formatladigimiz icin  boyle baslatmalara ihtiyacimiz yok artik direkt claslarimizdan ulasabiliriz 
// //UI baslatma 


// const ui=new UI();

// //storage baslatma


// const storage=new Storage();

// tum eventleri baslatma secme
eventListener();

function eventListener(){
form.addEventListener("submit",filmEkle)//daha ince tanimladigimiz forma submit eventi atadik ve submit olunca filmeEkle fonskyonunu calistirdik
document.addEventListener("DOMContentLoaded",function(){//sayfamiz yuklenince ne yapavagini yazdigimiz fonksiyon
let films=Storage.getFilmFromStorage();//filmleri getFilmFromStorage fonksiyonundan degiskene atadik
UI.loadAllFilms(films); //ui.js te yazdigimiz koda yolladik
});
cardbody.addEventListener("click",deleteFilm);//tiklama eventi verdik 
clearAllFilms.addEventListener("click",clearAllFilm);
}
function filmEkle(e){ //sectigimiz bu elementleri bir degere atadik
    const ad =baslikElement.value;
    const yonetmen= yonetmenElement.value;
    const link=linkelement.value;   

    if(ad ==="" || yonetmen==="" || link==="" ) {
        //eger bunlardan biri bos ise hata bloguna gir
        console.log("hataya giedin");
     UI.displayMessage("lutfen tum alanlari doldurun","danger");
    }
    else
    {
        const newFilm=new Film(ad,yonetmen,link);//film.js dosyasindaki Film constructorundan nesne turettik ve bu nesneyi 
                                                
            
        UI.UIfilmEkle(newFilm);//ui.js dosyasindaki fonskiyona gonderdik  arayuze film ekleme 
        Storage.addFilmstorage(newFilm);//storage.js  kismindaki protoype a ekledigimiz fonskiyona gonderdik  fonksiyona  gonderdik  
        UI.displayMessage("film eklendi","success ");


    }
    UI.inputTemizle(baslikElement,yonetmenElement,linkelement);//ui.js kisminda yazdigimiz imputlari temizle kismina yazdigimiz imput elementlerimizi yolluyor
    
    
    e.preventDefault();//  e.preventDefault();//formumuz submit olmasin diye yani ayni sayfada kalsin diye boyle bir sey kullaniyoruz 
  
}
function deleteFilm(e){//burda da tiklanan seyi kontrol ettik eger ki silme etiketi ise ui kisminda yazdigimiz bir fonksiyona yolladik
    if( e.target.id==="delete-film"){//e.target ile imlecimizin neuye tikladigini yakalaybiliyoruz
        UI.deleteFilmFromUI(e.target);//a etiketini yani silme butonunu ui kisminda yazdigimiz kodua yolluyoruz

       //ls ten silmek icin a ya tiklanildigi zaman parent elementin kardeslerine bboyle erisebiliyoruz 
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        UI.displayMessage("film silindi","success ");
    }
}
function clearAllFilm(){
    UI.clearAllFilmsFromUI();
    Storage.clearAllFilmsFromStorage();
}