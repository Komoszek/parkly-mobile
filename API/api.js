import {getAllParkingsSpotsServiceUrl, getAllBookingsServiceUrl,
      getBookedCountUrl, getDeleteBookingUrl, loginUrl, getHeaders} from './UrlProvider.js'
import axios from "axios";

export const getParkingSpots = ({token, pageSize = 20, currentPage = 0, onSuccess = () => {}, onError = () => {}, onFinally = () => {}}) => {
  const url = getAllParkingsSpotsServiceUrl({}, {pageSize: pageSize, currentPage: currentPage});
  return axios.get(url, getHeaders(token))
      .then((res) => onSuccess(res.data.parkingSpots))
      .catch(onError)
      .finally(onFinally);
}

export const getBookings = ({token, pageSize = 20, currentPage = 0, onSuccess = () => {}, onError = () => {}, onFinally = () => {}}) => {
  const url = getAllBookingsServiceUrl({}, {pageSize: pageSize, currentPage: currentPage});

  return axios.get(url, getHeaders(token))
      .then((res) => onSuccess(res.data.bookings))
      .catch(onError)
      .finally(onFinally);
}


export const getSpotsCounter = ({token, onSuccess = () => {}, onError = () => {}, onFinally = () => {}}) => {
  const url = getBookedCountUrl();

  return axios.get(url, getHeaders(token))
      .then((res) => onSuccess(res.data))
      .catch(onError)
      .finally(onFinally);
}

export const cancelBooking = ({token, parkingSpotId, onSuccess = () => {}, onError = () => {}, onFinally = () => {}}) => {
  if(undefined === parkingSpotId) {
    onError('Invalid parking spot id');
    return;
  }

  const url = getDeleteBookingUrl(parkingSpotId);

  return axios.post(url, {}, getHeaders(token))
      .then((res) => onSuccess(res.data))
      .catch(onError)
      .finally(onFinally);
}

export const userSignIn = ({username, password, onSuccess = () => {}, onError = () => {}, onFinally = () => {}}) => {
  const url = loginUrl();

  return axios.post(url, {username:username, password:password})
      .then((res) => onSuccess(res.data.jwttoken))
      .catch(onError)
      .finally(onFinally);
}
