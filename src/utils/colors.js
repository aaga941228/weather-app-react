const color = (temp) => {
  if (temp >= 38) return '#CB2C2A'
  if (temp >= 30 && temp < 38) return '#FD5812'
  if (temp >= 26 && temp < 30) return '#fd8237'
  if (temp >= 20 && temp < 26) return '#FF8400'
  if (temp >= 10 && temp < 20) return '#f7c800'
  if (temp >= 0 && temp < 10) return '#cddd19'
  if (temp < 0) return '#3dbeef'
}

export default color