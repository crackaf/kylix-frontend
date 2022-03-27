import { SERVER_API_URL } from '.';

// eslint-disable-next-line max-len
export const GET_USER_DETAILS = `${SERVER_API_URL}/api/get_current_user_details.php`;
export const LOGIN_USER = `${SERVER_API_URL}/api/login_user.php`;
export const REGISTER_USER = `${SERVER_API_URL}/api/register_user.php`;
export const CREATE_OTP = `${SERVER_API_URL}/api/create_otp_for_user.php`;
export const VERIFY_OTP = `${SERVER_API_URL}/api/verify_otp_for_user.php`;
export const SEARCH_DOCTOR = `${SERVER_API_URL}/api/search_doctor.php`;
export const DOCTOR_SCHEDULE = `${SERVER_API_URL}/api/get_doctor_schedule.php`;
export const DOCTOR_CLINICS = `${SERVER_API_URL}/api/get_doctor_clinics.php`;
export const DOCTOR_CONTACT = `${SERVER_API_URL}/api/get_doctor_contact.php`;
