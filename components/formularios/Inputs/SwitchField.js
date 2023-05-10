import { Box, Text, FormLabel, Input, Divider, Flex, Switch } from "@chakra-ui/react";
import { useField } from "formik";
import { memo } from "react";

export const SwitchField = memo(({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  console.log(54100, { ...props })

  return (
    <Box>
     {/*  <Divider /> */}
      <FormLabel
        paddingTop={"1rem"}
        fontWeight={"900"}
        textAlign={"left"}
        fontSize={"sm"}
      >
        <Flex gap={"0.3rem"} alignItems={"center"}>
          {label}{" "}
          {meta.touched && meta.error && (
            <Text color={"red"} fontSize={"sm"} fontWeight={"500"}>
              {meta.error}
            </Text>
          )}
        </Flex>
        <Flex w={"100%"} h={"100%"} justifyContent={"center"} py={"1rem"}>
          <Switch size={"lg"} isChecked={field.value} {...field} {...props} />
        </Flex>

      </FormLabel>
    </Box>
  );
});
