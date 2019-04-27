import axios from 'axios';

export default {
  getUserById: function(id) {
    return axios.get(`/api/user/${id}`);
  },
  getUsers: function() {
    return axios.get(`/api/users/`);
  },
  getEvents: function() {
    return axios.get(`/api/events/`);
  },
  getEventsById: function(id) {
    return axios.get(`/api/events/${id}`);
  },
  createEvents: function(event) {
    return axios.post(`/api/events/`, event);
  }
};