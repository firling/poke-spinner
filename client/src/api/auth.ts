import axios from 'axios'
import { IUser } from '../@types/auth'

const API_URL = "http://localhost:3000"

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/auth/me`
export const LOGIN_URL = `${API_URL}/auth/login`
export const REGISTER_URL = `${API_URL}/auth/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`

// Server should return AuthModel
export function login(username: string, password: string) {
  return axios.post(LOGIN_URL, {
    username,
    password,
  })
}

// Server should return AuthModel
export function register(username: string, password: string) {
  return axios.post(REGISTER_URL, {
    username,
    password,
  })
}

// Server should return object => { result: boolean } (Is Email in DB)
export function requestPassword(username: string) {
  return axios.post<{result: boolean}>(REQUEST_PASSWORD_URL, {
    username,
  })
}

export function getUserByToken() {
  return axios.get<IUser>(GET_USER_BY_ACCESSTOKEN_URL)
}
