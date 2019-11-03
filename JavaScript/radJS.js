var articleCategory = [
    {
        id: 568,
        name: 'muška obuća',
        podCategory: [
            {
                id: 578,
                name: 'letnja sezona',
            },
            {
                id: 588,
                name: 'zimska sezona',
            }
        ]
    },
    {
        id:429,
        name: 'ženska obuća',
        podCategory: [
            {
                id: 439,
                name: 'letnja sezona',
            },
            {
                id: 449,
                name: 'zimska sezona',
            }
        ]
    }
];

var article = [
    {
        name: 'Cipele',
        price: [100, 60],
        pricePDV: [],
        type: articleCategory[0].podCategory[0].id,
        season: 'leto',
        description: 'Ove muške cipele za svaki dan su specijalno izrađene da se zaista uklapaju ' +
            'sa skoro svim Vašim autfitima. Bez obzira da li ste krenuli u ležernu šetnju, na posao ' +
            'ili na večeru sa prijateljima, casual kožne muške cipele će se savršeno uklopiti i ' +
            'upotpuniti Vaš stil. Pritom će svaki Vaš korak biti ispraćen udobnošću.',
        stanje: true,
        img: 'Image/cipele.jpg',
        id: '123'
    },
    {
        name: 'Patike',
        price: [70, 50],
        type: articleCategory[0].podCategory[0].id,
        season: 'leto',
        description:'Ove muške patike za svaki dan su specijalno izrađene da se zaista uklapaju ' +
            'sa skoro svim Vašim autfitima. Bez obzira da li ste krenuli u ležernu šetnju, na posao ' +
            'ili na večeru sa prijateljima, casual muške patike će se savršeno uklopiti i ' +
            'upotpuniti Vaš stil. Pritom će svaki Vaš korak biti ispraćen udobnošću.',
        stanje: true,
        img: 'Image/patike.jpg',
        id: '233'
    },
    {
        name: 'Čizme',
        price: [335, 20],
        type: articleCategory[1].podCategory[1].id,
        season: 'zima',
        description: 'Ove ženske čizme za svaki dan su specijalno izrađene da se zaista uklapaju ' +
            'sa skoro svim Vašim autfitima. Bez obzira da li ste krenuli u ležernu šetnju, na posao ' +
            'ili na večeru sa prijateljima, casual kožne ženske čizme će se savršeno uklopiti i ' +
            'upotpuniti Vaš stil. Pritom će svaki Vaš korak biti ispraćen udobnošću.',
        stanje: true,
        img: 'Image/cizme.jpeg',
        id: '3452'
    },
    {
        name: 'Papuče',
        price: [30, 20],
        type: articleCategory[0].podCategory[0].id,
        season: 'leto',
        description: 'Ove papuče za svaki dan su specijalno izrađene da se zaista uklapaju ' +
            'sa skoro svim Vašim autfitima. Bez obzira da li ste krenuli u ležernu šetnju, na posao ' +
            'ili na večeru sa prijateljima, casual papuče će se savršeno uklopiti i ' +
            'upotpuniti Vaš stil. Pritom će svaki Vaš korak biti ispraćen udobnošću.',
        stanje: true,
        img: 'Image/papuce.jpeg',
        id: '5865'
    },
    {
        name: 'Baletanke',
        price: [25, 18],
        type: articleCategory[1].podCategory[0].id,
        season: 'leto',
        description: 'Ove ženske baletanke za svaki dan su specijalno izrađene da se zaista uklapaju ' +
            'sa skoro svim Vašim autfitima. Bez obzira da li ste krenuli u ležernu šetnju, na posao ' +
            'ili na večeru sa prijateljima, casual ženske baletanke će se savršeno uklopiti i ' +
            'upotpuniti Vaš stil. Pritom će svaki Vaš korak biti ispraćen udobnošću.',
        stanje: true,
        img: 'Image/baletanke.jpg',
        id: '2834'
    },
    {
        name: 'Muske čizme',
        price: [220, 180],
        type: articleCategory[0].podCategory[1].id,
        season: 'zima',
        description: 'Ove muške čizme za svaki dan su specijalno izrađene da se zaista uklapaju ' +
            'sa skoro svim Vašim autfitima. Bez obzira da li ste krenuli u ležernu šetnju, na posao ' +
            'ili na večeru sa prijateljima, casual kožne muške čizme će se savršeno uklopiti i ' +
            'upotpuniti Vaš stil. Pritom će svaki Vaš korak biti ispraćen udobnošću.',
        stanje: true,
        img: 'Image/muskecizme.jpeg',
        id: '1898'
    },
];

var maloprodajaPDV = 1.2;
var veleprodajaPDV = 0.8;
var ispisArtikla = document.getElementById('proizvodi');

// //Padajuci meni u navbaru
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }
//
// // Zatvaranje padajuceg menija ukoliko korisnik klikne sa strane
// window.onclick = function(e) {
//     if (!e.target.matches('.dropbtn')) {
//         var myDropdown = document.getElementById("myDropdown");
//         if (myDropdown.classList.contains('show')) {
//             myDropdown.classList.remove('show');
//         }
//     }
// };

//Izracunavanje PDV
function pricePDV (price, maloprodajaPDV, veleprodajaPDV){
    var pricePDV = [];
    for (var i=0; i<price.length; i++){
        if (i==0){
            pricePDV[i] = price[i]*maloprodajaPDV;
        } else {
            pricePDV[i] = price[i]*veleprodajaPDV;
        }
    }
    return pricePDV;
}

//prilikom klika na taster ispod slike - nestaje artikal sa ekrana
function clickMe(id) {
    document.getElementById(id).style.display = "none";
}

//ispis artikala u konzoli
function writeElement (i,j,k){
    ispisArtikla.innerHTML +=
        '<div id="'+ article[i].id +'" class="article rightcolumn">' +
            '<div class="card"' +
                '<h2>' + article[i].name + '<img src="Image/icon2.png" class="zvezda"></h2>' +
                '<img class="img-responsive" src="'+ article[i].img +'">' +
                '<p class="description">' + article[i].description + '</p>' +
                '<p class="price">' + article[i].pricePDV[0] + '</p>' +
                '<p class="type">'+articleCategory[j].name+','+articleCategory[j].podCategory[k].name+'</p>' +
                '<a>Saznaj vise</a>' +
                '<br><br><button onclick="clickMe('+ article[i].id +')">Click me</button>' +
                '<br><br><button type="button" class="btn btn-primary" data-toggle="modal" data-target="#m'+article[i].id+'">Vise </button>' +
            '</div>'+
        '</div>'+
        '<div class="modal fade" id="m'+article[i].id+'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">' +
            '<div class="modal-dialog" role="document">' +
                '<div class="modal-content">' +
                    '<div class="modal-header">' +
                        '<h5 class="modal-title" id="exampleModalLabel">'+ article[i].name +'</h5>' +
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' +
                            '<span aria-hidden="true">&times;</span>' +
                        '</button>' +
                    '</div>' +
                    '<div class="modal-body">'+
                        '<h5>' + articleCategory[j].name + '</h5>'+
                        '<hr>'+
                        '<h5>' + articleCategory[j].podCategory[k].name + '</h5>'+
                    '</div>'+
                '</div>' +
                '<div class="modal-footer">' +
                    '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>' +
                    '<button type="button" class="btn btn-primary">Save changes</button>' +
                '</div>' +
            '</div>' +
        '</div>'

}

function compare(a,b) {
    if ( a.pricePDV[0] < b.pricePDV[0] ){
        return -1;
    } else {
        return 1;
    }
}

//prikaz artikala sortiran po ceni
function sortPrice () {
    ispisArtikla.innerHTML = '';
    article.sort(compare);
    for (var i=0; i<article.length; i++) {
        if (article[i].stanje == true) {
            for (j=0; j<articleCategory.length; j++) {
                for (var k=0; k<articleCategory[j].podCategory.length; k++) {
                    if (article[i].type == articleCategory[j].podCategory[k].id) {
                        writeElement(i,j,k);
                    }
                }
            }
        }
    }
}

//prikaz artikala sa otkacenim zeljenim opsegom cene
function getPriceRate() {
    var x = document.getElementById("do100").value;
    x=document.getElementById("do100").checked;
    var y = document.getElementById("od100do200").value;
    y=document.getElementById("od100do200").checked;
    var z = document.getElementById("preko200").value;
    z = document.getElementById("preko200").checked;

    console.log(x, y, z);
    ispisArtikla.innerHTML = '';
    for (var i=0; i<article.length; i++) {
        if (article[i].stanje == true) {
            for (j=0; j<articleCategory.length; j++) {
                for (var k=0; k<articleCategory[j].podCategory.length; k++) {
                    if (article[i].type == articleCategory[j].podCategory[k].id) {
                        if (x && article[i].pricePDV[0] < 100) {
                            writeElement(i,j,k);
                        } else if (y && article[i].pricePDV[0] >= 100 && article[i].pricePDV[0] < 200) {
                            writeElement(i,j,k);
                        } else if (z && article[i].pricePDV[0] >= 200) {
                            writeElement(i,j,k);
                        }
                    }
                }
            }
        }
    }
}


//prikaz artikala po tipu (muski/zenski)
function getTypeRate() {
    var a = document.getElementById("muska obuca").checked;
    var b = document.getElementById("zenska obuca").checked;
    console.log(a, b);
    ispisArtikla.innerHTML = '';
    for (var i=0; i<article.length; i++) {
        if (article[i].stanje == true) {
            for (j=0; j<articleCategory.length; j++) {
                for (var k=0; k<articleCategory[j].podCategory.length; k++) {
                    if (article[i].type == articleCategory[j].podCategory[k].id) {
                        if (a && articleCategory[j].id == 568) {
                            writeElement(i,j,k);
                        } else if (b && articleCategory[j].id == 429) {
                            writeElement(i,j,k);
                        }
                    }
                }
            }
        }
    }
}

//prikaz artikala po sezoni (leto/zima)
function getSeasonRate() {
    var a = document.getElementById("leto").checked;
    var b = document.getElementById("zima").checked;
    console.log(a, b);
    ispisArtikla.innerHTML = '';
    for (var i=0; i<article.length; i++) {
        if (article[i].stanje == true) {
            for (j=0; j<articleCategory.length; j++) {
                for (var k=0; k<articleCategory[j].podCategory.length; k++) {
                    if (article[i].type == articleCategory[j].podCategory[k].id) {
                        if (a && article[i].season == 'leto') {
                            writeElement(i,j,k);
                        } else if (b && article[i].season == 'zima') {
                            writeElement(i,j,k);
                        }
                    }
                }
            }
        }
    }
}

//da u checkbox-u moze da prikaze samo jednu zeljenu opciju
function onlyOne(checkbox) {
    var checkboxes = document.getElementsByName('check');
    checkboxes.forEach((item) => {
        if (item !== checkbox) item.checked = false
    })
}

//ogranicavanje broja karaktera u podrucju za unos teksta
function change (el) {
    var max_len = 100;
    if (el.value.length > max_len) {
        el.value = el.value.substr(0, max_len);
    }
    return true;
}

//kreiranje nove kategorije unutar podkategorije
function getpodCategory () {
    var newpodCategoryId = parseInt(document.getElementById("listcategory").value);
    var newpodCategoryName = document.getElementById("newsubcategory").value;
    var x = new Object();

    x.id = Math.floor(Math.random() * (1000000 - 2000 + 1)) + 2000;;
    x.name = newpodCategoryName;

    for (j=0; j<articleCategory.length; j++) {
        if (articleCategory[j].id==newpodCategoryId) {
            articleCategory[j].podCategory.push(x)
        }
    }
    console.log(articleCategory);

    document.getElementById('cat').options.length = 0;
    for (j=0; j<articleCategory.length; j++) {
        for (var k=0; k<articleCategory[j].podCategory.length; k++) {
            var el = document.createElement('option');
            el.textContent = articleCategory[j].name + " " + articleCategory[j].podCategory[k].name;
            el.value = articleCategory[j].podCategory[k].id;
            cat.appendChild(el);
        }
    }
}

//kreiranje novog artikla i njegovo ubacivanje u objekat (var article)
function getArticle() {
    var ime = document.getElementById('name').value;
    var mcena = parseInt(document.getElementById('mcena').value);
    var vcena = parseInt(document.getElementById('vcena').value);
    var select1 = parseInt(document.getElementById('cat').value);
    var opis = document.getElementById('description').value;
    var slika = document.getElementById('url').value;

    var newArticle = new Object();

    newArticle.name = ime;
    newArticle.price = new Array();
    newArticle.price[0] = mcena;
    newArticle.price[1] = vcena;
    newArticle.type = select1;
    newArticle.stanje = true;
    newArticle.description = opis;
    newArticle.img = slika;

    article.push(newArticle);
    console.log(article);

    if (!name && !mcena && !type && !description && !stanje && !img) {
        window.alert("Niste ispunili sva polja");
    } else {
        ispisArtikla.innerHTML = "";
        for (var i=0; i<article.length; i++) {
            if (article[i].stanje == true) {
                article[i].pricePDV = pricePDV(article[i].price, maloprodajaPDV, veleprodajaPDV);
                for (var j=0; j<articleCategory.length; j++) {
                    for (var k=0; k<articleCategory[j].podCategory.length; k++) {
                        if (article[i].type == articleCategory[j].podCategory[k].id) {
                            writeElement(i,j,k);
                        }
                    }
                }
            }
        }
    }
}

//Ispis muska obuca letnja sezona u Select baru
for (j=0; j<articleCategory.length; j++) {
    for (var k=0; k<articleCategory[j].podCategory.length; k++) {
        var el = document.createElement('option');
        el.textContent = articleCategory[j].name + " " + articleCategory[j].podCategory[k].name;
        el.value = articleCategory[j].podCategory[k].id;
        cat.appendChild(el);
    }
}

for (j=0; j<articleCategory.length; j++) {
    var el = document.createElement('option');
    el.textContent = articleCategory[j].name;
    el.value = articleCategory[j].id;
    listcategory.appendChild(el);
}

//klikom na select bar a zatim na Klikni treba da ispise samo ime podkategorije (DORADITI POSTO NE RADI)
//https://www.dyn-web.com/tutorials/forms/select/selected.php

for (var i=0; i<article.length; i++) {
    for (j=0; j<articleCategory.length; j++) {
        for (var k=0; k<articleCategory[j].podCategory.length; k++) {
            if (article[i].type == articleCategory[j].podCategory[k].id) {
                article[i].pricePDV = pricePDV(article[i].price, maloprodajaPDV, veleprodajaPDV);
            }
        }
    }
}

for (var i=0; i<article.length; i++) {
    if (article[i].stanje == true) {
        for (var j=0; j<articleCategory.length; j++) {
            for (var k=0; k<articleCategory[j].podCategory.length; k++) {
                if (article[i].type == articleCategory[j].podCategory[k].id) {
                    writeElement(i,j,k);
                }
            }
        }
    }
}

//data model - odnos elemenata
//jedan proizvod moze da ima samo jednu kategoriju ali ta kategorija se moze koristiti za vise proizvoda
//kategorija se poziva SAMO PREKO - ID
