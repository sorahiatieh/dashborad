// apax
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

// chartjs

const ctx = document.getElementById('graph_1');
const ctx2 = document.getElementById('graph_2');
const ctx3 = document.getElementById('graph_3');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

new Chart(ctx2,{

  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S'],
    datasets:[{
      label: '# of Votedsafasdasds',
      data: [50, 20, 10, 20, 50, 40,10],
      borderWidth: 5,
      pointRadius:8,
      // pointWidth:12,
      borderColor:'rgba(255,255,255,1)',
      pointBackgroundColor:'rgba(255,255,255,1)',
      pointBorderColor:'transparent',
      fill:true,
      maxBarThickness: 1,
      backgroundColor:"transparent"
    }]
  },
  options: {
    responsive:true,
    maintainAspectRatio:false,
    plugins:{
      legend:{
        display:false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid:{
          color:'rgba(255,255,255,0.8)',
          drawBorder:false,
          drawTicks:false,
          drawOnChartArea:true
      },
      border: {
          dash: [5,5],
      },  
        ticks:{
          padding:10,
          font:{
            size:14,
            weight:400,
           
          },
          color:'rgba(255,255,255,0.8)'
        }
      },
      x:{
        grid:{
          color:'rgba(255,255,255,0.8)',
          drawBorder:false,
          drawTicks:false,
          drawOnChartArea:true,
          display:false
      },
      border: {
          dash: [5,5],
      },  
        ticks:{
          padding:10,
          font:{
            size:14,
            weight:400,
           
          },
          color:'rgba(255,255,255,0.8)'
        }
      }
    }
  }
})
new Chart(ctx3,{

  type: 'line',
  data: {
    labels: ['M', 'T', 'W', 'T', 'F', 'S'],
    datasets:[{
      label: '# of Votedsafasdasds',
      data: [50, 20, 10, 20, 50, 40,10],
      borderWidth: 5,
      pointRadius:8,
      // pointWidth:12,
      borderColor:'rgba(255,255,255,1)',
      pointBackgroundColor:'rgba(255,255,255,1)',
      pointBorderColor:'transparent',
      fill:true,
      maxBarThickness: 1,
      backgroundColor:"transparent"
    }]
  },
  options: {
    responsive:true,
    maintainAspectRatio:false,
    plugins:{
      legend:{
        display:false
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid:{
          color:'rgba(255,255,255,0.8)',
          drawBorder:false,
          drawTicks:false,
          drawOnChartArea:true
      },
      border: {
          dash: [5,5],
      },  
        ticks:{
          padding:10,
          font:{
            size:14,
            weight:400,
           
          },
          color:'rgba(255,255,255,0.8)'
        }
      },
      x:{
        grid:{
          color:'rgba(255,255,255,0.8)',
          drawBorder:false,
          drawTicks:false,
          drawOnChartArea:true,
          display:false
      },
      border: {
          dash: [5,5],
      },  
        ticks:{
          padding:10,
          font:{
            size:14,
            weight:400,
           
          },
          color:'rgba(255,255,255,0.8)'
        }
      }
    }
  }
})
