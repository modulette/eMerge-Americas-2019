import axios from 'axios';

export default {
  getUserById: function(id) {
    return axios.get(`http://localhost:4001/user/${id}`);
  },
  getUsers: function() {
    return axios.get(`http://localhost:4001/users/`);
  },
  getEvents: function() {
    return axios.get(`http://localhost:4001/events/`);
  },
  getEventsById: function(id) {
    return axios.get(`http://localhost:4001/events/${id}`);
  },
  createEvents: function(event) {
    return axios.post(`http://localhost:4001/events/`, event);
  }
};