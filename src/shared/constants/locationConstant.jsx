export const SANTIAGO = { lat: -33.43924130839201, lng: -70.67259081093725 }

export const SANMIGUEL = { lat: -33.488603129343, lng: -70.65116927314544 }

export const COSTANERA = { lat: -33.41773378276727, lng: -70.60642228821176 }

export const CONCHALI = { lat: -33.395737458596706, lng: -70.68618227594405 }

export const randomLocation = () => {
  let initial = parseInt(getRandomArbitrary(0, lugares.length))
  let x = getRandomArbitrary(0, lugares.length)
  const locations = []
  for (let count = 0; count < 10; count++) {
    x = parseInt(getRandomArbitrary(0, lugares.length))
    let values = [lugares[initial], lugares[x]]
    locations.push(values)
    initial = x
  }
  return locations

}

const getRandomArbitrary = (min, max) => {
  return Math.random() * (max - min) + min;
}

const lugares = [
  'duoc, santiago',
  'utem, santiago',
  'franklin, santiago',
  'san miguel, santiago',
  'usach, santiago',
  'aeropuerto de santiago, santiago',
  'costanera center, santiago',
  'cerro san cristobal, santiago',
  'cerro santa lucia, santiago',
  'parque bicentenario, santiago',
  'parque araucano, santiago',
  'multicentro alonso ovalle, santiago',
  'mall vivo el centro, santiago',
  'mall vivo imperio, santiago',
  'mall espacio m, santiago',
  'mallplaza alameda, santiago',
  'mall sport, santiago',
  'parque arauco, santiago',
  'centro comercial santiago centro, santiago',
  'mall vivo los trapenses, santiago',
  'mall plaza egaña, santiago',
  'mall plaza el sol, santiago',
  'galeria santiago centro, santiago',
  'mall recoleta center, santiago',
  'patio centro, santiago',
  'metro vespucio norte, santiago',
  'metro zapadores, santiago',
  'metro dorsal, santiago',
  'metro einstein, santiago',
  'metro cementerios, santiago',
  'metro franklin, santiago',
  'metro el llano, santiago',
  'metro san miguel, santiago',
  'metro lo vial, santiago',
  'metro departamental, santiago',
  'metro ciudad del niño, santiago',
  'metro lo ovalle, santiago',
  'metro el parron, santiago',
  'metro la cisterna, santiago',
  'mall paseo las palmas, santiago',
  'palacio de la moneda, santiago',
  'republica, santiago',

]
