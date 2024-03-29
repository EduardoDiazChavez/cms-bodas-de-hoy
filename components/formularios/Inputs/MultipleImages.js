import { Box, Flex, FormLabel, Input, Square, Text, Image, IconButton, } from "@chakra-ui/react";
import { useField } from "formik";
import { memo, useEffect, useState } from "react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { IDGenerator } from "../../../utils/IDGenerator";

export const MultipleImages = memo(({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [image, setImage] = useState([]);

  useEffect(() => {
    const files = image.reduce((acc, item) => {
      item?.file && acc.push(item?.file)
      item?.i640 && acc.push(item?._id)
      return acc
    }, [])
    helpers.setValue(files);
  }, [image]);

  useEffect(() => {
    field.value && setImage(field.value)
  }, []);

  const handleChange = async (e) => {
    try {
      let file = e.target.files;
      const arrayOfFiles = Object.values(file);

      arrayOfFiles?.forEach((item) => {
        let reader = new FileReader();
        reader.onloadend = async () => {
          if (reader.result) {
            const nuevaImagen = {
              _id: IDGenerator(),
              file: item,
              image: reader.result,
            };
            //helpers?.setValue([...field?.value, item])
            setImage((old) => [...old, nuevaImagen]);
          }
        };

        reader.readAsDataURL(item);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = (id) => {
    setImage((old) => old.filter((item) => item?._id !== id));
  };

  return (
    <Box  bg={"white"} p={"0.5rem"} rounded={"xl"} w={"250px"} shadow={"md"} >
      <FormLabel fontWeight={"900"} textAlign={"left"} fontSize={"sm"}  p={"0.5rem"}>
        <Flex gap={"0.3rem"} alignItems={"center"} justify={"center"}  m={"0"} >
          {label}{" "}
          {meta.touched && meta.error && (
            <Text color={"red"} fontSize={"sm"} fontWeight={"500"}>
              {meta.error}
            </Text>
          )}
        </Flex>
      </FormLabel>

      <Flex
        alignItems={"center"}
        justify={"center"}
        w={"100%"}
        border={"2px dotted"}
        borderColor={"gray.300"}
        rounded={"xl"}
        color={"gray.400"}
        pos={"relative"}
        p={"2rem"}
        gap={"2rem"}
        flexWrap={"wrap"}
      >
        <FormLabel m={0}>
          <Square
            shadow={"md"}
            h={"8rem"}
            w={"8rem"}
            rounded={"lg"}
            border={"1px solid"}
            borderColor={"gray.100"}
            cursor={"pointer"}
          >
            <AddIcon />
          </Square>
          <Input
            type="file"
            display={"none"}
            accept={"image/*"}
            multiple
            onChange={handleChange}
          />
        </FormLabel>
        {image?.map((item, idx) => {
          if (item?.image) {
            return (
              <Square
                key={idx}
                shadow={"md"}
                h={"8rem"}
                w={"8rem"}
                rounded={"lg"}
                border={"1px solid"}
                borderColor={"gray.100"}
                pos={"relative"}
              >
                <Image
                  src={item?.image}
                  objectFit={"contain"}
                  pos={"absolute"}
                  h={"100%"}
                  w={"100%"}
                />
                <IconButton
                  onClick={() => handleRemove(item?._id)}
                  size={"sm"}
                  pos={"absolute"}
                  bottom={"2"}
                  right={"2"}
                  icon={<DeleteIcon />}
                />
              </Square>
            )
          }
          if (item?.i800) {
            return (
              <Square
                key={idx}
                shadow={"md"}
                h={"8rem"}
                w={"8rem"}
                rounded={"lg"}
                border={"1px solid"}
                borderColor={"gray.100"}
                pos={"relative"}
              >
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_URL}${item?.i640}`}
                  objectFit={"contain"}
                  pos={"absolute"}
                  h={"100%"}
                  w={"100%"}
                />
                <IconButton
                  onClick={() => handleRemove(item?._id)}
                  size={"sm"}
                  pos={"absolute"}
                  bottom={"2"}
                  right={"2"}
                  icon={<DeleteIcon />}
                />
              </Square>
            )
          }
        })}
      </Flex>
    </Box>
  );
});
