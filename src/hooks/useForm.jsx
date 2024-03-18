import * as Yup from "yup";

import { isCedula } from "../lib/validations";
import { useState } from "react";
import { storage } from "../services/surveys";

export default function useForm() {
    const [load, setLoad] = useState(false);
    const [success, setSuccess] = useState(false);

    const schema = Yup.object().shape({
        name: Yup.string().required("El Nombre es requerido!"),
        dni: Yup.string()
            .required("El DNI es requerido!")
            .test("is-cedula", "El DNI no es válido!", isCedula),
        I01: Yup.string().required("La Provincia es requerida!"),
        I02: Yup.string().required("El Canton es requerido!"),
        I03: Yup.string().required("La Parroquia es requerida!"),
        P02: Yup.string().required("El Género es requerido!"),
        P03: Yup.number("Este campo es numérico")
            .integer("El número debe ser un entero")
            .required("La Edad es requerida!"),
        P0701: Yup.string().required("Selecciona el nivel de dificultad!"),
        P0702: Yup.string().required("Selecciona el nivel de dificultad!"),
        P0703: Yup.string().required("Selecciona el nivel de dificultad!"),
        P0704: Yup.string().required("Selecciona el nivel de dificultad!"),
        P0705: Yup.string().required("Selecciona el nivel de dificultad!"),
        P0706: Yup.string().required("Selecciona el nivel de dificultad!"),
        P11R: Yup.string().required("Selecciona tu etnia!"),
        P31: Yup.string().required("Selecciona tu estado conyugal!"),
        P3203: Yup.number("Este campo es numérico")
            .integer("El número debe ser un entero")
            .required("Ingresa el número de hijos que tienes o pon 0!"),
    });

    const handleSubmit = async (values) => {
        setLoad(true);
        storage({
            data: {
                ...values,
                P03: "" + values.P03,
                P3203: "" + values.P3203,
            },
        }).then((res) => {
            console.log(res);
            setLoad(false);
            setSuccess(true);
        });
    };

    return { schema, handleSubmit, load, success };
}
