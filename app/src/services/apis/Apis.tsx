import {COURSES_URL} from '../urls/Urls'
import axios from 'axios'

export const getCourses = async () => {
  const response = await axios.get(COURSES_URL)
  return response
}