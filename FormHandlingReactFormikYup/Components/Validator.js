import * as yup from 'yup'

export const registerValidator = yup.object({
    fname:yup.string().required("It can't be empty").min(3,'Atleast 3 characters required'),
    email:yup.string().required("It can't be empty"),
    phone:yup.number().required("It can't be empty").min(10,"number must contain atleast 10 digits"),
    pass:yup.string().required("It can't be empty"),
    Cpass:yup.string().required("It can't be empty").oneOf([yup.ref("pass")],"confirm password must be same as password")
})

export const loginValidator = yup.object({
    email:yup.string().required("It can't be empty"),
    phone:yup.number().required("It can't be empty").min(10,"number must contain atleast 10 digits"),
    pass:yup.string().required("It can't be empty"),
})