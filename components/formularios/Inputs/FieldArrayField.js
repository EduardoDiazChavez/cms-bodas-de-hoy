import { CheckIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Text,
  FormLabel,
  Input,
  Button,
  Flex,
  List,
  ListIcon,
  ListItem,
  IconButton,
  Divider,
} from "@chakra-ui/react";
import { FieldArray, useField } from "formik";
import { memo } from "react";
import { useState } from "react";

export const FieldArrayField = memo(({ label, schema, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const [value, setValue] = useState("");

  const schemas = {
    string: value,
    object: { title: value }
  }

  return (
    <Box>
      <FieldArray
        name={props.name}
        render={(arrayHelpers) => (
          <>
            <Divider />
            <FormLabel paddingTop={"1rem"} fontWeight={"900"} textAlign={"left"} fontSize={"sm"}>{label}</FormLabel>
            <Flex gap={"0.5rem"}>
              <Input
                size={"sm"}
                variant={"filled"}
                fontSize={"sm"}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button
                size={"sm"}
                onClick={() => arrayHelpers.push(schemas[schema])}
              >
                Crear
              </Button>
            </Flex>
            <List spacing={3} py={"0.5rem"} columnGap={"2rem"} display={"grid"} gridTemplateColumns={"repeat(2, 1fr)"}>
              {field.value &&
                field?.value?.map((item, idx) => {

                  if (typeof item === "string") {
                    return (
                      item && (
                        <ListItem
                          textTransform={"capitalize"}
                          fontSize={"sm"}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"space-between"}
                        >
                          <ListIcon key={idx} as={CheckIcon} color="green.500" />
                          {item}
                          <IconButton size={"sm"} onClick={() => {
                            const indice = arrayHelpers.form.values[props.name].findIndex(ele => item === ele)
                            arrayHelpers.remove(indice)
                          }}><CloseIcon /></IconButton>
                        </ListItem>
                      )
                    )
                  }

                  if (item instanceof Object) {
                    return (
                      <>
                        {item.title && (
                          <ListItem
                            textTransform={"capitalize"}
                            fontSize={"sm"}
                            display={"flex"}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                          >
                            <ListIcon key={idx} as={CheckIcon} color="green.500" />
                            {item.title}
                            <IconButton size={"sm"} onClick={() => {
                              const indice = arrayHelpers.form.values[props.name].findIndex(ele => item === ele)
                              arrayHelpers.remove(indice)
                            }}><CloseIcon /></IconButton>
                          </ListItem>
                        )}
                      </>
                    )
                  }


                })}
            </List>
            {meta.touched && meta.error && (
              <Text color={"red"} fontSize={"sm"}>
                {meta.error}
              </Text>
            )}
          </>
        )}
      />
    </Box>
  );
})
