import { Avatar, Button, Grid, GridItem } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { InputField } from "../../components/formularios/Inputs/InputField";
import { InputNumberField } from "../../components/formularios/Inputs/InputNumberField";
import { TextareaField } from "../../components/formularios/Inputs/TextareaField";
import { UploadImage } from "../../components/formularios/Inputs/UploadImage";
import dynamic from "next/dynamic";
const CKEditorComponent = dynamic(
  () =>
    import("../../components/formularios/Inputs/CKEditor").then(
      (mod) => mod.CKEditorComponent
    ),
  { ssr: false }
);
import { PasswordInput } from "../../components/formularios/Inputs/PasswordInput";
import { forwardRef, useEffect, useState } from "react";
import { URLInputField } from "../../components/formularios/Inputs/URLInputField";
import { CounstriesSelectField } from "../../components/formularios/Inputs/CountriesSelectField";
import * as Yup from "yup";
import Relationship from "../../components/formularios/Inputs/Relationship";
import { FieldArrayField } from "../../components/formularios/Inputs/FieldArrayField";
import { MultipleImages } from "../../components/formularios/Inputs/MultipleImages";
import QuestionInputsForBusiness from "../../components/formularios/Inputs/QuestionInputsForBusiness";
import { SwitchField } from "../../components/formularios/Inputs/SwitchField";
import GoogleMapsField from "../../components/formularios/Inputs/GoogleMapsField";
import { AuthContextProvider } from "../../context/AuthContext";
import { SeoDev } from "./Inputs/SeoDev";
import { AlertDesarrollo } from "../modals/AlertDesarrollo";
import { OptionsForm } from "./OptionsForm";
import { Seudonimo } from "../Seudonimo/Seudonimo";
import { EdicionDeSeudonimo } from "../modals/EditSeudonimo";
import { SeudonimoList } from "../Seudonimo/SeudonimoList";
import { InfoForm } from "./InfoForm";

export const FormDinamical = forwardRef(
  ({ schema: state, initialValues, columns, onSubmit, Information }, ref) => {
    const { user } = AuthContextProvider()
    const [schema, setSchema] = useState(null);
    const [modal, setModal] = useState(false)
    const [listDown, setListDown] = useState(false)
    const [foundList, setFoundList] = useState("")
    const [alertDev, setAlertDev] = useState(false)

    const reduceInitialValues = Object?.entries(initialValues ?? {}).reduce((acc, item) => {
      if (item[1] !== null) {
        //@ts-ignore
        acc[item[0]] = item[1]
      }
      return acc
    }, {})

    const initialValuesCreated = schema?.reduce((acc, { type, accessor }) => {
      switch (type) {
        case "string":
          acc[accessor] = "";
          break;
        case "stringL":
          acc[accessor] = "";
          break;
        case "email":
          acc[accessor] = "";
          break;
        case "country":
          acc[accessor] = "";
          break;
        case "ckeditor":
          acc[accessor] = null;
          break;
        case "image":
          acc[accessor] = null;
          break;
        case "imageMultiple":
          acc[accessor] = "";
          break;
        default:
          if (type) acc[accessor] = undefined
          break;
      }
      return acc;
    }, {});

    const ValidationOptions = {
      ckeditor: Yup.string().nullable(),
      string: Yup.string().nullable(),
      //image: Yup.string().nullable(),
      stringL: Yup.string().nullable(),
      email: Yup.string().email().nullable(),
      url: Yup.string().matches(
        /^[a-zA-Z0-9][a-zA-Z0-9-_:/?#=]{0,61}[a-zA-Z0-9]{0,1}\.([a-zA-Z]{2,6}|[a-zA-Z0-9-]{1,30}\.[a-zA-Z]{2,3})/,
        "URL invalida"
      ).nullable(),
      country: Yup.string().nullable(),
      number: Yup.number().nullable(),
      relationship: Yup.array().of(Yup.string()).nullable(),
      questions: Yup.array().of(Yup.object().shape({
        _id: Yup.string()
      })).nullable(),
      //imageMultiple: Yup.array().of(Yup.string()).nullable(),
      textarea: Yup.string().nullable(),
    };

    const dynamicalValidationSchema = schema?.reduce((acc, field) => {
      if (ValidationOptions[field.type]) {
        if (field.required) {
          acc[field.accessor] =
            ValidationOptions[field.type]?.required(`requerido`);
        } else {
          acc[field.accessor] = ValidationOptions[field.type];
        }
      }


      return acc;
    }, {});

    const validationSchema = Yup.object().shape(dynamicalValidationSchema);

    useEffect(() => {
      setSchema(state);
    }, [state]);

    const SeudonimoListEjm = [
      {
        icon: <Avatar h={"35px"} w={"35px"} />,
        nombre: user.displayName
      },
      {
        icon: <Avatar h={"35px"} w={"35px"} />,
        nombre: "pedro"
      },
      {
        icon: <Avatar h={"35px"} w={"35px"} />,
        nombre: "maria"
      },
      {
        icon: <Avatar h={"35px"} w={"35px"} />,
        nombre: "jose"
      },
      {
        icon: <Avatar h={"35px"} w={"35px"} />,
        nombre: "Antonio "
      }
    ]

    const found = SeudonimoListEjm.find(element => element.nombre === foundList)

    console.log(found)
    return (
      <>
        {modal ? (
          <EdicionDeSeudonimo modal={modal} setModal={setModal} />
        ) : null}
        {alertDev ? (
          <AlertDesarrollo alertDev={alertDev} setAlertDev={setAlertDev} />
        ) : null}

        {initialValuesCreated && (
          <Formik
            onSubmit={onSubmit}
            initialValues={{ ...initialValuesCreated, ...reduceInitialValues }}
            validationSchema={validationSchema}
            innerRef={ref}
          >
            {({ values, setValues }) => {
              return (
                <Form >
                  <Grid templateColumns={columns} gap={"1rem"} >

                    {/* columna izquierda */}
                    <GridItem bg={"white"} p={"1rem"} shadow={"sm"} rounded={"xl"} colSpan={3} >
                      {schema &&
                        schema?.map((item, idx) => {
                          const valir = !item?.roles ? true : item?.roles?.some(role => user?.role.includes(role))
                          switch (valir && item.type) {
                            case "string":
                              return (
                                <GridItem colSpan={[1, , , 3]} key={idx}>
                                  <InputField
                                    key={idx}
                                    name={item.accessor}
                                    label={item.Header}
                                  />
                                </GridItem>
                              );
                              break;
                            case "stringM":
                              return (
                                <GridItem colSpan={[1, , , 2]} key={idx}>
                                  <InputField
                                    name={item.accessor}
                                    label={item.Header}
                                  />
                                </GridItem>
                              );
                            case "stringL":
                              return (
                                <GridItem colSpan={[1, , , 3]} key={idx}>
                                  <InputField
                                    name={item.accessor}
                                    label={item.Header}
                                  />
                                </GridItem>
                              );
                              break;
                            case "switch":
                              return (
                                <SwitchField
                                  key={idx}
                                  name={item.accessor}
                                  label={item.Header}
                                />
                              );
                              break;
                            case "slug":
                              return (
                                <div className="hidden">
                                  <GridItem colSpan={[1, , , 2]} key={idx}>
                                    <InputField
                                      name={item.accessor}
                                      label={item.Header}
                                      disabled={true}
                                    />
                                  </GridItem>
                                </div>

                              );
                              break;
                            case "number":
                              return (
                                <InputNumberField
                                  key={idx}
                                  name={item.accessor}
                                  label={item.Header}
                                />
                              );
                              break;
                            case "email":
                              return (
                                <GridItem colSpan={[1, , , 3]} key={idx}>
                                  <InputField
                                    name={item.accessor}
                                    label={item.Header}
                                    type={"email"}
                                  />
                                </GridItem>
                              );
                              break;
                            case "password":
                              return (
                                <PasswordInput
                                  key={idx}
                                  name={item.accessor}
                                  label={item.Header}
                                />
                              );
                              break;
                            case "textarea":
                              return (
                                <GridItem colSpan={[1, , , 3]} key={idx}>
                                  <TextareaField
                                    name={item.accessor}
                                    label={item.Header}
                                  />
                                </GridItem>
                              );
                              break;
                            case "ckeditor":
                              return (
                                <GridItem
                                  key={idx}
                                  colSpan={[1, , , 3]}
                                  fontSize={"sm"}
                                >
                                  <CKEditorComponent
                                    name={item.accessor}
                                    label={item.Header}
                                  />
                                </GridItem>
                              );
                              break;
                            case "url":
                              return (
                                <GridItem colSpan={[1, , , 3]} key={idx}>
                                  <URLInputField
                                    name={item.accessor}
                                    label={item.Header}
                                  />
                                </GridItem>
                              );
                              break;
                            case "relationship":
                              return (
                                <GridItem colSpan={[1, , , 3]} key={idx}>
                                  <Relationship
                                    name={item.accessor}
                                    label={item.Header}
                                    tabList={item.tabList}
                                  />
                                </GridItem>
                              );
                              break;
                            case "questions":
                              return (
                                <GridItem colSpan={[1, , , 3]} key={idx}>
                                  <QuestionInputsForBusiness
                                    name={item.accessor}
                                    label={item.Header}
                                    values={values}
                                    setValues={setValues}
                                  />
                                </GridItem>
                              );
                              break;
                            case "maps":
                              return (
                                <GridItem colSpan={[1, , , 3]} key={idx}>
                                  <GoogleMapsField
                                    name={item.accessor}
                                    label={item.Header}
                                  />
                                </GridItem>
                              );
                              break;
                            case "country":
                              return (
                                <GridItem colSpan={[1, , , 1]} key={idx}>
                                  <CounstriesSelectField
                                    name={item.accessor}
                                    label={item.Header}
                                  />
                                </GridItem>
                              );
                              break;

                            case "desarrollo":
                              return (
                                <div onClick={()=>setAlertDev(!alertDev)}>
                                  <GridItem colSpan={[1, , , 1]} key={idx}>
                                    <SeoDev />
                                  </GridItem>
                                </div>
                              );
                            default:
                              break;
                          }
                        })}
                    </GridItem>

                    {/* columna derecha */}
                    <GridItem className="space-y-2 w-max relative" colSpan={1} >
                      <OptionsForm alertDev={alertDev} setAlertDev={setAlertDev} schema={schema} user={user}/>
                      <Seudonimo modal={modal} setModal={setModal} listDown={listDown} setListDown={setListDown} found={found} user={user} />
                      <div className={`${listDown ? "block" : "hidden"}  absolute  right-[1.5rem] z-30`}>
                        <SeudonimoList list={SeudonimoListEjm} listDown={listDown} setListDown={setListDown} foundList={foundList} setFoundList={setFoundList} />
                      </div>
                      {schema &&
                        schema?.map((item, idx) => {
                          const valir = !item?.roles ? true : item?.roles?.some(role => user?.role.includes(role))
                          switch (valir && item.type) {
                            case "image":
                              return (
                                <UploadImage
                                  key={idx}
                                  name={item.accessor}
                                  label={item.Header}
                                  typeFile={item.typeFile}
                                />
                              );
                              break
                            case "imageMultiple":
                              return (
                                <MultipleImages
                                  name={item.accessor}
                                  label={item.Header}
                                />
                              );
                              break;
                            case "fieldArray":
                              return (
                                <FieldArrayField
                                  key={idx}
                                  name={item.accessor}
                                  label={item.Header}
                                  schema={item.schema}
                                />
                              );
                              break;
                          }
                        })
                      }
                      <InfoForm Information={Information} />
                    </GridItem>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        )}
      </>
    );
  }
);

