import * as Yup from "yup";

export const initialValues = () => {
  return {
    email: "",
    password: "",
    confirPass: "",
  };
};

export const validationSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email("Correo inválido")
      .required("El correo es obligatorio"),
    password: Yup.string().required("La contraseña es obligatoria"),
    confirPass: Yup.string()
    .required("Confirmar la contraseña es obligatorio")
    .oneOf([Yup.ref("password")], "¡Las contraseñas no conciden!"),
  });
};
