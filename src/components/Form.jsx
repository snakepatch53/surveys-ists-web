import { faHandshake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, QuestionRadio, QuestionSelect, QuestionText } from "./Question";
import { Formik } from "formik";

import AnimateContent from "./AnimateContent";
import useLocationSelects from "../hooks/useLocationSelects";

import useMoocks from "../hooks/useMocks";
import useForm from "../hooks/useForm";
import ModalSuccess from "./ModalSuccess";

export default function Form() {
    const {
        provincias: _provincias,
        cantones,
        parroquias,
        handleChangeProvincia,
        handleChangeCanton,
    } = useLocationSelects();

    const { sexos, dificultades, etnias, estados_civil } = useMoocks();

    const { schema, handleSubmit, load, success } = useForm();

    return (
        <AnimateContent className="flex flex-col items-center justify-center mb-10 px-[--pdd]">
            <Title />
            <Formik
                initialValues={{
                    name: "",
                    dni: "",
                    I01: "",
                    I02: "",
                    I03: "",
                    P02: "",
                    P03: "",
                    P0701: "",
                    P0702: "",
                    P0703: "",
                    P0704: "",
                    P0705: "",
                    P0706: "",
                    P11R: "",
                    P31: "",
                    P3203: "",
                }}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {({ handleSubmit, values, errors, touched, handleChange, handleBlur }) => (
                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-2 mt-10 w-full max-w-[--max-w] bg-black/10 py-10 px-[--pdd] rounded-lg border border-black/20 border-t-4 border-t-primary shadow-xl"
                    >
                        <QuestionText
                            error={errors.dni}
                            touched={touched.dni}
                            name="dni"
                            label="¿Cuál es tu numero de cédula?"
                            placeholder="Escribe tu numero de cedula aquí"
                            value={values.dni}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <QuestionText
                            error={errors.name}
                            touched={touched.name}
                            name="name"
                            label="¿Cómo te llamas?"
                            placeholder="Escribe tu nombre aquí"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <QuestionText
                            error={errors.P03}
                            touched={touched.P03}
                            name="P03"
                            label="¿Qué edad tienes?"
                            placeholder="Escribe tu edad aquí"
                            value={values.P03}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            as="number"
                        />
                        <QuestionText
                            error={errors.P3203}
                            touched={touched.P3203}
                            name="P3203"
                            label="¿Cuántos hijos tienes?"
                            placeholder="Escibe el número de hijos que tienes"
                            value={values.P3203}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            as="number"
                        />
                        <QuestionSelect
                            error={errors.I01}
                            touched={touched.I01}
                            name="I01"
                            label="¿A qué provincia perteneces?"
                            placeholder="Selecciona tu provincia"
                            options={_provincias}
                            value={values.I01}
                            onChange={handleChangeProvincia(handleChange)}
                            onBlur={handleBlur}
                        />
                        <QuestionSelect
                            error={errors.I02}
                            touched={touched.I02}
                            name="I02"
                            label="¿A qué cantón perteneces?"
                            placeholder="Selecciona tu cantón"
                            options={cantones}
                            disabled={!cantones.length}
                            value={values.I02}
                            onChange={handleChangeCanton(handleChange)}
                            onBlur={handleBlur}
                        />
                        <QuestionSelect
                            error={errors.I03}
                            touched={touched.I03}
                            name="I03"
                            label="¿A qué parroquia perteneces?"
                            placeholder="Selecciona tu parroquia"
                            options={parroquias}
                            disabled={!parroquias.length}
                            value={values.I03}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <QuestionRadio
                            error={errors.P02}
                            touched={touched.P02}
                            name="P02"
                            label="¿Cuál es tu género?"
                            options={sexos}
                            value={values.P02}
                            onChange={handleChange}
                            onBlur={handleBlur}
                        />
                        <QuestionRadio
                            error={errors.P0701}
                            touched={touched.P0701}
                            name="P0701"
                            label="¿Tiene dificultad permanente para caminar, subir o bajar gradas/escaleras?"
                            options={dificultades}
                            value={values.P0701}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            classWrapperSelect="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                        />
                        <QuestionRadio
                            error={errors.P0702}
                            touched={touched.P0702}
                            name="P0702"
                            label="¿Tiene dificultad permanente para bañarse, vestirse o alimentarse por sí mismo?"
                            options={dificultades}
                            value={values.P0702}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            classWrapperSelect="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                        />
                        <QuestionRadio
                            error={errors.P0703}
                            touched={touched.P0703}
                            name="P0703"
                            label="¿Tiene dificultad permanente para hablar, comunicarse o conversar?"
                            options={dificultades}
                            value={values.P0703}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            classWrapperSelect="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                        />
                        <QuestionRadio
                            error={errors.P0704}
                            touched={touched.P0704}
                            name="P0704"
                            label="¿Tiene dificultad permanente para oír, aun usando aparato auditivo?"
                            options={dificultades}
                            value={values.P0704}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            classWrapperSelect="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                        />
                        <QuestionRadio
                            error={errors.P0705}
                            touched={touched.P0705}
                            name="P0705"
                            label="¿Tiene dificultad permanente para ver, aun usando lentes?"
                            options={dificultades}
                            value={values.P0705}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            classWrapperSelect="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                        />
                        <QuestionRadio
                            error={errors.P0706}
                            touched={touched.P0706}
                            name="P0706"
                            label="¿Tiene dificultad permanente para recordar, entender o concentrase?"
                            options={dificultades}
                            value={values.P0706}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            classWrapperSelect="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                        />
                        <QuestionRadio
                            error={errors.P11R}
                            touched={touched.P11R}
                            name="P11R"
                            label="¿Cual es tu etnia?"
                            options={etnias}
                            value={values.P11R}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            classWrapperSelect="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6"
                        />
                        <QuestionRadio
                            error={errors.P31}
                            touched={touched.P31}
                            name="P31"
                            label="¿Cual es tu estado conyugal?"
                            options={estados_civil}
                            value={values.P31}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            classWrapperSelect="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6"
                        />
                        <Button load={load} />
                    </form>
                )}
            </Formik>
            {success && <ModalSuccess />}
        </AnimateContent>
    );
}

function Title() {
    return (
        <div className="flex flex-col justify-center items-center mt-10 max-w-[800px]">
            <FontAwesomeIcon icon={faHandshake} size="2x" className="text-primary" />
            <h2 className="text-center text-xl font-title text-primary text-balance">
                Por favor, responde con sinceridad, tus respuestas son muy importantes para
                nosotros.
            </h2>
        </div>
    );
}
