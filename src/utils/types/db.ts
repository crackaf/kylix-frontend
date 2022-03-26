export interface IUser {
  user_id: string;
  user_type: string;
  full_name: string;
  phone: string;
  password: string;
  address: string;
  gender: string;
  dob: string;
  auth_code: string;
  ver_status: 'unverified' | 'verified';
}

export interface IUserTypes {
  type_id: number;
  type_name: string;
}

export interface IPatientRating {
  appointment_id: number;
  rating: '1' | '2' | '3' | '4' | '5';
}

export interface IPatientMedicalHistory {
  patient_id: number;
  medical_type_id: number;
  data: string;
}

export interface IPatientComment {
  appointment_id: number;
  comment_data: string;
}

export interface IOtpAuth {
  user_id: number;
  otp_code: string;
}

export interface IMedicalTypes {
  medical_id: number;
  medical_type: string;
}

export interface IDoctorSpeciality {
  doctor_id: number;
  speciality_name: string;
}

export interface IDoctorSchedule {
  doctor_id: number;
  day_name: string;
  start_time: string;
  end_time: string;
}

export interface DoctorContact {
  doctor_id: number;
  contact_id: number;
  contact_data: string;
}

export interface DoctorClinics {
  doctor_id: number;
  clinic_name: string;
  address: string;
  geo_location: string;
}

export interface DoctorAppointment {
  appointment_id: number;
  doctor_id: number;
  patient_id: number;
  date: string;
  start_time: string;
  end_time: string;
  status: 'pending' | 'confirmed' | 'cancelled';
}

export interface ContactTypes {
  contact_id: number;
  contact_name: string;
}
