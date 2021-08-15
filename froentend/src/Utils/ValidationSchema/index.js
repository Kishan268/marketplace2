import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    f_name: Yup.string()
      .max(50, 'Too Long!')
      .required('Please Enter First Name!'),
    l_name: Yup.string()
    .max(50, 'Too Long!')
    .required('Please Enter Last Name!'),
    dob: Yup.string().required('Please Enter Date of Birth!'),
     // gender: Yup.string().required('Select the Gender!'),
    address: Yup.string().required('Please Enter Address!'),
    // city: Yup.string().required('Please Select City!'),
    // district_town: Yup.string().required('Please Select District!'),
    // state: Yup.string().required('Please Select State!'),
    // country: Yup.string().required('Please Select Country!'),
    phone_no: Yup.string()
    .min(10, 'Mobile Number should be 10 digits!')
    .max(12, 'Mobile Number should be 10 digits!')
    .required('Please Enter 10 digits mobile number!'),
    zip: Yup.string()
    .min(5, 'Zip Code should be 5 digits!')
    .max(10, 'Zip Code should be 10 digits!')
    .required('Please Zip Code!'),
    email: Yup.string().email('Invalid email').required('Please enter email!'),
    password: Yup.string()
    .min(6, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Please enter password!'),
    password_confirmation: Yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    )
    }),
     
  });
export const billingAddressForm = Yup.object().shape({
    f_name: Yup.string()
      .max(50, 'Too Long!')
      .required('Please Enter First Name!'),
    l_name: Yup.string()
    .max(50, 'Too Long!')
    .required('Please Enter Last Name!'),
    dob: Yup.string().required('Please Enter Date of Birth!'),
     // gender: Yup.string().required('Select the Gender!'),
    address: Yup.string().required('Please Enter Address!'),
    // city: Yup.string().required('Please Select City!'),
    // district_town: Yup.string().required('Please Select District!'),
    // state: Yup.string().required('Please Select State!'),
    // country: Yup.string().required('Please Select Country!'),
    phone_no: Yup.string()
    .min(10, 'Mobile Number should be 10 digits!')
    .max(12, 'Mobile Number should be 10 digits!')
    .required('Please Enter 10 digits mobile number!'),
    zip: Yup.string()
    .min(5, 'Zip Code should be 5 digits!')
    .max(10, 'Zip Code should be 10 digits!')
    .required('Please Zip Code!'),
    email: Yup.string().email('Invalid email').required('Please enter email!'),
    password: Yup.string()
    .min(6, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Please enter password!'),
    password_confirmation: Yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    )
    }),
     
  });

  export const LoginSchema = Yup.object().shape({
     email: Yup.string().email('Invalid email').required('Please enter email!'),
    password: Yup.string()
      .min(6, 'Password length must be 8!')
      .max(15, 'Your password will hold 15 number or character!')
      .required('Please Enter Password!'), 
  });

  export const OtpSchema = Yup.object().shape({
    mobile: Yup.string()
      .min(2, 'Mobile Number length should be 10 digits!')
      .max(50, 'Too Long!')
      .required('Please Enter 10 Digits Mobile Number!'),
    otp: Yup.string()
      .min(4, 'Please Enter 4 Digits OTP!')
      .max(4, 'OTP should be 4 digits!')
      .required('Please Enter 4 Digits OTP!'), 
  });
  
  export const ForgetMobileSchema = Yup.object().shape({
    emailORmobile: Yup.string()
      .min(2, 'Mobile Number length should be 10 digits!')
      .max(50, 'Too Long!')
      .required('Please Enter 10 Digits Mobile Number or email!'), 
  });

  export const ChanePasswordSchema = Yup.object().shape({
    password: Yup.string().required("This field is required"),
    changepassword: Yup.string().when("password", {
      is: val => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password need to be the same"
      )
    })
  });