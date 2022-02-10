sel = x => document.querySelector(x)
selAll = x => document.querySelectorAll(x)
const regEmail = /[a-z]*@+[a-z]*/

let arrCars = [
     {
          model: 'Volkswagen Tiguan',
          year: 2019,
          mileage: '19,855 km | ',
          transmission: 'Automatic | ',
          fuel: 'Diesel',
          price: '$34,888',
          imgid: 0
     },
     {
          model: 'Toyota Highlander XLE',
          year: 2014,
          mileage: '69,000 km | ',
          transmission: 'Automatic | ',
          fuel: 'Gas',
          price: '$27,875',
          imgid: 1

     },
     {
          model: 'Lexus RX 350 LUXURY',
          year: 2017,
          mileage: '39,850 km | ',
          transmission: 'Automatic | ',
          fuel: 'Diesel',
          price: '$38,775',
          imgid: 2

     },
     {
          model: 'Toyota Highlander LE A...',
          year: 2016,
          mileage: '104,000 km | ',
          transmission: 'Automatic | ',
          fuel: 'Gas',
          price: '$23,728',
          imgid: 3

     },
     {
          model: 'Hyundai Elantra',
          year: 2017,
          mileage: '95,000  km | ',
          transmission: 'Automatic | ',
          fuel: 'Gas',
          price: '$11,788',
          imgid: 4
     },
     {
          model: 'Mercedes-Benz GLE-Cl...',
          year: 2016,
          mileage: '59,800 km | ',
          transmission: 'Automatic | ',
          fuel: 'Diesel',
          price: '$38,878',
          imgid: 5
     },

     {
          model: 'Toyota Venza AWD XLE...',
          year: 2015,
          mileage: '99,000 km | ',
          transmission: 'Automatic | ',
          fuel: 'Gas',
          price: '$18,620',
          imgid: 6,
          class: 'disebletCar',
          class2: 'disebledCarSold',
          sold: 'sold'

     },
     {
          model: 'Lexus RX 350 F-SPORT',
          year: 2016,
          mileage: '86,000 km | ',
          transmission: 'Automatic |',
          fuel: 'Gas',
          price: '$34,888',
          imgid: 7,

     },
     {
          model: 'Volkswagen Tiguan',
          year: 2019,
          mileage: '19,855 km | ',
          transmission: 'Automatic |',
          fuel: 'Diesel ',
          price: '$34,888',
          imgid: 0

     },
     {
          model: 'Toyota Highlander XLE',
          year: 2014,
          mileage: '69,000 km | ',
          transmission: 'Automatic |',
          fuel: 'Gas ',
          price: '$27,875',
          imgid: 1,
     },
     {
          model: 'Lexus RX 350 LUXURY',
          year: 2017,
          mileage: '39,850 km | ',
          transmission: 'Automatic |',
          fuel: 'Diesel ',
          price: '$38,775',
          imgid: 2,
     },
     {
          model: 'Toyota Highlander LE A...',
          year: 2016,
          mileage: '104,000 km | ',
          transmission: 'Automatic |',
          fuel: 'Gas ',
          price: '$23,728',
          imgid: 3,
     },
     {
          model: 'Hyundai Elantra',
          year: 2017,
          mileage: '95,000  km | ',
          transmission: 'Automatic | ',
          fuel: 'Gas',
          price: '$11,788',
          imgid: 4,
     },
     {
          model: 'Mercedes-Benz GLE-Cl...',
          year: 2016,
          mileage: '59,800 km | ',
          transmission: 'Automatic | ',
          fuel: 'Diesel ',
          price: '$38,878',
          imgid: 5,
     },

     {
          model: 'Toyota Venza AWD XLE...',
          year: 2015,
          mileage: '99,000 km | ',
          transmission: 'Automatic | ',
          fuel: 'Gas ',
          price: '$18,620 ',
          imgid: 8,
     },
     {
          model: 'Lexus RX 350 F-SPORT',
          year: 2016,
          mileage: '86,000 km | ',
          transmission: 'Automatic | ',
          fuel: 'Gas ',
          price: '$34,888',
          imgid: 7,
     },
     {
          model: 'Volkswagen Tiguan',
          year: 2019,
          mileage: '19,855 km | ',
          transmission: 'Automatic | ',
          fuel: 'Diesel ',
          price: '$34,888',
          imgid: 0,
     },
     {
          model: 'Toyota Highlander XLE',
          year: 2014,
          mileage: '69,000 km | ',
          transmission: 'Automatic | ',
          fuel: 'Gas',
          price: '$27,875',
          imgid: 1,
     },
     {
          model: 'Lexus RX 350 LUXURY',
          year: 2017,
          mileage: '39,850 km | ',
          transmission: 'Automatic | ',
          fuel: 'Diesel',
          price: '$38,775',
          imgid: 2,
     },
     {
          model: 'Toyota Highlander LE A...',
          year: 2016,
          mileage: '104,000 km | ',
          transmission: 'Automatic | ',
          fuel: 'Gas',
          price: '$23,728',
          imgid: 3,
     },
     {
          model: 'Hyundai Elantra',
          year: 2017,
          mileage: '95,000  km |',
          transmission: 'Automatic | ',
          fuel: 'Gas',
          price: '$11,788',
          imgid: 4,
     },
     {
          model: 'Mercedes-Benz GLE-Cl...',
          year: 2016,
          mileage: '59,800 km | ',
          transmission: 'Automatic | ',
          fuel: 'Diesel',
          price: '$38,878',
          imgid: 5,
     }
]

function render() {
     let car = ''
     arrCars.forEach((e, i) => {
          car = `       
          <div class="car ${e.class || ''}">
          <div class="bgimg" style="background-image: url(./assets/img/Rectangle${e.imgid}.png);";
          ">
          <span class="${e.class2 || ''}">${e.sold || ``}</span>
          </div>
          <p class="carName mt-2"> <span class="yearCar">${e.year}</span > <span class='modelCar'>${e.model}</span></p>
          <p class="info mt-1">
          <span class="mileage">${e.mileage}</span><span class="transmission">${e.transmission}</span>
          <span class="fuel">${e.fuel}</span>
          </p>
          <p class="price my-3">${e.price}</p></div>`
          sel(`.catalog`).innerHTML += car;
     })
}

function toggleSort() {
     sel('.containerSelectSort').classList.toggle('activeSort')
}

function removeSortActive() {
     sel('.containerSelectSort').classList.remove('activeSort')
}

function chengerSort() {
     let txt = sel(`.checktextNew`).innerText
     sel(`.checktextNew`).innerText = this.innerText
     this.innerText = txt;
     if (sel(`.checktextNew`).innerText.includes('ascending')) sel('.rotateContent').style = 'transform: rotate(0deg)';
     else sel('.rotateContent').style = 'transform: rotate(180deg)';
     removeSortActive()
}

sel(`.checktextNew`).addEventListener('click', toggleSort)

selAll('.sortTextHover').forEach(el => {
     el.addEventListener('click', chengerSort)
})

selAll('.mySelect').forEach(function (e) {
     e.addEventListener('click', function () {
          if (e.id === this.id) {
               e.classList.toggle('mySelectTransform')
               let arr = [...e.children]
               selAll('.contentSelectHiden').forEach(el => {
                    if (el.parentElement.id === e.id) {
                         el.addEventListener('click', function () {
                              sel(`#${e.id}Tx`).innerText = this.innerText
                         })
                    }
               })
               arr.forEach(e => {
                    e.classList.toggle('dispBlock')
               })
          }
     })
})

sel('.bordWhite').addEventListener('click', e => {
     if (regEmail.test(sel('#emailInp').value)) sel('#emailInp').style.border = `2px solid green`
     else sel('#emailInp').style.border = `2px solid red`
})


render()
