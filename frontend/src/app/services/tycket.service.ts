import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TycketService {
  private baseUrl = 'http://127.0.0.1:8000/api';
  private imageUrl = 'http://127.0.0.1:8000/storage/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    })
  };
  email = '';
  constructor(private http: HttpClient) { }
  login(data) {
    return this.http.post(`${this.baseUrl}/auth/login`, data);
  }
  logout(email) {
    return this.http.get(`${this.baseUrl}/logout/${email}`);
  }
  setLogin($email){
    this.email = $email;
  }
  getLogin(){
    return this.email;
  }
  addpost(data){
    return this.http.post(`${this.baseUrl}/addpost`, data);
  }
  register(data) {
    return this.http.post(`${this.baseUrl}/auth/register`, data);
  }
  addevent(data) {
    return this.http.post(`${this.baseUrl}/addevent`, data);
  }
  addcategory(data) {
    return this.http.post(`${this.baseUrl}/addcategory`, data);
  }
  updatepost(data) {
    return this.http.post(`${this.baseUrl}/updatepost`, data);
  }
  deletepost(id) {
    return this.http.get(`${this.baseUrl}/deletepost/${id}`);
  }
  publish(id) {
    return this.http.get(`${this.baseUrl}/publishpost/${id}`);
  }
  moodifyCategory(data) {
    return this.http.post(`${this.baseUrl}/modifyCategory`, data);
  }
  getCategory(catType, event) {
    return this.http.get(`${this.baseUrl}/getcategory/${catType}/${event}`);
  }
  getAllPosts(email) {
    return this.http.get(`${this.baseUrl}/getallposts/${email}`);
  }
  getUnpublishedPost(email) {
    return this.http.get(`${this.baseUrl}/getunpublished/${email}`);
  }
  deleteEvent(id) {
    return this.http.get(`${this.baseUrl}/deleteEvent/${id}`);
  }
  deleteCategory(id) {
    return this.http.get(`${this.baseUrl}/deleteCategory/${id}`);
  }
  getTicket(data){
    return this.http.get(`${this.baseUrl}/getticket/${data}`);
  }
  getevent(data) {
    return this.http.get(`${this.baseUrl}/modifyevent/${data}`);
  }
  getUserInfo(data){
    return this.http.get(`${this.baseUrl}/userInfo/${data}`)
  }
  getBelongingTicket(data) {
    return this.http.get(`${this.baseUrl}/yourticket/${data}`)
  }
  allEvent(){
    return this.http.get(`${this.baseUrl}/allEvent`);
  }
  postInfo(data) {
    return this.http.get(`${this.baseUrl}/postInfo/${data}`);
  }
  imagebaseUrl(data) {
    return (this.imageUrl + data);
  }
  setUserData(data) {
    localStorage.setItem('access_token', data['access_token']);
    // localStorage.setItem('name', data['user']['name']);
    localStorage.setItem('email', data['email']);
  }
  setEventDetails(data){
    localStorage.setItem('event_id', data['id']);
    localStorage.setItem('name', data['name']);
    localStorage.setItem('type', data['type']);
    localStorage.setItem('location', data['location']);
    localStorage.setItem('venue', data['venue']);
    localStorage.setItem('date', data['date']);
    localStorage.setItem('image', data['image']);
  }
  getEventDetails(){
    const eventdetails = {
      'event_id' : localStorage.getItem('event_id'),
      'name': localStorage.getItem('name'),
      'type': localStorage.getItem('type'),
      'location': localStorage.getItem('location'),
      'venue': localStorage.getItem('venue'),
      'date': localStorage.getItem('date'),
      'image': localStorage.getItem('image'),
    };
    // console.log(eventdetails);
    return eventdetails;
  }
  // get user data from storage
  getUserData() {
    const userData = {
      // 'name' : localStorage.getItem('name'),
      'email' : localStorage.getItem('email')
    };
    console.log(userData);
    return userData;
  }
  clearlLocalStorage(){
    localStorage.clear();
  }
}
