import geoJSON from 'lib/map/js/china.js'
const area = Object.keys(geoJSON)
const regions = area.map(item => ({ name: item }))
const optionRegion = (region = 'china', normalData = [], faultData = []) => {
  return {
    backgroundColor: '#ccc',
    tooltip: {
      trigger: 'item',
      formatter: params => {
        const { name, value } = params
        //   return `${name} <br /> 主要故障:${value[3]}  <br /> 次要故障:${value[4]}`
        return `${name}`
      }
    },
    geo: {
      map: region,
      roam: true,
      regions,
      zoom: 1.2,
      selectedMode: 'single',
      scaleLimit: {
        min: 1,
        max: 10
      },
      label: false,
      left: 'center',
      top: 'center',
      itemStyle: {
        areaColor: '#323c48',
        borderColor: '#eee'
      }
    },
    series: [
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        data: normalData,
        hoverAnimation: true,
        itemStyle: {
          color: '#33FF00',
          shadowBlur: 10,
          shadowColor: '#333'
        }
      },
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: faultData,
        showEffectOn: 'emphasis',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        effectType: 'ripple',
        itemStyle: {
          color: 'red',
          shadowBlur: 10,
          shadowColor: '#333'
        },
        zlevel: 1
      }
    ]
  }
}

export { optionRegion }
