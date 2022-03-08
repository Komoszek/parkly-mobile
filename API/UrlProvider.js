const apiUrl = __DEV__ ? 'http://192.168.0.199:8080' : 'https://parkly-backend.azurewebsites.net';

export const getAllParkingsSpotsServiceUrl = (
  filterParams,
  paginationOptions,
  sortingOption
) => getServiceUrl("/parking-spots", filterParams, paginationOptions, sortingOption);

export const getAddParkingSpotUrl = () => `${apiUrl}/parking-spots`;

export const getAllBookingsServiceUrl = (
  filterParams,
  paginationOptions,
  sortingOption
) => getServiceUrl('/bookings', filterParams, paginationOptions, sortingOption);

export const getServiceUrl = (
  endpoint,
  filterParams,
  paginationOptions,
  sortingOption
) => {
  let urlWithParams = `${apiUrl}${endpoint}?page-size=${paginationOptions.pageSize}&page-number=${paginationOptions.currentPage}`;

  return urlWithParams;
};

export const getDeleteBookingUrl = (parkingSpotId) =>
  `${apiUrl}/parking-spots/${parkingSpotId}/release`;

export const getBookedCountUrl = () =>
  `${apiUrl}/parking-spots/booked-count`;

export const loginUrl = () =>
  `${apiUrl}/authenticate`;

export const getHeaders = (token) => ({
        headers: {
       Authorization: `Bearer ${token}`
     }
   });
