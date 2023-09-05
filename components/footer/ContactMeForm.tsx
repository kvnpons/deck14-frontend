import { useFormik } from "formik";
import * as yup from 'yup';
import { Button, GlobalStyles, TextField } from '@mui/material';
const ContactMeForm = () => {
    const validationSchema = yup.object({
        name: yup
            .string()
            .min(5, 'Must not be less than 5 letters in length')
            .max(30, 'Must not be greated than 30 letters in length')
            .required('Name is required'),
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        mobile: yup
            .string()
            .required()
            .matches(/^[0-9]+$/, "Must be only digits")
            .min(10, 'Must be exactly 10 digits')
            .max(10, 'Must be exactly 10 digits')
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
        onReset: () => {
            alert('RESET')
        }
    });

    return (<div className={'form-container'}>
        <form>

            <h1>Contact Us</h1>
            <TextField
                fullWidth
                id="name"
                name="name"
                label="Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                size={'small'}
                className="form-element"
                style={{
                    color: "white"
                }}
                margin="normal"
            />
            <TextField
                fullWidth
                id="email"
                name="email"
                label="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                size={'small'}
                className="form-element"
                margin="normal"
            />
            <TextField
                fullWidth
                id="mobile"
                name="mobile"
                label="Mobile No."
                value={formik.values.mobile}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                helperText={formik.touched.mobile && formik.errors.mobile}
                size={'small'}
                margin="normal"
                
            />
            <Button className={"footer-submit form-element"} variant="contained" fullWidth type="submit" style={{
                    color: "white",
                    backgroundColor: "black"
                }}  >Submit</Button>
        </form>
    </div>)
}

export default ContactMeForm