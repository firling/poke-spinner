import axios from 'axios'
import { IUserWithPoke } from '../@types/poke'

const API_URL = "http://localhost:3000"

export const GET_USER_BY_ACCESSTOKEN_URL = `${API_URL}/auth/me`
export const LOGIN_URL = `${API_URL}/auth/login`
export const REGISTER_URL = `${API_URL}/auth/register`
export const REQUEST_PASSWORD_URL = `${API_URL}/forgot_password`

// Server should return AuthModel
export function getInventory() {
  return axios.get<IUserWithPoke>(`${API_URL}/users/inventory`)
}