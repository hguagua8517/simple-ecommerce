import { Container, VStack, Text, SimpleGrid} from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useProductStore } from '../store/product'


const HomePage = () => {

  const {fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
 console.log(products)

  return (
   <Container maxW='container.xl' py={12}>
      <VStack spacing={8}>
        <Text fontSize={"30"} fontWeight={"bold"} textAlign="center" bgGradient="linear(to-r, #ff005a, #0a60eb)" bgClip="text" >Product Catalogue</Text>
        

        <SimpleGrid columns={{base: 1, md: 2, lg: 3}} spacing={10}>

        </SimpleGrid>
      </VStack>
   </Container>
  )
}

export default HomePage
