import * as Yup from "yup";

const purchaseSchema = Yup.object({
     name: Yup.string()
          .min(2, 'Your name is too short.')
          .max(70, 'Your name is too long.')
          .required('Name is required.'),
     surname: Yup.string()
          .min(2, 'Your surname is too short.')
          .max(100, 'Your surname too long.')
          .required('Surname is required.'),
     age: Yup.number()
          .min(10, 'Age is too low.')
          .max(200, 'Age must be a maximum of 200 years.')
          .required('Age is required.'),
     address: Yup.string()
          .required('Address is required.'),
     phoneNumber: Yup.string()
          .required('Phone number is required.')
          .length(13, 'Phone number must contain 13 chars.')
})

export default purchaseSchema;