import MD5 from 'md5'

export const generateDefault16Digital = () => {
  let str = ''
  while (str.length < 16) {
    str += Math.floor(Math.random()*10)
  }
  return str
}

export const md5FormatStr = (input) => {
  const saltStr = generateDefault16Digital()
  const str = MD5(input+saltStr)
  const restArr = [48]
  const strArr = Array.from(str)
  const saltArr = Array.from(saltStr)
  for(let i=0;i<48;i+=3) {
    restArr[i] = strArr[Math.round(i/3)*2]
    restArr[i+1] = saltArr[Math.round(i/3)]
    restArr[i+2] = strArr[Math.round(i/3)*2 +1]
  }
  return restArr.join('')
}
