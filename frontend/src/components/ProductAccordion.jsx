import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Text, Image } from '@chakra-ui/react';

const ProductAccordion = ({ products }) => {
  return (
    <Accordion allowMultiple>
      {products.map((product, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight="bold">
                {product.name}
              </Box>
              <Text color="green.500">${product.price}</Text>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Image src={product.image} alt={product.name} boxSize="100px" objectFit="cover" mb={4} />
            <Text>{product.name} - ${product.price}</Text>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ProductAccordion;