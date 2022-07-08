import { Box, Button, ButtonGroup, Flex, HStack, IconButton, Input, SkeletonText } from '@chakra-ui/react'
import { Autocomplete, DirectionsRenderer, GoogleMap, Marker, useLoadScript } from '@react-google-maps/api'
import { useEffect, useRef, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { CONCHALI, COSTANERA, randomLocation, SANMIGUEL, SANTIAGO } from '../shared/constants/locationConstant'

const MapCompleteComponent = () => {

  const center = { lat: -33.43924130839201, lng: -70.67259081093725 }
  const santiago = SANTIAGO
  const sanMiguel = SANMIGUEL
  const costanera = COSTANERA
  
  const [locations, setLocations] = useState([])

  useEffect(() => {
    setLocations(randomLocation())
  }, [])


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    libraries: ['places']
  })

  const [map, setMap] = useState(/** @type google.maps.Map */(null))


  const [directionsResponse, setDirectionsResponse] = useState(null)

  const originRef = useRef()
  const destiantionRef = useRef()

  if (!isLoaded) {
    return <SkeletonText />
  }

  async function calculateRouteManual() {
    if (originRef.current.value === '' || destiantionRef.current.value === '') {
      return
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
  }

  async function calculateRoute() {

    if (!locations) return

    locations.map(x => calculate(x[0], x[1]))
  }

  const calculate = async (x, y) => {
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService()
    const results = await directionsService.route({
      origin: x,
      destination: y,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    })
    setDirectionsResponse(results)
  }

  function clearRoute() {
    setDirectionsResponse(null)
    originRef.current.value = ''
    destiantionRef.current.value = ''
  }

  return (
    <>
      <Flex
        position='relative'
        flexDirection='column'
        alignItems='flex-start'
        h='45rem'
        w='100rem'
      >

        <Box position='absolute' left={160} top={170} h='100%' w='100%'>
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: '100%', height: '100%' }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={map => setMap(map)}
          >
            <Marker position={santiago} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
            <Marker position={sanMiguel} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
            <Marker position={costanera} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </Box>


        <Box
          p={4}
          borderRadius='lg'
          ml={550}
          mt={6}
          bgColor='rgb(255, 249, 249)'
          shadow='base'
          minW='container.md'
          zIndex='1'
        >
          <HStack spacing={2} justifyContent='space-between'>
            <Box flexGrow={1}>
              <Autocomplete onPlaceSelected={(place) => {
                console.log(place);
              }}>
                <Input type='text' placeholder='Origen' ref={originRef} />
              </Autocomplete>
            </Box>
            <Box flexGrow={1}>
              <Autocomplete>
                <Input
                  type='text'
                  placeholder='Destino'
                  ref={destiantionRef}
                />
              </Autocomplete>
            </Box>

            <ButtonGroup>
              <Button bgColor='rgb(176,217,0)' type='submit' onClick={calculateRouteManual}>
                Calcular ruta
              </Button>
              <Button bgColor='rgb(176,217,0)' type='submit' onClick={calculateRoute}>
                Calcular ruta aleatoria
              </Button>
              <IconButton
                aria-label='center back'
                bgColor='rgb(176,217,0)'
                icon={<FaTimes />}
                onClick={clearRoute}
              />
            </ButtonGroup>
          </HStack>
        </Box>

      </Flex>

    </>
  )
}

export default MapCompleteComponent