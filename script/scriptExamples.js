"use struct";

// window.DOMContentLoaded=function (){
//   var schet = 0;
// };

var arrayColor = ["url(https://chvanov.ru/wp-content/uploads/2015/04/trees-in-front-of-cliffs-at-cheow-larn-lake.jpg)","url(http://wallpapersfan.ru/wp-content/uploads/2016/12/oboi-na-rabochij-stol-shishki-v-snegu.jpg)","url(https://i.pinimg.com/originals/e4/36/a2/e436a26985ae4c7d48ac22190a106090.jpg)","url(https://avatars.mds.yandex.net/get-pdb/406349/d9692cee-c393-4349-9ed0-23da6293f036/orig)"];
var schet = 0;

function testAttribute() {
  inputTest.value = 'NewValue';
  alert(inputTest.getAttribute('value'));
  inputTest.setAttribute('value', 'new'); // поменяли атрибут
  alert('Атрибут добавлен');
}


function clicker() {
  var elemcss1 = document.body.querySelectorAll(':hover');
  var message  = document.createElement('div');
  for (var i = 0; i <= elemcss1.length-1; i++) {
     if (elemcss1[i].matches('button[name$="button"]')) { //CLOSEST - Ищет по иерархии выше, подходящий под CSS-селектор
       alert("Тип: " + elemcss1[i].type);
     }
  }
}

function clicker2() {
var content = document.getElementById('content');
var inner = document.getElementById('inner');
  inner.innerHTML = '<h3>Пока</h3>';
  content.textContent = '<h3>Пока</h3>';
  document.body.children[3].innerHTML += '<h3>Пока</h3>';
  document.body.children[4].textContent = '<h3>Пока</h3>';
}

function clickButtons() {
    var tablelem = document.getElementById('age-table');
    var elements = tablelem.getElementsByTagName('input');
    var classic1 = document.getElementsByClassName('classic');
    for (var i = 0; i < elements.length; i++) {
      var div1 = elements[i];
      if(div1.checked == true) {
        alert(div1.value);
      }

    }
  }


  function clicker3(){

    // var computedStyle = getComputedStyle(document.body);
    //   alert( computedStyle.marginTop ); // выведет отступ в пикселях
    document.body.style.backgroundImage = arrayColor[schet];
    schet++;
    if(schet > arrayColor.length-1){
      schet = 0;
    }
  //   var ul1 = document.createElement('ul');
  //
  //   for(var i = 0;i < 5;i++) {
  //         var li1 = document.createElement('li');
  //           li1.innerHTML = 'Hello';
  //       ul1.appendChild(li1);
  //   }   // сначала вставить узлы
  // appendChild(ul1); // затем в документ
  }



  function clicker4() {
    var div1 = document.createElement('div');
    var mainPage = document.body;
    div1.className = "alert alert-success";
    div1.innerHTML = "<strong>Тут</strong>";
    var div2 = div1.cloneNode(true);
    i = input.value;
    var message  = document.createElement('div');
    message.className = "alert alert-success";
    message.innerHTML = "<strong>Число находится за границами массива</strong>";
    if (i > 3 || i < 1) {
      events.appendChild(message);
      setTimeout(function() {
      events.removeChild(message);
    },2500);
    }
    else {
      if (i == 1) {
        list.insertBefore(div1,one);
      }
      else if (i == 2) {
        list.insertBefore(div1,two);
      }
      else if (i == 3) {
        list.insertBefore(div1,three);
      }
        setTimeout(function() {
        list.removeChild(div1);
      },5000);
    }
  }
