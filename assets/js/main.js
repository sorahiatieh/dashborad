


let burger_menu = document.querySelector('.burger_menu')
let sidbar = document.querySelector('aside')
let bg_cover = document.querySelector('.bg_cover')
let btn_notification = document.querySelector('#btn_notification')
let list_notification = document.querySelector('#list_notification')
let full_name_user = document.querySelector('.full_name_user')
let list_account_user  = document.querySelector('.list_account_user ')
let ligthModeBtn =  document.querySelector('#ligthModeBtn')
let darkModeBtn =  document.querySelector('#darkModeBtn')

burger_menu.addEventListener('click', e => {
  sidbar.classList.add('d_block')
  bg_cover.classList.add('d_block')
})
bg_cover.addEventListener('click', e => {
  sidbar.classList.remove('d_block')
  bg_cover.classList.remove('d_block')
})

btn_notification.addEventListener('click',event =>{
  if(list_notification.classList.contains('active_notif')){
    list_notification.classList.remove('active_notif')
  }
  else{
    list_notification.classList.add('active_notif')

  }
})

full_name_user.addEventListener('click',e =>{

  if(list_account_user.classList.contains('active_account')){
    list_account_user.classList.remove('active_account')
  }
  else{
    list_account_user.classList.add('active_account')
  }
})





let dateSeries =[30,25,27, 40, 35, 50, 49, 60,25, 70, 91, 100,105,85,125,110,70, 35,12, 14, 15,50]
let dateCategories = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2001,2002,2007,2010,2012,2017,2018,2019,2020,2021,2024]


var options = {
  chart: {
    type: 'area',
    fontFamily: 'Raleway',
    height: 350,
  },
  series: [{
    name: 'فروش',
    data: dateSeries
  }],
  xaxis: {
    categories: dateCategories,
    axisBorder: {
      show: true,
      color: '#31353F',
      height: 1,
      width: '100%',
      offsetX: 0,
      offsetY: 0
    },
    axisTicks: {
      show: false,
    },
    labels:{
      style:{
        colors: '353E4D'
      }
    }
    
  },
  yaxis:{
    labels:{
      style:{
        colors: '#353E4D'
      }
    }
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#3A6FF8'],
  fill: {
    colors: ['#3A6FF8'],

    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.1,
      opacityTo: 0.9,
      stops: [0, 100]
    }
  },
}

var chart = new ApexCharts(document.querySelector("#chart_bitcoin_btc"), options);

chart.render();


let btnSeconde = document.querySelector('#seconde_btn')
let btnOne = document.querySelector('#one_btn')

btnSeconde?.addEventListener('click', function (e) {

  console.log('click')
  chart.updateSeries([{
    name: 'test',
    data: [740, 460, 35, 50, 49, 60, 70, 91, 125, 12, 14, 15]
  }])

})

btnOne?.addEventListener('click', function (e) {

  console.log('click')
  chart.updateSeries([{
    name: 'فروش',
    data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 12, 14, 15]
  }])

})

const setTemeMode = (themeMode) =>{
  document.documentElement.setAttribute('data-theme',themeMode)
  ligthModeBtn.classList.toggle('active_darkmode', themeMode === 'light')
  darkModeBtn.classList.toggle('active_darkmode', themeMode === 'dark')
  localStorage.setItem('themeMode',themeMode)
  let labelsColor = themeMode === 'dark'? '#9E9E9E': '#353E4D'
  chart.updateOptions({
    yaxis:{
      labels:{
        style:{
          colors: labelsColor
        }
      }
    },
    xaxis: {
      categories: dateCategories,
      labels:{
        style:{
          colors: labelsColor
        }
      }
      
    },
  })
}

ligthModeBtn.addEventListener('click', () => setTemeMode('light'))

darkModeBtn.addEventListener('click',() => setTemeMode('dark'))

let saveThemeMode = localStorage.getItem('themeMode')

setTemeMode(saveThemeMode || 'light')